/*programa
{
 ESTRUTURA ENQUANTO 
	
	funcao inicio()
	{
 
		cadeia nome
		inteiro idade, limite, contador

		escreva ("Digite a quantidade de vezes que será verificado a idade: ")
		leia (limite)
		contador = 0
		enquanto (contador < limite)
		{	escreva ("Digite o nome da pessoa: ")
			leia (nome)
			escreva ("Digite a idade de ", nome , ": ")
			leia (idade)
			 	se (idade >= 18 )
			 	escreva (nome, "Você é maior de idade!\n")
			 	senao 
			 	escreva (nome, "Você é menor de idade!")
		}
		contador = (contador + 1)	 	
			 	
			 	
	}
}*/

var nome, idade, limite, contador;
function acaoBotao() 
{
    limite = prompt("Digite a quantidade de vezes que será verificado a idade: ");
    contador = 0;

    while (contador < limite) {
        nome = prompt("Digite o nome da pessoa: ");
        idade = prompt("Digite a idade de " + nome + ": ");

        if (idade >= 18) {
            alert(nome + ", você é maior de idade!");
            document.getElementById("paragrafo").innerText = nome + ", você é maior de idade!";
        } else {
            alert(nome + ", você é menor de idade!");
            document.getElementById("paragrafo").innerText = nome + ", você é menor de idade!";
        }
        
        contador++;
    }
}
