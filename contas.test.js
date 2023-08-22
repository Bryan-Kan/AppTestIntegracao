const contas = require('./contas');

test("Soma 2+5 esperado 7 como resultado", ()=>{
    ecpect(contas.soma(2,5).tobe(7))

})