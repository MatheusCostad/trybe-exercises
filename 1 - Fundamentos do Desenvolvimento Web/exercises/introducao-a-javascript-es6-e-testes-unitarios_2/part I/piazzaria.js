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
      margherita: {
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
  const orderValues = Object.values(order);
  const addressValues = Object.values(order['address']);
  const orderValues2 = Object.values(order['order']);
  console.log(`Olá ${orderValues2[2].deliveryPerson}, entrega para: ${orderValues[0]}, Telefone: ${orderValues[1]}, R. ${addressValues[0]}, Nº: ${addressValues[1]}, AP: ${addressValues[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = '50';
  const pizzaKey = Object.keys(order.order.pizza);
  const drinksValues = Object.values(order.order.drinks.coke);
  console.log(`Olá ${order.name}, o total do seu pedido de , ${pizzaKey[0]} e ${drinksValues[0]} é R$ ${order.payment.total},00.`);
}

orderModifier(order);