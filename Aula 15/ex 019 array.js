//Array -> vetor
let num = [5,8,4]

//desclara que na posição 3 possui o numero 6 varialve[posicao] = valor
num[3] = 6

//adiciona uma posição ao final e joga o valor 7 nela variavel.push(valor)
num.push(7)

console.log('O vetor',num)

// num.legth mostra a quantidade de posições 
var posicao = num.length
console.log(`o vetor tem ${posicao} posições`)

//organiza o Array em ordem crescente usando variavel.sort()
var ordem = num.sort()
console.log(`o vetor ${num} na ordem fica assim ${ordem}`)

//para mostrar valores variavel[posicao]
console.log(`o valor na 1° posição é ${num[0]} e na última é ${num[4]}`)

for(var i = 0; i < num.length; i++)
{
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
   
// Função Math.max() retorna o maior valor 
console.log(Math.max(...num))

