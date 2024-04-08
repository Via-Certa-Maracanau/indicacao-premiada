function formulario () {
    content.innerHTML = `
        <div id="voltar">
            <span class="material-symbols-outlined">arrow_back</span>
        </div>

        <form id="formulario">
            <h1>Formulário de Indicação</h1>

            <div class="row">
                <div class="input-field col s12">
                    <input id="nome_a" type="text" class="validate" required>
                    <label for="nome_a">Seu nome completo</label>
                </div>
            </div>

            <div id="indicacao">
                <!-- Aqui será adicionado os elementos da função campos -->
            </div>

            <span id="enviar" onclick="getFormInput()">ENVIAR</span>
        </form>
    `

    campos()
}

function campos() {
    const indicacao = document.getElementById('indicacao')

    for(let contador = 0; contador < 10; contador++){
        indicacao.innerHTML += `
            <div class="campos">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="nome${contador}" name="nome${contador}" type="text" class="validate">
                        <label for="nome${contador}">Nome</label>
                    </div>
                </div>
    
                <div class="row">
                    <div class="input-field col s12">
                        <input id="telefone${contador}" name="telefone${contador}" type="number" class="validate">
                        <label for="telefone${contador}">Telefone</label>
                    </div>
                </div>
                <p>Indicação - ${contador+1}</p>
            </div>
        `
    }

    voltarInicio()
}

//Função que trocar a página de formulário para a página inicial
function voltarInicio() {
    const voltar = document.getElementById('voltar')

    voltar.addEventListener('click', function() {
            page = 'inicio'
            router()
        }
    )
}