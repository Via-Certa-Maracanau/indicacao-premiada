var validador = false

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

    validar(indicacao)
}

function validar(indicacoes) {
    for(let c = 0; c < 10; c++) {
        if(indicacoes.nomeI[c] == undefined) {
            qtde = 10 - indicacoes.nomeI.length
            validador = confirm(`Atenção! \n Para participar do sorteio é necessário preencher todas as 10 indicações. \n \n Quantidade de indicações faltantes: ${qtde} \n \n Pressione "OK" para enviar mesmo assim ou "Cancelar" para continuar preenchendo`)
            break
        }else {
            validador = true
        }
    }

    if(validador) {
        enviarEmail(indicacoes)
    }
}