function getFormInput() {
    var indicacao = new Object()
    indicacao.nomeI = Array()
    indicacao.telefone = Array()

    indicacao.nomeA = document.getElementById('nome_a').value

    for(let contador=0; contador < 10; contador ++) {
        let nome = document.getElementById(`nome${contador}`).value
        let telefone = document.getElementById(`telefone${contador}`).value

        if(nome == '' || telefone == '') {
            continue
        }else{
            indicacao.nomeI.push(nome)
            indicacao.telefone.push(telefone)
        }
    }

    enviarEmail(indicacao)
}