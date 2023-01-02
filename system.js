const inputObjetivo = require("prompt-sync")({ sigint: true });
const inputTransferencia = require("prompt-sync")({ sigint: true });
const inputDeposito = require("prompt-sync")({ sigint: true });

let saldo;
saldo = "846.64";

console.log(
  "Olá seja bem vindo(a) ao Gitbank o mais novo banco desenvolvido por um dev 💰💳. Espero que possa te ajudar a realizar suas operações 😁🤚."
);
console.log(`Seu saldo atual é de: R$${saldo}.`);
let objetivo = inputObjetivo(
  "Digite que função deseja realizar entre as seguintes opções(depósito, transferência ou saque, obs: não é necessário acentuação): "
);

if (objetivo === "transferencia") {
  valorDeTransferencia = inputTransferencia(
    "Digite o valor da transferência: R$"
  );
  if (valorDeTransferencia > saldo) {
    console.log("Aguarde, estamos conferindo...");
    setTimeout(() => {
      console.log(
        `Você não tem saldo suficiente para essa transferência, seu saldo é de apenas: R$${saldo}.`
      );
    }, 2000);
    setTimeout(() => {
      console.log("Tente novamente com um valor válido.");
    }, 4000);
  } else {
    let saldoPosTransferencia = saldo - valorDeTransferencia;
    console.log("Aguarde, estamos transferindo...");
    setTimeout(() => {
      console.log("Tudo certo! Obrigado(a) por aguardar...");
    }, 6000);
    setTimeout(() => {
      console.log(
        `O valor da transferência foi de: R$${valorDeTransferencia}, seu saldo atual é de: R$${saldoPosTransferencia}`
      );
    }, 8000);
  }
}

if (objetivo === "deposito") {
  let valorDeDeposito = inputDeposito("Digite o valor do depósito: R$");
  let saldoPosDeposito = parseInt(saldo) + parseInt(valorDeDeposito);
  let inserirNotas = inputDeposito("Tecle enter para confirmar a operação: ");
  setTimeout(() => {
    console.log("Aguarde, estamos conferindo...");
  }, 4000);
  setTimeout(() => {
    console.log("Tudo certo, obrigado por aguardar...");
  }, 6000);
  setTimeout(() => {
    console.log(
      `Deposito efetuado com seucesso. Seu saldo atual é de: R$${saldoPosDeposito}.`
    );
  }, 8000);
}
