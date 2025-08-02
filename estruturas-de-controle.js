/*programa
{
 ESTRUTURAS DE CONTROLE
	
	funcao inicio()
	{

		cadeia nome
		real nota01, nota02, media

		escreva ("Digite o nome desejado: ")
		leia (nome)
		escreva ("Digite a primeira nota: ")
		leia (nota01)

		escreva ("Digite a segunda nota: ")
		leia (nota02)
		
		media = ((nota01 + nota02) /2)

		escreva ("A media do aluno ", nome, " é: ", media, "\n")

		se (media >= 50)
			{
				escreva ("O aluno ", nome, " foi Aprovado!\n")
			}

		senao 
			{
				escreva ("O aluno ", nome, " foi Reprovado!\n")
			}
				
	}
}
 */


var nome, nota01, nota02, media

nome = prompt("Digite o nome desejado: ");
nota01 = prompt("Digite a primeira nota: ");
nota02 = prompt("Digite a segunda nota: ");

media = ((parseFloat(nota01) + parseFloat(nota02)) / 2);
alert("A média do aluno " + nome + " é: " + media);

if (media >= 50) {
    alert("O aluno " + nome + " foi Aprovado!");
} 
else {
    alert("O aluno " + nome + " foi Reprovado!");
}