
(function() {
    const form  = document.getElementsByTagName('form')[0];
    const firstName = document.getElementById('name');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const comment = document.getElementById('comment');

    let validateName = (e) => {
        if(firstName.value === ""){
            alert('Completa el nombre');
            e.preventDefault();
        }
    }

    let validateLastName = (e) => {
        if(lastName.value === ""){
            alert('Completa el apellido');
            e.preventDefault();
        }
    }

    let validateEmail = (e) => {
        if(email.validity.typeMismatch){
            alert('Email incorrecto');
            e.preventDefault();
        }
    }

    let validateComment = (e) => {
        if(comment.value === ""){
            alert('Completa el comentario');
            e.preventDefault();
        }
    }

    let validate = (e) => {
        validateName(e);
        validateLastName(e);
        validateEmail(e);
        validateComment(e);
    }

    form.addEventListener('submit',validate);
}())