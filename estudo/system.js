const teste = require('prompt-sync')({ sigint: true });

let saldo;
saldo = "2000";

let objetivo = teste("Digite que função deseja realizar entre as seguintes opções(deposito, transferência ou saque: ")

if (objetivo = "transferencia") {
    valorDeTransferencia = teste('Digite o valor da transferência: $');
    let saldoPosTransferencia = saldo - valorDeTransferencia;
    if (valorDeTransferencia > saldo) {
    console.log(`Você não tem saldo suficiente para essa transferência, seu saldo é de apenas: $${saldo}`)
} else {
    console.log(`O valor da transferência é de = $${valorDeTransferencia}, seu saldo atual é de: $${saldoPosTransferencia}`);
}
    
}
   



