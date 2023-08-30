// 17 - Remova uma propriedade desse objeto.

const object = {
  name: "Bruno",
  age: 17,
  address: "Rua dos Prazeres",
};

object.mood = "normal";

delete object.address;

console.table(object);
