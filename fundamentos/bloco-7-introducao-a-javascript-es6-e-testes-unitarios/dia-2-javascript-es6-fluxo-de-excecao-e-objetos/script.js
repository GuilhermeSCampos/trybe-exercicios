const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phone = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const ap = order.address.apartment;
    
    console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, R.${street}, Nº: ${number}, AP: ${ap}`);
  }

  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newBuyer = order.name = `Luiz Silva`;
    const sabor1 = Object.keys(order.order.pizza)[0];
    const sabor2 = Object.keys(order.order.pizza)[1];
    const bebida = order.order.drinks.coke.type;
    const preco = `50`;
    console.log(`Olá ${newBuyer}, o total do seu pedido de ${sabor1}, ${sabor2} e ${bebida} é ${preco}.`);
  }
  
  orderModifier(order);