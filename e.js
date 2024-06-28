let nome ='joão'
console.log (nome)

//ex2
let a= 5
let b= 10
console.log ( a+b)

//ex3
let primeironome = ' Josefa'
let ultimonome = 'Silva'
console.log (primeironome, ultimonome)

//ex4.1
let pessoa = { 
    nome: 'daiane', idade: '17', endereco: 'rua123', telefone: '123456789'
} 
console.log (pessoa)

//ex4.2 
let frutas= ['maça', 'banana', 'laranja']
console.log (frutas)
frutas[3] ='uva'
console.log (frutas)

//ex5
let numeros= [1,2,3,4,5]
console.log (numero[0], numero[4])

//ex6
let cores = ['vermelho ','verde', 'azul']
for (let i=0; i< cores.length; i++) { 
    console.log (cores[i])
}

//ex7
let idade
console.log (idade)
if (idade<18) {
console.log ("menor de idade")
}else {
console.log ("maior de idade")
}

//ex8
let nota= '10'
if (nota >=7) {console.log ('Aprovado');
} else if (nota>= 5) {console.log ("Recuperaçao");
}else { ("REPROVADO"); }

//EX9
let diaDeSemana =4
switch (diaDeSemana) {
 case'1':{
 console.log ("domingo");
 break
}case '2':{
console.log ("segunda");
break
}case '3' :{
console.log ("terça");
break
}case'4':{
console.log ("Quarta");
break 
}case "5":{
console.log ("Quinta");
break
}case'4':{
console.log ("sexta");
break 
 }case "5":{
console.log ("sabado");
 break

}  }