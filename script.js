var auxdiv = document.getElementById('auxiliar');
var linha = 0;
var cores = ["#191970","#EE82EE","#9400D3","#696969","#DAA520","#D2691E","#B0E0E6","#FFD700","#7FFFD4","#A52A2A"];
var x = 5,y = 20;

var matriz = [x*y];

for (var i = 0; i < x; i++) {
	auxdiv.innerHTML =auxdiv.innerHTML + "<div class=\".container\" id=\""+linha+"\"><div/>";
	var txtcode = document.getElementById(linha.toString());
	for (var j = 0; j < y; j++) {
		var rand = Math.floor(Math.random() * 10);
		//matriz[i][j] = rand;
		matriz[i*x+j] = rand;
		elemento(i,j,rand);
	}
	txtcode.innerHTML = txtcode.innerHTML+"</br>";

}

function mostrarMatriz(){
	document.getElementById('botao1').disabled = true;

	var divMa = document.getElementById('Matriz');
	divMa.innerHTML = divMa.innerHTML+ "</br>";
	for(var i=0; i<x; i++)
	{
	    for(var j=0; j<y; j++)
	    {
	        divMa.innerHTML = divMa.innerHTML + matriz[i*x+j]+ "  ";
	        //document.getElementById("("+i+","+j+")").className = "";
	        

	    }
	    divMa.innerHTML=divMa.innerHTML+"</br>";
	}
}




function elemento(x,y,number){
	txtcode.innerHTML= txtcode.innerHTML+"<div  class=\"flip-card\"><div id= \"("+x+","+y+")\" class=\"flip-card-inner\"><div class=\"flip-card-front\"><img src=\"carta.jpg\" alt=\"Avatar\" style=\"width:50px;height:70px;\"></div><div class=\"flip-card-back\" style= \"background-color:"+cores[number]+";\"><h1 style=\"font-size: 15px; text-align: center;\">"+number+"</br>Id:("+x+","+y+")</h1> </div></div></div>";
}

function tryandfail(){
	var divRe = document.getElementById("Resolucao");
	var count=  0;
	document.getElementById("botao2").disabled = true; 
	for(var k =0 ; k< 10;k++){
		divRe.innerHTML = divRe.innerHTML+ "</br>";
		divRe.innerHTML=divRe.innerHTML+"Para "+k+": ";
		for(var i=0; i<x; i++)
		{
		    for(var j=0; j<y; j++)
		    {
		    	if(matriz[i*x+j] == k){
		    		divRe.innerHTML = divRe.innerHTML+ "("+i+","+j+") -> ";
		    		count++;
		    	}
		    }
		}
		
	}
	divRe.innerHTML = divRe.innerHTML+" </br>Houve "+count+" iterações";
}
