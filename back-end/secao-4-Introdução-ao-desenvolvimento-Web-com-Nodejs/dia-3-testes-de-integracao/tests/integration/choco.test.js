// tests/integration/chocolates.test.js

const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacao Trybe', function () {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  })

  afterEach(() => {
    sinon.restore();
  })
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
      console.log('a');
      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });

    it('Retorna a quantidade de chocolates que existem na base de dados', async () => {
      const response = await chai.request(app).get('/chocolates/total')
      expect(response.status).to.equal(200);
      expect(response.body.totalChocolates).to.equal(4);
    });

    it('Pesquisa de chocolates por nome', async () => {
      const response = await chai.request(app).get('/chocolates/search?name=Mo')
      expect(response.status).equal(200);
      expect(response.body.length).equal(2)
    })

    describe('Utilizando método PUT em chocolates/:id', () => {
      it('Atualiza um chocolate existente', async function () {
        const response = await chai
          .request(app)
          .put('/chocolates/1').send({
          name: 'Mint Pretty Good',
          brandId: 2,
        });
  
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolate).to.deep.equal({
          id: 1,
          name: 'Mint Pretty Good',
          brandId: 2,
        });
      });
    })
  });
});