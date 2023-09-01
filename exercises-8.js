// 08 - crie uma função que  verifique se uma  variável é true ou false

const newFunction = () => {
  const x = new Boolean(false);
  const verify = x;

  if (verify === true) {
    console.log(`O valor recebido é true`);
  } else {
    console.log(`O valor recebido é false`);
  }

  return verify;
};

newFunction();
