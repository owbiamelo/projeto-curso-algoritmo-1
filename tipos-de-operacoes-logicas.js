/*programa
{
  TIPOS DE OPERAÇÕES LÓGICAS 
	
	funcao inicio()
	{
		cadeia nome
		real nota01, nota02, media
		logico passou

		passou = falso
		
		escreva ("Digite o nome desejado: ")
		leia (nome)
		
		escreva ("Digite a primeira nota: ")
		leia (nota01)

		escreva ("Digite a segunda nota: ")
		leia (nota02)
		
		media = ((nota01 + nota02) /2)

			se (media >= 50) 
				escreva ("Aprovado! ", nome)
			
			senao se (passou)
				escreva ("Aprovado! ", nome)
			senao
				escreva ("Reprovado! ", nome)
				
	}
}
*/

var nome, nota01, nota02, media;
nome = prompt("Digite o nome desejado: ");
nota01 = prompt("Digite a primeira nota: ");
nota02 = prompt("Digite a segunda nota: ");
media = ((parseFloat(nota01) + parseFloat(nota02)) / 2);
var passou = false;


if (media >= 50) {
    passou = true  ;
}
if (passou && (media >= 75 && media <= 95)) {
    alert("Aprovado! " + nome);
}
else {
    alert("Reprovado! " + nome);
}