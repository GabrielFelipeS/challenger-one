function criptografar() {
    let textarea = document.getElementById("criptografado-descriptografado");
    var texto = textarea.value;
    let tamanho = texto.length;

    if(tamanho != 0) {
        document.getElementById("content").style.display = "none";

        document.getElementById("criptografado-descriptografado").value = "";

        let cripto_descripto = document.getElementById("textarea");

        cripto_descripto.style.display = "flex";
        var string = '';
        for (var i = 0 ; i < tamanho; i++) {
            if(texto[i] == 'e'){
                string = string.concat('enter');
                console.log('e');
            } else if(texto[i] == 'i') {
                string = string.concat('imes');
                console.log('i');
            } else if(texto[i] == 'a') {
                string = string.concat('ai');
                console.log('a');
            } else if(texto[i] == 'o') {
                string = string.concat('ober');
                console.log('o');
            } else if(texto[i] == 'u') {
                string = string.concat(string, 'ufat');
                console.log('u');
            } else {
                string = string.concat(texto[i]);
                console.log('foi porra');
            }
        }
        console.log(string);
        cripto_descripto.value = string;
    }
}

function descriptografar() {

}