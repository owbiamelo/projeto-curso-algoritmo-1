/*programa
{
 ESTRUTURA SE SENÃO 
	
	funcao inicio()
	{
		cadeia operacao
		real valor01, valor02, resultado

		escreva ("A proposta desse programa é calcular dois valores baseado na operação de sua escolha","\n")
		
		escreva ("Digite o primeiro valor: ")
		leia (valor01)

		escreva ("Digite a operação desejada (+, -, *, / ): ")
		leia (operacao)

		escreva ("Digite o segundo valor: ")
		leia (valor02)

		se (operacao == "+")
		{
			resultado = (valor01 + valor02)
			}
		senao se (operacao == "-")
		{
			resultado = (valor01 - valor02)
			}
		senao se (operacao == "*")
		{
			resultado = (valor01 * valor02)
			}
		senao se (operacao == "/")
		{
			se (valor02 != 0)
			{
				resultado = (valor01 / valor02)	
			}
			senao 
			{
				escreva ("Erro: Divisão por zero! \n")
				retorne
			}
		}
		senao 
		{
			escreva ("Operação inválida!\n")
			retorne
		}

		escreva ("O resultado do calculo é: ", resultado)
	}
}
*/

var operacao, valor01, valor02, resultado;

function acaoBotao() 
{
  
    alert ("A proposta desse programa é calcular dois valores baseados na operação de sua escolha");

    valor01 = prompt("Digite o primeiro valor: ");
    operacao = prompt("Digite a operação desejada (+, -, *, /): ");
    valor02 = prompt("Digite o segundo valor: ");

        if (operacao == "+") {
    resultado = (parseFloat(valor01) + parseFloat(valor02));
    }   
        else if (operacao == "-") {
    resultado = (parseFloat(valor01) - parseFloat(valor02));
    }
        else if (operacao == "*") {
    resultado = (parseFloat(valor01) * parseFloat(valor02));
    }   
        else if (operacao == "/") {
    if (parseFloat(valor02) != 0) {
        resultado = (parseFloat(valor01) / parseFloat(valor02));
            } else {
            alert("Erro: Divisão por zero!");
            return;
            }
    }
        else {
        alert("Operação inválida!");
        return;
    }   
    alert("O resultado do cálculo é: " + resultado);
    document.getElementById("paragrafo").innerText = "Olá " + ", o resultado deste calculo é: " + resultado;
}