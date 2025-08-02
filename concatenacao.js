var nome, numero;

nome = prompt("Digite o nome desejado: ");
numero = prompt ("Digite um número: ");

document.getElementById("paragrafo").innerText = "Olá " + nome + ", o número digitado foi: " + numero;
alert("Olá " + nome + ", o número digitado foi: " + numero);

