
(function() {
    const form  = document.getElementsByTagName('form')[0];
    const firstName = document.getElementById('name');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');
    let error = false;

    let validateName = (e) => {
        if(firstName.value === ""){
            alert('Completa el nombre');
            e.preventDefault();
            error = true;
        }
    }

    let validateLastName = (e) => {
        if(lastName.value === ""){
            alert('Completa el apellido');
            e.preventDefault();
            error = true;
        }
    }

    let validateEmail = (e) => {
        if(email.validity.typeMismatch){
            alert('Email incorrecto');
            e.preventDefault();
            error = true;
        }
    }

    let validateComment = (e) => {
        if(comment.value === ""){
            alert('Completa el comentario');
            e.preventDefault();
            error = true;
        }
    }

    let validate = async (e) => {
        validateName(e);
        validateLastName(e);
        validateEmail(e);
        validateComment(e);
        if(!error){
            e.preventDefault();
            const veggieForm = new FormData(this);
            const response = await fetch(this.action, {
                method: this.method,
                body: veggieForm,
                headers:{
                    'Accept': 'application/json'
                }
            });
            if(respones.ok){
                this.reset();
                alert('Gracias por su comentario');
            }
        }
    }

    form.addEventListener('submit',validate);
}())