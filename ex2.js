let ano_at= 2023
let ano_nas= 2010
let idade = ano_at - ano_nas

if(idade >= 18 && idade <=70 ){
    console.log("A sua idade é"+idade+"O voto é obrigatório")
} else if( idade < 16){
    console.log(`A sua idade é ${idade} e você não pode votar`)
}else{
    console.log("O voto é opcional") }