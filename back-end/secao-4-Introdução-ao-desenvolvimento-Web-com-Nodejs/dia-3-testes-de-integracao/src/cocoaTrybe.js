// src/cacaoTrybe.js

const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cocoaTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const updateChoco = async (index, newObj) => {
    const path = '/files/cocoaTrybeFile.json';
    const completePath = join(__dirname, path);
    const cacaoTrybe = await readCacaoTrybeFile();
    cacaoTrybe.chocolates[index] = {...cacaoTrybe.chocolates[index], ...newObj};
    try {
        console.log(cacaoTrybe);
        await fs.writeFile(completePath, JSON.stringify(cacaoTrybe));
        return cacaoTrybe;
    } catch (error) {
        return null
    }

}

const writeCacaoTrybeFile = async (content) => {
    const path = '/files/cocoaTrybeFile.json';
    try {
      const completePath = join(__dirname, path);
      await fs.writeFile(completePath, JSON.stringify(content));
    } catch (e) {
      console.error('Erro ao salvar o arquivo', e.message);
      return null;
    }
  }
  
  const updateChocolate = async (id, update) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    const chocolateToUpdate = cacaoTrybe.chocolates.find(
      (chocolate) => chocolate.id === id,
    );
  
    if (chocolateToUpdate) {
      cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
          if (chocolate.id === id) return { ...chocolate, ...update };
          return chocolate;
        });
    
      await writeCacaoTrybeFile(cacaoTrybe);
      return { ...chocolateToUpdate, ...update };
    }
  
    return false;
  };

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

getAllChocolates();

module.exports = {
    getAllChocolates,
    updateChoco,
    updateChocolate
};

