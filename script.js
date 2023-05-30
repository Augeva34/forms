function alerta (){
    alert ("piroca")
    const usuario = document.getElementsByTagName("input")[0].value
    const senha = document.getElementsByTagName("input")[1].value
    alert ("meu usuario é" + usuario)
    alert ("minha senha é" + senha )

    if (usuario == "augeva" && senha == "12345678"){
    
        alert ("bem vindo")
    }else{
        alert ("login não autorizado! cai fora!")
    }
}