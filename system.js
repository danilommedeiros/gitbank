const inputObjetivo = require("prompt-sync")({ sigint: true });
const inputTransferencia = require("prompt-sync")({ sigint: true });
const inputDeposito = require("prompt-sync")({ sigint: true });
const inputTenteDenovo = require("prompt-sync")({ sigint: true });

let saldo;
saldo = "1000";

console.log(
  "Olá seja bem vindo(a) ao Gitbank o mais novo banco desenvolvido por um dev 💰💳. Espero que possa te ajudar a realizar suas operações 😁🤚."
);
console.log(
  "A propósito você recebeu uma bonificação de R$1000.00; Então faça bom uso e aproveite de todo nosso banco."
);
console.log(`Seu saldo atual é de: R$${saldo}`);
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
      )
    }, 4000);
    setTimeout(() => {
      console.log("Tente novamente com um valor válido.");
    }, 6000);
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
  }, 5000);
  setTimeout(() => {
    console.log("Tudo certo, obrigado(a) por aguardar...");
  }, 9000);
  setTimeout(() => {
    console.log(
      `Deposito efetuado com sucesso. Seu saldo atual é de: R$${saldoPosDeposito}.`
    );
  }, 11000);
}
if (objetivo === "") {

  const desejo = inputTenteDenovo("Você não selecionou nenhuma opção. Tente novamente com a ação que deseja fazer: ");

  
  
  if (desejo === "transferencia") {
  valorDeTransferencia = inputTransferencia(
    "Digite o valor da transferência: R$"
  )
  if (valorDeTransferencia > saldo) {
    console.log("Aguarde, estamos conferindo...");
    setTimeout(() => {
      console.log(
        `Você não tem saldo suficiente para essa transferência, seu saldo é de apenas: R$${saldo}.`
      )
    }, 4000);
    setTimeout(() => {
      console.log("Tente novamente com um valor válido.")
    }, 6000);
  } else {
    let saldoPosTransferencia = saldo - valorDeTransferencia;
    console.log("Aguarde, estamos transferindo...");
    setTimeout(() => {
      console.log("Tudo certo! Obrigado(a) por aguardar...")
    }, 6000);
    setTimeout(() => {
      console.log(
        `O valor da transferência foi de: R$${valorDeTransferencia}, seu saldo atual é de: R$${saldoPosTransferencia}`
      )
    }, 8000);
  }
}
  
  
  
  if (desejo === "deposito") {
  let valorDeDeposito = inputDeposito("Digite o valor do depósito: R$");
  let saldoPosDeposito = parseInt(saldo) + parseInt(valorDeDeposito);
  let inserirNotas = inputDeposito("Tecle enter para confirmar a operação: ");
  setTimeout(() => {
    console.log("Aguarde, estamos conferindo...");
  }, 5000);
  setTimeout(() => {
    console.log("Tudo certo, obrigado por aguardar...");
  }, 9000);
  setTimeout(() => {
    console.log(
      `Deposito efetuado com sucesso. Seu saldo atual é de: R$${saldoPosDeposito}.`
    );
  }, 11000);
}
   
  



}
