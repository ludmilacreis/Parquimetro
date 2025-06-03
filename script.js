//Definir classe

class Parquimetro{
    constructor(){
    this.tabelaValores = [
        { valor: 3.00, tempo: 120 },
        { valor: 1.75, tempo: 60 },
        { valor: 1.00, tempo: 30}
    ];
    this.ValorMinimo = 1.00;
    this.TempoMaximo = 120;
    
    }
    calcularTempo(valorInserido){
        if (valorInserido < this.ValorMinimo){
            return{
                mensagem: "Valor insuficiente",
                tempo: 0,
                troco: valorInserido
            };

        }

        let tempoTotal = 0;
        let valorRestante = valorInserido;

        for (let item of this.tabelaValores) {
            while (valorRestante >= item.valor && tempoTotal + item.tempo <= this.TempoMaximo) {
                valorRestante -= item.valor;
                tempoTotal += item.tempo;
            }

        } 
        return {
            mensagem: `Tempo total: ${tempoTotal} minutos`,
            tempo: tempoTotal,
            troco: parseFloat(valorRestante.toFixed(2))
        };
    }
}

function pagarParquimetro() {
  const valor = parseFloat(document.getElementById('valor').value);
  const resultadoDiv = document.getElementById('demonstrativo');

  if (isNaN(valor)) {
    resultadoDiv.innerHTML = "Por favor, insira um valor válido.";
    return;
  }

  const parquimetro = new Parquimetro();
  const resultado = parquimetro.calcularTempo(valor);

 if (resultado.tempo > 0) {
  resultadoDiv.innerHTML = 
    `${resultado.mensagem}<br>Troco: R$ ${resultado.troco.toFixed(2)}`;
} else {
  resultadoDiv.innerHTML = resultado.mensagem;
}
}