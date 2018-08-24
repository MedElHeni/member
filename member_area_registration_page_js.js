    $("#form-registration").submit(function(){
        var space = /\s/g;
        var numbers = /[0-9]/g;
        var letter = /[A-Za-z]/g;
        var letterupper = /[A-Z]/g;
        var sepecialcharacter = /[^A-Za-z0-9]/g;


        if (($("#full-name").val()).length<6) {
        	alert("Nom comple doit contenir au minimum six caractères ! ");
          	return false;
        }
        if (($("#full-name").val()).length>20) {
            alert("Nom comple doit contenir au maximum vingt caractères !");
            return false;
        }
        if (($("#pseudo").val())=="") {
            alert("Veuillez entrer votre Pseudo !");
            return false;
        }
        if (($("#pseudo").val()).match(numbers)) {
            true;
        }
        else{
            alert("Pseudo doit contenir au moin un chiffre ! ");
            return false;
        }
        
        if (($("#pseudo").val()).match(letter)) {
            true;
        }
        else{
            alert("Pseudo doit contenir au moin une lettre ! ");
            return false;
        }
        var n = ($("#email").val()).indexOf("@");
        if (n ==-1)
        {
            alert("Email non valid ! ")
            return false; 
        }
        if (($("#password").val()).length<6) {
            alert("Mot de passe doit contenir au minimum six caractères ! ");
            return false;
        }
        if (($("#password").val()).match(numbers)) {
            true;
        }
        else{
            alert("Mot de passe doit contenir au moin un chiffre ! ");
            return false;
        }
        if (($("#password").val()).match(letterupper)) {
            true;
        }
        else{
            alert("Mot de passe doit contenir au moin une lettre  majuscule ! ");
            return false;
        }
        if (($("#password").val()).match(sepecialcharacter)) {
            true;
        }
        else{
            alert("Mot de passe doit contenir au  moin un Caractère spécial ! ");
            return false;
        }
        if (($("#password").val())!==($("#password-confirmation").val())) {
            alert ( "Les mots de passe ne sont pas identique !  " );
            return false;
        }
        
    });

