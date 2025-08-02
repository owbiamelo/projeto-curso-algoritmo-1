/*programa
{ ESTRUTURA PARA FAÇA
	
	funcao inicio()
	{
		inteiro numero, fatorial, contador

		escreva ("Digite o número para calcular seu fatorial. ")
		leia (numero)

		fatorial = 1

		para (contador=1; contador <= numero; contador++)
		{
			fatorial = (fatorial * contador)
		}
		escreva ("O fatorial de ", numero, " é: ", fatorial)
	}
}
*/



function acaoBotao()
{
    var numero, fatorial, contador;
    numero = prompt("Digite o número para calcular seu fatorial: ");
    fatorial = 1;
    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador;
    }
    alert("O fatorial de " + numero + " é: " + fatorial);
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial;


}