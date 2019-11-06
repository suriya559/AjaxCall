
  function validate(){
     
      var email= document.getElementById("InputEmail").value;
      var password=document.getElementById("InputPassword").value;
      
     
       var emailcheck=/^([A-Za-z0-9-_\.]){2,}(@)([a-z]){2,}(\.)([a-z]){2,}$/;
       var passwordcheck=/^(?=.*([A-Z]))(?=.*([0-9]))(?=.*([!@#$%^&*]))([A-za-z0-9!@#$%^&*]){6,16}$/;

     
        if(emailcheck.test(email)){
           document.getElementById("emailerror").innerHTML="";
     }else 
         {
           document.getElementById("emailerror").innerHTML="** InvalidEmail";
           return false;
         }


        if((password.length>=6)&&(passwordcheck.test(password))){
           document.getElementById("passworderror").innerHTML="";
     }else 
         {
           document.getElementById("passworderror").innerHTML="** InvalidPassword";
           return false;
         }
}
