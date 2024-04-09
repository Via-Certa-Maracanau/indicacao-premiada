function inicio() {
    content.innerHTML = `
        <article id="inicio">
            <h1>Indicação Premiada <br> <span>Via Certa Maracanaú</span></h1>
            <div id="premio">
                <!-- Ondulação verde acima -->
                <svg id="waveT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#72d112" fill-opacity="1" d="M0,160L34.3,138.7C68.6,117,137,75,206,58.7C274.3,43,343,53,411,58.7C480,64,549,64,617,80C685.7,96,754,128,823,128C891.4,128,960,96,1029,101.3C1097.1,107,1166,149,1234,144C1302.9,139,1371,85,1406,58.7L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

                <p>Ao indicar 10 pessoas, da região de Maracanaú, Pacatuba ou Maranguape, você estará concorrendo ao sorteio de um <span>kit de maquiagem da Exalla</span> ou a um <span>fone de ouvidos sem fio</span>.</p>
                <img src="assets/img/premio.png" id="exalla">
                <img src="assets/img/fone.png" id="fone">

                <!-- Ondulação verde abaixo -->
                <svg id="waveB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#72d112" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,266.7C672,256,768,192,864,192C960,192,1056,256,1152,240C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

            <span id="irFormulario">Indicar agora</span>
        </article>
    `

    irFormulario()
}

//Função que trocar a página inicial para a página de formulário
function irFormulario() {
    const irFormulario = document.getElementById('irFormulario')
    irFormulario.addEventListener('click', function () {
            page = 'formulario'
            router()
        } 
    )
}