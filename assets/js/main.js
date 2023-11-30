document.addEventListener('DOMContentLoaded', function () {
    const cabeca = document.querySelector(".cabeca");
    const corpo = document.querySelector(".corpo");
    const bracoDireito = document.querySelector(".braco-direito");
    const bracoEsquerdo = document.querySelector(".braco-esquerdo");
    const pernaDireita = document.querySelector(".perna-direita");
    const pernaEsquerda = document.querySelector(".perna-esquerda");

    const palavras = ["Empreendedorismo", "oportunidade", "negócios", "inovadocao", "desafios", "criatividade", "resiliencia", "visao", "estrategia", "liderança", "adaptacao", "constancia", "crescimento", "sustentavel", "persistencia", "sucesso", "inspiracao", "planejamento", "perseveranca", "coragem", "inovacao", "mercado", "competitividade", "liderar", "empreender", "transformacao", "confianca", "proatividade", "excelencia"]

    var letraTeclado = document.querySelectorAll('.letras');

    const numero = Math.floor(Math.random() * 29);
    var letra = palavras[numero].split("");
    const palavraSecreta = document.querySelector("#palavraSecreta");

    for (let i = 0; i < letra.length; i++) {
        palavraSecreta.innerHTML += '-'
    };

    let erros = 0;
    letraTeclado.forEach(function (letraClicada) {
        letraClicada.addEventListener('click', function () {
            let clicada = letraClicada.innerText;
            let clicadaMinuscula = clicada.toLowerCase()
            var novaPalavra = "";
            let acertou = false;
            
            for (let i = 0; i < letra.length; i++) {
                if (palavraSecreta.innerText[i] !== "-") {
                    novaPalavra += palavraSecreta.innerText[i];
                } else if (clicadaMinuscula === letra[i]) {
                    // Se a letra clicada corresponder, substitua
                    novaPalavra += clicadaMinuscula;
                    acertou = true;
                } else {
                    // Caso contrário, mantenha o "-"
                    novaPalavra += "-";
                }
                if (novaPalavra === palavras[numero]){
                    window.location.href = 'assets/html/vitoria.html'
                }
            }
            palavraSecreta.innerText = novaPalavra;
            if (!acertou) {
                erros++;
                if (erros === 1) {
                    cabeca.style.backgroundColor = 'white'
                }
                else if (erros === 2) {
                    corpo.style.backgroundColor = 'white'
                }
                else if (erros === 3) {
                    bracoEsquerdo.style.backgroundColor = 'white';
                }
                else if (erros === 4) {
                    bracoDireito.style.backgroundColor = 'white'
                }
                else if (erros === 5) {
                    pernaDireita.style.backgroundColor = 'white'
                }

                else if (erros === 6) {
                    pernaEsquerda.style.backgroundColor = 'white';
                }
                else if (erros === 7) {
                    window.location.href = 'assets/html/derrota.html';
                }
                const letrasUsadas = document.querySelector(".letrasUsadas");
                letrasUsadas.innerText += "   "+clicada;
            }
            
        });

    })

})