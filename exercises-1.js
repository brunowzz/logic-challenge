// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

const hour = new Date();
hour.getHours();

if (hour >= 6 && hour <= 18) {
  console.log("Claro");
} else {
  console.log("Noite");
}
