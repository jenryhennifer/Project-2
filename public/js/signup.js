$(document).ready(function(){

    var signUpButton = $('.signUpButton');
    var emailInput = $('#email')
    var passwordInput = $('#password');

    signUpButton.on('click', function(event){
        event.preventDefault();
        console.log('clicked')
        var data = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        if(!data.email || !data.password){
            return;
        }
        signUp(data.email, data.password)
            emailInput.val('');
            passwordInput.val('');
    })

    function signUp(email,password){
        $.post('/api/signup',{
            email: email,
            password: password
        }).then(function(data){
            window.location.replace('/main')
        })
    }
})