
var register = document.getElementsById("register");

register.addEventListener("click", function(){

    var name = document.getElementById("name").value;    
    var user = document.getElementById("userRegister").value;    
    var passowrd = document.getElementById("passwordRegister").value;
    
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("password", password);

    alert("Usuário cadastrado com sucesso!");

    window.location.href = "../pages/login.html";

});