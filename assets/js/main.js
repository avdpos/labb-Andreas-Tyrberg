/*varför kopplar den inte till huvuddokumentet?*/

var submitBtn   =document.getElementById("submitBtn");
submitBtn.addEventListener("Click", validateForm);

function validateForm(){
    var uname   = document.getElementById("username");
    var mejl    = document.getElementById("email");

    mejl = str.trim(mejl);
    uname = str.trim(uname);



    if((uname == "") || (pword ==""))
    {
        alert("Du behöver fylla i formuläret!")
    }
    else
    {
        if (validateEmail(mejl) = true) {
            return "Correct input"
        }

        else {
            return "fyll i en korrekt emailadress"
        }
    } 
    /*
    console.log(uname);
    console.log(mejl);
    */
}

function validateEmail(emailAdress)
{
    var reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\.\-])+\.([A-Za-z]2.4})$/;
    if reg.test(emailAdress.value) == false{
        alert('Invalid email');
        return false;
    }
    else true;
}

