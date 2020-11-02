$(document).ready(function(){

    var signUp = $('button.signUp');
    var emailInput = $('input#email')
    var passwordInput = $('input#password');

    signUp.on('click', function(event){
        event.preventDefault();
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