// 20 - Mostre no console o nome de um amigo de cada lista.

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

const filterName = () => {
  for (let i = 0; i < register.length; i++) {
    let friend = register[i].friends;
    let friendsArray = friend.split(", ")
    let firstFriend = friendsArray[0];
    console.log(`O primeiro amigo de ${register[i].name} é ${firstFriend}`);
  }
}

filterName();
