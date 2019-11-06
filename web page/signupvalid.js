

  function validateFun(){
     
console.log("name");

    var name= document.getElementById("Username").value;
    var email= document.getElementById("Email").value;
    var password=document.getElementById("Password").value;
    var cfpassword=document.getElementById("Re-password").value;
    var mobile =document.getElementById("phonenumber").value;
  
   

    var usercheck=/^[A-Za-z.]{3,30}$/;
    var emailcheck=/^([A-Za-z0-9-_\.]){2,}(@)([a-z]){2,}(\.)([a-z]){2,}$/;
    var passwordcheck=/^(?=.*([A-Z]))(?=.*([0-9]))(?=.*([!@#$%^&*]))([A-za-z0-9!@#$%^&*]){6,16}$/;
    var mobilecheck=/^(?=.*([7-9]))([0-9]){10}$/;

     
    if(usercheck.test(name)){
          document.getElementById("usererror").innerHTML="";
      }else 
          {
             document.getElementById("usererror").innerHtml="** InvalidUsername"; 
             return false;
         }
    
console.log("done1");

    if(emailcheck.test(email)){
           document.getElementById("emailerror").innerHTML="";
     }else 
         {
           document.getElementById("emailerror").innerHTML="** Invalidemail";
           return false;
         }
console.log("done2");


     if(passwordcheck.test(password)){
            
                     document.getElementById("passworderror").innerHTML="";
     }else 
         {
           document.getElementById("passworderror").innerHTML="** InvalidPassword";
           return false;
         }


console.log("done3");


    if(cfpassword.match(password)){
            document.getElementById("re-passworderror").innerHTML="";
         }else
            {
              document.getElementById("re-passworderror").innerHTML="** password not matching";
              return false;
            }

console.log("done4");

    if(mobilecheck.test(mobile)){
            document.getElementById("mobileerror").innerHTML="";
        }else
              {
                document.getElementById("mobileerror").innerHTML="** Invalidphonenumber";
                 return false;
              }
console.log("done5");
}