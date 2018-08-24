
$(document).ready(function(){
    $("#form-connection").submit(function(){
        if ($("#pseudo").val()=="") {
        	alert("Veuillez entrer votre Pseud !");
          	return false;
        }
        if($("#password").val()==""){
        	alert("Veuillez entrer votre mot de passe !");
          	return false;
        }
        
    });
});