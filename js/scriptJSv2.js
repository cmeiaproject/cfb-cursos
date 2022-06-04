let btnIniciar;
let btnNovaLetra;
let letra;
let resultado;
let acertos;
let erros;
let texto;
let palavraEscolhida;
let palavras;
let divMain;
let mensagem;

let tentativasErro = 0;	
let totalTentativasErro = 6;

let mensagemEnforcado = new Array();

//var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

function colorTween(c1,c2,p) {
  var r1 = parseInt(c1.substring(1,3),16);
  var g1 = parseInt(c1.substring(3,5),16);
  var b1 = parseInt(c1.substring(5,7),16);
  var r2 = parseInt(c2.substring(1,3),16);
  var g2 = parseInt(c2.substring(3,5),16);
  var b2 = parseInt(c2.substring(5,7),16);
  var r3 = (256+(r2-r1)*p/100+r1).toString(16);
  var g3 = (256+(g2-g1)*p/100+g1).toString(16);
  var b3 = (256+(b2-b1)*p/100+b1).toString(16);
  return '#'+r3.substring(1,3)+g3.substring(1,3)+b3.substring(1,3);
}

function getPalavras()
{
	return texto.split(' ');
}

function getPalavaEscolhida(p)
{
	if(p < 0)
	{
		p = 0;
	}
	else if(p > palavras.length)
	{
		p = palavras.length;
	}	
			
	return palavras[p];
}

function Inicializar()
{
	erros.innerHTML = '';		
	resultado.innerHTML = '';				
}

function exibirPalavra(e)
{
	let s = acertos.innerHTML;
	let res = '';
		
	for(let i =0; i < palavraEscolhida.length; i++)
	{
		if(palavraEscolhida[i].toLowerCase() == e)
		{
			res += palavraEscolhida[i];	
		}	
		else
		{
			res += s[i];
		}	
	}	
		
   acertos.innerHTML = res;
		
}

function exibirCorpo(i)
{
	mensagem.innerHTML += mensagemEnforcado[i];
}

function verificarLetra(e)
{
	e = e.toLowerCase();
		
	let res = palavraEscolhida.toLowerCase().match(e);
		
	if ( res == null )
	{
		erros.innerHTML += e;
		exibirCorpo(tentativasErro);			
		tentativasErro++;		
	}	
	else
	{
		acertos.innerHTML += e;	
		exibirPalavra(e);	
	}	
		
	if( tentativasErro >= totalTentativasErro)
	{
		resultado.innerHTML = palavraEscolhida;
		btnNovaLetra.disabled = true;
				
	}
	else if( palavraEscolhida.toLowerCase().localeCompare(acertos.innerHTML) == 0 )
	{
		resultado.innerHTML = 'ACERTOU A PALAVRA: ' + palavraEscolhida;
		btnNovaLetra.disabled = true;				
	}		
		
		
}




function iniciarJogo()
{
	texto = document.getElementById('texto').value;	
	palavras = getPalavras();	
	
	mensagemEnforcado[0] = ':(';
	mensagemEnforcado[1] = ':(';	
	mensagemEnforcado[2] = 'EN';	
	mensagemEnforcado[3] = 'FOR';
	mensagemEnforcado[4] = 'CA';	
	mensagemEnforcado[5] = 'DO';		


//	divMain.style.backgroundImage = 'linear-gradient(to top, transparent, red)';
	if( (palavras == null) || (palavras == '') || (palavras == undefined) )
	{
		erros.innerHTML = "Nenhuma palavra encontrada";
	}	
	else
	{	
		let indice = Math.round( Math.random() * palavras.length );
	
		palavraEscolhida = getPalavaEscolhida(indice);

		let s = palavraEscolhida.replace(palavraEscolhida, '*'.repeat(palavraEscolhida.length));		
		
		acertos.innerHTML = s;
		
		tentativasErro = 0;	
		
		btnNovaLetra.disabled = false;
		
		Inicializar();
	}	
}

function novaTentativa()
{
	v = letra.value;
	if( (v.length > 1) || (v.length == 0) || (v == null) || (v == undefined) )
	{
		alert('Valor invalido!');
		letra.value = '';
		letra.focus();
	}	
	else
	{	
		verificarLetra(v);
	}	
	
}

window.addEventListener('load', 
						() => {
								resultado = document.getElementById('resultado');
								acertos = document.getElementById('acertos');
								erros = document.getElementById('erros');									
									
								btnIniciar = document.getElementById('btnIniciar');
								btnNovaLetra = document.getElementById('btnNovaLetra');
								
								letra = document.getElementById('letra');
								mensagem = document.getElementById('mensagem');
																	
								divMain = document.getElementById('main');
								
			
								btnIniciar.addEventListener('click', iniciarJogo);
								btnNovaLetra.addEventListener('click', novaTentativa);
									
							  });

