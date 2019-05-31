
pegarNum1 = function(){return inputs[0].value;}

pegarNum2 = function(){return inputs[1].value;}

entradasVazias = function(){
	if(pegarNum1() === '' || pegarNum2() === ''){
		return true;
	}else{return false;}
}

atualizarResposta = function(){
	let num1 = pegarNum1();
	let num2 = pegarNum2();
	let soma = parseInt(num1) + parseInt(num2);
	resposta.innerText = num1 + ' + '+ num2 + ' = ' + soma;
	/* textContent no lugar do innerText*/
}

  somar = function(){
  	if(entradasVazias()){
  		resposta.innerText = 'Erro: Preencha os dois campos';
  	}
  	else {
  		atualizarResposta();
  	}

  }


  /* Pegando os elementos imput*/
/*let subtitue o var em variavel local*/
/*Pegando o elemento pelo nome do elemento*/
let inputs = document.querySelectorAll('input');
/*Pegando o elemento por classe*/
let resposta = document.querySelector('.resposta');
/*Pegando o elemento pelo id*/
let button = document.querySelector('#btnsomar');

/*Espera por evento*/
/*Quando o botao for clicado cham a funçao somar*/
button.addEventListener('click',somar);