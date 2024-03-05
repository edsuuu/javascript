/*
705.484.450-52 070.987.720-03

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237 
Resultado = somar todos  

11 - (237 % 11) = 5 (Primeiro dígito)
se o numero digito for maior que 9, consideramos 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11 10   9    8   7   6   5  4   3   2
77  0   45  32  56  24  20  20  0   10 = 284
Resultado = somar todos

11 - (284 % 11) = 2 (Primeiro dígito)
se o numero digito for maior que 9, consideramos 0
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.Valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    // console.log(cpfArray);

    let regressivo = cpfArray.length + 1;
    // console.log(regressivo);

    const total = cpfArray.reduce((acumulador, val) => {
        // console.log(regressivo, typeof val, regressivo * val);
        acumulador += (regressivo * Number(val));
        regressivo--;
        
        return acumulador;
    }, 0);
    // console.log(total)//valor da soma 
    
  const digito = 11 - (total % 11);
//   console.log(digito);
  return digito > 9 ? '0' : String(digito);

};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);

    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('');
// console.log(cpf.Valida());

if (cpf.Valida()) {
    console.log('CPF válido');
}else{
    console.log('CPF invalido');
}