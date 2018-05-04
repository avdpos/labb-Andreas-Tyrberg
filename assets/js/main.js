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
        "you have entered info"
    }

    
    console.log(uname);
    console.log(mejl);
}
