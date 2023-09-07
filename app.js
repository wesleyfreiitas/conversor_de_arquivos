var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var Writer = require("./Writer");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader()
var escritor = new Writer()

async function main() {
    var dados = await leitor.Read("./lista.txt");
    var dadosProcessados = Processor.Process(dados);
    // console.log(dadosProcessados)
    var usuarios = new Table(dadosProcessados);
    var html = await HtmlParser.Parse(usuarios)
    
    escritor.Write(Date.now()+".html",html)
    PDFWriter.WriterPDF(Date.now()+".pdf", html)
}

main();