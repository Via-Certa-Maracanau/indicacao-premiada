const content = document.getElementById('content')
var page = 'inicio'

router()

function router() {
    if(page == 'inicio') {
        inicio()
    }
    else if(page == 'formulario') {
        formulario()
    }
}
