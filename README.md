# Challenge ONE | Lógica de Programação | Decodificador de texto
### Seja bem vindo ao projeto base do Decodificador de texto! Passos fundamentais:

<p align="center" >
     <img width="600" heigth="600" src="https://user-images.githubusercontent.com/91544872/157673876-2c51fc09-5bed-48c0-aad3-97fc7fa64d1d.png">
</p>
# README - Criptografia/Descriptografia de Texto

## Descrição

Este conjunto de funções em JavaScript implementa um sistema simples de criptografia e descriptografia de texto. As funções aceitam uma entrada de texto e aplicam transformações específicas para criptografar ou descriptografar o conteúdo.

<p align="center" >
     <img style="width: 500px;" src="https://github.com/GabrielFelipeS/challenger-one/assets/108304564/6761d44d-c901-4923-a4fb-04e5caede279"></img>
</p>

### Criptografar

A função `criptografar` realiza a criptografia do texto inserido. Ela substitui determinadas letras por sequências específicas e exibe o texto criptografado. O código inclui as seguintes substituições:

- 'e' é substituído por 'enter'
- 'i' é substituído por 'imes'
- 'a' é substituído por 'ai'
- 'o' é substituído por 'ober'
- 'u' é substituído por 'ufat'

### Descriptografar

A função `descriptografar` realiza a descriptografia do texto inserido. Ela reverte as substituições aplicadas pela função de criptografia, identificando as sequências específicas e restaurando as letras originais. O código considera as seguintes substituições:

- 'enter' é substituído por 'e'
- 'imes' é substituído por 'i'
- 'ai' é substituído por 'a'
- 'ober' é substituído por 'o'
- 'ufat' é substituído por 'u'

### Copiar

A função `copiar` copia o texto descriptografado para a área de transferência, permitindo que o usuário o cole em outro lugar.

## Uso

1. Incorporar o código JavaScript em uma página HTML.
   
    ```html
    <script>
        // Coloque as funções aqui
    </script>
    ```

2. Use as funções nos elementos HTML correspondentes:

    ```html
    <textarea id="criptografado-descriptografado" placeholder="Insira o texto"></textarea>
    <button onclick="criptografar()">Criptografar</button>
    <button onclick="descriptografar()">Descriptografar</button>
    <button onclick="copiar()">Copiar</button>
    <textarea id="textarea" placeholder="Texto criptografado/descriptografado"></textarea>
    ```

3. Insira texto no campo "Insira o texto" e clique nos botões "Criptografar" ou "Descriptografar" conforme necessário. O texto resultante aparecerá no campo "Texto criptografado/descriptografado".

4. Clique no botão "Copiar" para copiar o texto descriptografado para a área de transferência.

