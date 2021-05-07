let x = 3
let amigo = 
{
  nome:'josé',
  sexo:'M',
  peso:85.5,
  engordar(p){
      console.log('engordou')
      this.peso += p
  }
}
amigo.engordar(3)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso}kg`)

let num = 8
num **= 2

console.log(num)