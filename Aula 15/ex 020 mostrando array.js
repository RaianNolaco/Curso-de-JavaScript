let num = [4,0,2,3,6]

console.log(`Matrix: ${num}`)

console.log(`Ordem crescente: ${num.sort()}`)

/*
for(let cont = 0; cont < num.length; cont++)
{
  console.log(`A posição ${cont} contem o valor ${num[cont]}`) 
}
*/

// for in serve para ser ultilizado com vetores
for(let i in num)
{
    console.log(`A posição ${i} contem o volar ${num[i]}`)
}

//Pesquisa um valor dentro do vetor
var pesquisa = num.indexOf(2)

if (pesquisa == -1)
{
    console.log('Valor não encontrado')
}else
{
    console.log(`O valor pesquisado esta na posição ${pesquisa}`)
}


