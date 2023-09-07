var pdf = require('html-pdf')

class PDFWriter{
static WriterPDF(filename,html){
    //conteudo html que vai ser renderizado é tratado dentro do create
// .tofile pra informar ao node que eu quero um arquivo
    pdf.create(html,{}).toFile(filename,(err)=>{})
}
}
module.exports = PDFWriter