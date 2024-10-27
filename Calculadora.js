/*
crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


//criando função para calcular vitoria - derrota e armazenar resultado.
function calculadoraRankeada (vitoria, derrota){
    let resultado = vitoria - derrota
    return resultado
}

//subtraindo e armazenando o resultado.
let saldoVitorias = calculadoraRankeada(100, 50)//Digite os valores de vitória e derrota respectivamente.
let ranking = saldoVitorias

//definindo o nível do herói.
if(ranking <= 10){
    ranking = ("Ferro.")
    
}else if(ranking <= 20){
        ranking = ("Bronze.")
        
    }else if(ranking <= 50){
            ranking = ("Prata.")
            
        }else if(ranking <= 80){
                ranking = ("Ouro.")
                
            }else if(ranking <= 90){
                    ranking = ("Diamante.")
                    
                }else if(ranking <= 100){
                        ranking = ("Lendário.")
                        
                    }else if(ranking >= 101){
                            ranking = ("Imortal.")
                            
                        }

console.log("O herói tem saldo de: " + saldoVitorias + " Vitórias. E está no nível: " + ranking)