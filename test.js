const corta = require('./corta');

let data = '<div class="algo">conteudo extraido</div>';
var res = corta(data, '<div class="algo">', '</div>');
console.log(res);
