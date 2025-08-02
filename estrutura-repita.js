/*
programa
{

	
	funcao inicio()
	{
		    cadeia sairLoop
		    real valor01, valor02

		    repita 
		    		escreva ("Digite o primeiro valor: ")
		    		leia (valor01)
		    		escreva ("Digite o segundo valor: ")
		    		leia (valor02)
		    		escreva ("Resultado: ", valor01 += valor02)
		    		escreva ("Deseja sair? S/N")
		    		leia (sairLoop)
		    	ate (sairLoop != "N")
		    	
		    	}
}

*/

        var sairLoop, valor01, valor02, resultado
  
        do {
            valor01 = prompt ("Digite o primeiro valor: ");
		    valor02 = prompt ("Digite o segundo valor: ");
            resultado = parseInt(valor01) + parseInt(valor02);
		    document.getElementById("paragrafo").innerText = "Resultado: " + resultado;
		    sairLoop = prompt ("Deseja sair? S/N")
               {setTimeout(executarLoop, 100);}
             }
        while (sairLoop == "N")
        
    

