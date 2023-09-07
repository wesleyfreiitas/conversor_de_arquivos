var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");

var leitor = new Reader()

async function main() {
    var dados = await leitor.Read("./lista.txt");
    var dadosProcessados = Processor.Process(dados);
    // console.log(dadosProcessados)
    var usuarios = new Table(dadosProcessados);

    console.log(usuarios.RowCount)
    console.log(usuarios.ColumnCount)
}

main();