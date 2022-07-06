

let formulario = document.querySelector('#formCadastro')


formulario.onsubmit = function(submeter){
    submeter.preventDefault()

    let temErro = false

    let inputNome = document.forms['formCadastro']['nome']

    if(!inputNome.value){
        temErro = true
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        inputNome.placeholder = 'Digite o nome corretamente'
        span.classList.add('erro')
    } else {
        inputNome.classList.remove('inputError')
    }

    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')
        
        let span = inputEmail.nextSibling.nextSibling
        inputEmail.placeholder = 'Digite o seu e-mail corretamente'
    } else {
        inputEmail.classList.remove('inputError')
    }

    let selectCidade = document.forms['formCadastro']['cidade']

    if(!selectCidade.value){
        temErro = true
        selectCidade.classList.add('inputError')
        
        span.classList.add('erro')
    } else {
        selectCidade.classList.remove('inputError')
        let span = selectCidade.nextSibling.nextSibling
        span.innerText = ''
    }


    if(!temErro) {
        formulario.submit()
    }
    

}