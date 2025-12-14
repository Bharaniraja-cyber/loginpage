
var login = document.getElementById("login")


login.addEventListener("click",function(){
   event.preventDefault()
    
    var mailRegex = /^[a-z0-9A-Z]+@gmail\.com$/
    var passRegex = /^[a-zA-Z0-9]+$/

    var email = document.getElementById("email_id")
    var password = document.getElementById("password")

    var validate = true

    if(mailRegex.test(email.value)==false){
        document.querySelector(".mailerror").style.display = "block"
        validate = false
    }
    else{
        document.querySelector(".mailerror").style.display = ""
    }

    if(passRegex.test(password.value)==false){
        document.querySelector(".pass_error").style.display = "block"
        validate = false
    }
    else{
        document.querySelector(".pass_error").style.display = ""
    }

    if(validate==true){
        alert("Login Successfull....😎")
    }

})

