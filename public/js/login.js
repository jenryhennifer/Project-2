
$(document).ready(function () {
    var loginForm = $('.login');
    var emailData = $('input#email-input');
    var passwordData = $('input#password-input');
  
    loginForm.on('submit', function (event) {
      event.preventDefault();
  
      var data = {
        email: emailData.val().trim(),
        password: passwordData.val().trim(),
      };
      if (!data.email || !data.password) {
        return;
      }
  
      loginWhim(data.email,data.password);
      emailData.val('');
      passwordData.val('')
    });
  
    function loginWhim(email, password){
        $.post('/api/login',{
            email: email,
            password: password
        }).then(function(){
            //relocate to the home page of whim
            window.location.replace('/main.html')
        })
    }
  
  });