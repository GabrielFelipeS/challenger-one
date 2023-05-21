function criptografar() {
    let textarea = document.getElementById("criptografado-descriptografado");
    var texto = textarea.value;
    let tamanho = texto.length;

    console.log(texto);

    if(tamanho != 0) {
        document.getElementById("content").style.display = "none";

        textarea.value = "";

        let cripto_descripto = document.getElementById("textarea");

        cripto_descripto.style.display = "flex";
        var string = '';
        for (var i = 0 ; i < tamanho; i++) {
            console.log(string);
            if(texto[i] == 'e'){
                string = string.concat('enter');
            } else if(texto[i] == 'i') {
                string = string.concat('imes');

            } else if(texto[i] == 'a') {
                string = string.concat('ai');

            } else if(texto[i] == 'o') {
                string = string.concat('ober');

            } else if(texto[i] == 'u') {
                string = string.concat('ufat');

            } else {
                string = string.concat(texto[i]);
   
            }
        }
        console.log(string);
        cripto_descripto.value = string;
    }
}

function descriptografar() {
    let textarea = document.getElementById("criptografado-descriptografado");
    let texto = textarea.value;
    let tamanho = texto.length;
    
    console.log(texto);

    if(tamanho != 0) {
        document.getElementById("content").style.display = "none";
        textarea.value = '';

        let descripto = document.getElementById("textarea");
        descripto.style.display = "flex";
        var string = '';
        var codif = 0;
        for(var i = 0; i < tamanho; i++) {
            console.log(string);
            if(texto[i] == 'e' && texto[i + 1] == 'n' && texto[i + 2] == 't' &&  texto[i + 3] == 'e' && texto[i + 4] == 'r') {
                string = string.concat('e');
                i += 4;
                codif = 5;

            } else  if(texto[i] == 'i' && texto[i + 1] == 'm' && texto[i + 2] == 'e' &&  texto[i + 3] == 's') {
                string = string.concat('i');
                i += 3;

            }else  if(texto[i] == 'a' && texto[i + 1] == 'i') {
                string = string.concat('a');
                i++;

            }else if(texto[i] == 'o' && texto[i + 1] == 'b' && texto[i + 2] == 'e' &&  texto[i + 3] == 'r') {
                string = string.concat('o');
                i += 3;

            }else if(texto[i] == 'u' && texto[i + 1] == 'f' && texto[i + 2] == 'a' &&  texto[i + 3] == 't') {
                string = string.concat('u');
                i += 3;
                codif += 3;

            } else {
                string = string.concat(texto[i]);

            }
           
        }
        console.log(string);
        descripto.value = string;
    }
}