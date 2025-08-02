/* programa
{
 ESTRUTURA ESCOLHA 
	
	funcao inicio()
	{
		caracter operacao
		inteiro valor01, valor02, resultado = 0

		escreva ("A proposta desse programa é calcular dois valores baseado na operação de sua escolha","\n")
		
		escreva ("Digite o primeiro valor: ")
		leia (valor01)

		escreva ("Digite a operação desejada (+, -, *, / ): ")
		leia (operacao)

		escreva ("Digite o segundo valor: ")
		leia (valor02)


		escolha (operacao)
		{
			caso '+':
				 resultado = (valor01 + valor02)
				pare
			caso '-':
				resultado = (valor01 - valor02)
				pare
			caso '*':
				resultado = (valor01 * valor02)
				pare
			caso '/':
				se (valor02 != 0)
				resultado = (valor01 / valor02)
				senao
				{
				escreva ("Erro! Divisão por 0\n")
				retorne
				}
				pare
			caso contrario:
				escreva ("Operação inválida!\n")
		}
		escreva ("Resultado do calculo é: ", resultado)
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

        switch (operacao) {
            case '+':
                resultado = parseFloat(valor01) + parseFloat(valor02);
                break;
            case '-':
                resultado = parseFloat(valor01) - parseFloat(valor02);
                break;
            case '*':
                resultado = parseFloat(valor01) * parseFloat(valor02);
                break;
            case '/':
                if (parseFloat(valor02) !== 0) {
                    resultado = parseFloat(valor01) / parseFloat(valor02);
                } else {
                    alert("Erro: Divisão por zero!");
                    return;
                }
                break;
            default:
                alert("Operação inválida!");
                return;
        }
    alert("O resultado do cálculo é: " + resultado);
    document.getElementById("paragrafo").innerText = "Resultado: " + resultado;
}