function validaNome(campo) {
    let n = campo.value;
    if( n.length == 0) {
        window.alert("Dados Incorretos");
        campo.value = "";
        campo.focus();
        return false;
    }
return true;
}

function validaNumero(campo) {
    let n = campo.value;
    if( n.length == 0 || isNaN (parseInt(n))){
        window.alert("Dados Incorretos");
        campo.value = "";
        campo.focus();
        return false;
    }
return true;
}

function valida(){
    let c1 = document.dados.nome;
    let c2 = document.dados.email;
    let c3 = document.dados.telefone;
    let c4 = document.dados.senha;

    if( validaNome(c1) && validaNome(c2) && validaNumero(c3) && validaNumero(c4)){
        console.log(c1.value,c2.value,c3.value,c4.value);
        window.alert(" Dados Inseridos Corretamente, formulário submetido ")
    } 

}