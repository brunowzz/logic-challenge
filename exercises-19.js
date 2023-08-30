// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

const register = [
  {
    name: "Bruno",
    age: 17,
    phone: 62985449141,
    friends: "VT, Iuri, Savio, Luiz Michel, David, Pietro",
  },
  {
    name: "Vt",
    age: 21,
    phone: 21999999999,
    friends: "Bruno, Iuri, Savio, Luiz Michel, David, Pietro",
  },
  {
    name: "Iuri",
    age: 28,
    phone: 21999999999,
    friends: "Bruno, VT, Savio, Luiz Michel, David, Pietro",
  },
  {
    name: "Savio",
    age: 21,
    phone: 21999999999,
    friends: "Bruno, Iuri, VT, Luiz Michel, David, Pietro",
  },
  {
    name: "Luiz Michel",
    age: 21,
    phone: 21999999999,
    friends: "Bruno, Iuri, Savio, VT, David, Pietro",
  },
];

console.table(register);
