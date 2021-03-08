function recuperaNome(){
    let nome = document.nomes.nome.value;
    return nome;
}

function preencherResultados(data) {

    let resultados = document.getElementById("resultados");

    document.getElementById("resultados").innerHTML = `Nome: ${data[0].nome} | Localidade: ${data[0].localidade} `;

    for( let index in data[0].res ) {
        const frequencia = data[0].res[index].frequencia;
        const periodo = data[0].res[index].periodo;
        //window.alert(frequencia);
        //window.alert(periodo);
        let div = document.createElement("div");
        div.innerHTML = `\n Período : ${periodo} | Frequência : ${frequencia}`;
        resultados.appendChild(div);
    }

}



function carregaDados() {

    let nome = recuperaNome();

    if(nome != ""){ 
    fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`)
    .then(response => response.json())
    .then(data => preencherResultados(data))
    .catch(error => console.error(error))
    }
    else {
        window.alert("Digite um nome válido");
    }

}