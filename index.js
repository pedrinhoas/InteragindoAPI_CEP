async function viaCep(){

    let cep = document.getElementById("cep").value

    
    let api = await fetch("https://viacep.com.br/ws/"+cep+"/json/");

    let resposta = await api.json()

    if(api.ok){
        console.log(resposta)
        var cep_result = document.getElementById("cep_result");
        cep_result.append(resposta.cep);

        var logradouro = document.getElementById("logradouro");
        logradouro.append(resposta.logradouro);

        var localidade = document.getElementById("localidade");
        localidade.append(resposta.localidade);

        return 
    }

    console.log("Erro")
}

