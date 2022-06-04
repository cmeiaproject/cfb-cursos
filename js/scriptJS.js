	let a;
	let p1;
	let resultado;
	let acertos;
	let erros;
	let btnIniciar;
	let btnNovaLetra;
	let btnPernaDireita;
	let btnPernaEsquerda;	
	
	let divInferiorEsq;
	let divInferiorDir;	
	let divSuperiorEsq;
	let divSuperiorDir;	
	let divCabeca;
	let divTronco;
	
	let letra;
	
	let texto = "Outro contexto importante foi a festa da Páscoa que acontecia naquele momento, sendo celebrada somente em um dia. Depois, era seguida pela festa dos Pães Asmos, que durava sete dias (Mc 14:12). Por ordem de Cristo, os discípulos prepararam a Páscoa. Todos celebraram a última ceia juntos (Mc 14:22). Os textos bíblicos comentam que esse era o cenário que antecedeu a prisão de Jesus no jardim do Getsêmani (Mc 14:43), sendo conduzido, à noite, para ser julgado pelo Sinédrio que mandava nos assuntos internos dos judeus, sejam religiosos, políticos ou administrativos. O Sinédrio não tinha o costume de fazer reuniões noturnas, comportava 71 pessoas entre o sumo sacerdote, sacerdotes, anciãos e mestres da lei. Somente esses últimos não tinham caráter eclesiástico, pois ser mestre de lei (ou escriba) era uma profissão. As demais funções eram consideradas eclesiásticas.";
	let numPalavras;
	let palavras;
	let palavraSecreta;
	let tentativas = 1;		
	let tentativasErro = 0;	
	let totalTentativasErro = 6;
	
	function getPalavas()
	{
			palavras = texto.split(' ');
			numPalavras = palavras.length;
	}

	function getPalava(p)
	{
			if(p < 0)
			{
				p = 0;
			}
			else if(p > numPalavras)
			{
				p = numPalavras;
			}	
			
			return palavras[p];
	}

	function iniciarJogo()
	{
		let indice = Math.random() * numPalavras;

		indice = Math.round(indice);
		palavraSecreta = getPalava(indice);

		let s = palavraSecreta.replace(palavraSecreta, '*'.repeat(palavraSecreta.length));		
		
		acertos.innerHTML = s;
		
		tentativas = 1;		
		tentativasErro = 0;	
		
		btnNovaLetra.disabled = false;
		
		Inicializar();
	}
	
	function Inicializar()
	{
		divCabeca.style.display = 'none';	
		divSuperiorEsq.style.display = 'none';			
		divTronco.style.display = 'none';							
		divSuperiorDir.style.display = 'none';			
		divInferiorEsq.style.display = 'none';
		divInferiorDir.style.display = 'none';	

		erros.innerHTML = '';		
		resultado.innerHTML = '';				
		
	}
	
	function exibirPalavra(e)
	{
		let qtdeLetras = palavraSecreta.length;
		
		let s = acertos.innerHTML;
		let res = '';
		

		for(let i =0; i < qtdeLetras; i++)
		{
			if(palavraSecreta[i].toLowerCase() == e)
			{
				res += palavraSecreta[i];	
			}	
			else
			{
				res += s[i];
			}	
		}	
		
	   acertos.innerHTML = res;
		
	}
	
	
	function verificarLetra(e)
	{
		e = e.toLowerCase();
		
		let res = palavraSecreta.toLowerCase().match(e);
		
		if ( res == null )
		{
			tentativasErro++;
			erros.innerHTML += e;
			exibirCorpo(tentativasErro);			

		}	
		else
		{
			acertos.innerHTML += e;	
			exibirPalavra(e);	
		}	
		
		if( tentativasErro >= totalTentativasErro)
		{
				resultado.innerHTML = palavraSecreta;
				btnNovaLetra.disabled = true;
				
		}
		else if( palavraSecreta.toLowerCase().localeCompare(acertos.innerHTML) == 0 )
		{
				resultado.innerHTML = 'ACERTOU A PALAVRA: ' + palavraSecreta;
				btnNovaLetra.disabled = true;				
		}		
		
		
	}
	
	function exibirPernaDireita()
	{
		divInferiorDir.style.display = 'block';
	}
	
	function exibirPernaEsquerda()
	{
		divInferiorEsq.style.display = 'block';
	}

	function exibirCorpo(s)
	{
			switch(s)
			{
				case 1 : divCabeca.style.display = 'block';	
						 break;
				case 2 : divSuperiorEsq.style.display = 'block';			
						 break;
 				case 3 : divTronco.style.display = 'block';							
						 break;
				case 4 : divSuperiorDir.style.display = 'block';			
						 break;
				case 5 : divInferiorEsq.style.display = 'block';
						 break;
				case 6 : divInferiorDir.style.display = 'block';				
						 break;
			}
	}

	
	function novaTentativa()
	{
		letra = prompt('Digite uma letra');
		if( (letra.length > 1) || (letra.length == 0) || (letra == null) || (letra == undefined) )
		{
				alert('Valor invalido!');
				novaTentativa();
		}	
		else
		{	
			verificarLetra(letra);
			tentativas++;
		}	
	}

	window.addEventListener('load', 
							() => {
									a = document.getElementsByTagName('h1');
									p1 = document.getElementById('p1');
									resultado = document.getElementById('resultado');
									acertos = document.getElementById('acertos');
									erros = document.getElementById('erros');									
									btnIniciar = document.getElementById('btnIniciar');
									btnNovaLetra = document.getElementById('btnNovaLetra');
									
									btnPernaDireita = document.getElementById('btnPernaDireita');
									btnPernaEsquerda = document.getElementById('btnPernaEsquerda');
									
									divInferiorEsq = document.getElementById('inferior-esq');
									divInferiorDir = document.getElementById('inferior-dir');
									divSuperiorEsq = document.getElementById('superior-esq');
									divSuperiorDir = document.getElementById('superior-dir');
									divCabeca = document.getElementById('head');
									divTronco = document.getElementById('central');
									
									p1.innerHTML = a[0].innerHTML;
									getPalavas();
									
									btnIniciar.addEventListener('click', iniciarJogo);
									btnNovaLetra.addEventListener('click', novaTentativa);
									
									btnPernaDireita.addEventListener('click', exibirPernaDireita);
									btnPernaEsquerda.addEventListener('click', exibirPernaEsquerda);
								  });
								  
	