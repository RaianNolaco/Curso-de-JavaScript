//função 1
// funçao nome(parametro)
function parimp(n)
{
   //ação
   if(n%2==0)
   {
       return 'Par'
   }else{
       return 'impar'
   }
}

//Chamada da função criada
console.log(parimp(80))
console.log('\n')

//função 2
function soma(n1 = 0,n2 = 0)
{
   return n1 + n2
}

console.log(soma(40))
console.log('\n')

//função 3
let v = function(x)
{
    return x*2
}

console.log(v(2))
console.log('\n')

//função 4
function fatorial(n)
{
    let fat = 1
    
    for(let i = n; i > 1; i--)
    {
        fat *= i
    }

    return fat
}

console.log(fatorial(5))

//funçao 5 RECURSIVIDADE
function fat(x)
{
    if(x == 0)
    {
        return 1
    }else
    {
        return x * fat(x-1)
    }

}

console.log(fat(5))


