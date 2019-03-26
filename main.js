function formValidation()
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.postinumero;
    var uemail = document.registration.email;
    var usex = document.registration.sex;
    
    if(userid_validation(uid,6) && passid_validation(passid,6) 
    && allLetter(uname) && alphanumeric(uadd) && countryselect(ucountry)
    && allnumeric(uzip) && ValidateEmail(uemail) && validsex() && validate())
    return false;
} 



function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len > my || uid_len < mx)
{
alert("ID:n täytyy olla vähintään kuusi(6) merkkiä pitkä");
uid.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if(passid_len == 0 || passid_len > my || passid_len < mx)
{
alert("Salasanan täytyy olla vähintään kuusi(6) merkkiä pitkä.");
passid.focus();
return false;
}
return true;
}

function allLetter(uname)
{
    var letters = /^[A-Öa-ö ]+$/;
    if(uname.value.match(letters))
{
    return true;
}
else
{
    alert('Nimessä on virheellisiä merkkejä.');
    uname.focus();
    return false;
}
}

function alphanumeric(uadd)
{
var letters = /^[0-9a-öA-Ö ]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('Osoitteessa voi olla vain kirjaimia tai numeroita.');
uadd.focus();
return false;
}
}

function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
    alert('Valitse listasta maa');
    ucountry.focus();
    return false;
}
else
{
    return true;
}
}

function allnumeric(uzip)
{
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
{
    return true;
}
else
{
    alert('Lisää postinumero');
    uzip.focus();
    return false;
}
}

function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("Virheellinen sähköpostiosoite.");
        uemail.focus();
        return false;
    }
}


function validsex() {
    var sex = document.forms["registration"]["sex"];
    if (
        sex[0].checked == false &&
        sex[1].checked == false
    ) {
        alert("Valitse sukupuoli");
        return false;
    } else {
        return true;
    }
}

function validate() {
    var cbox = document.forms["registration"]["checkbox"];
    if (
        cbox[0].checked == false &&
        cbox[1].checked == false &&
        cbox[2].checked == false &&
        cbox[3].checked == false
    ) {
        alert("Valitse kieli");
        return false;
    } else {
        alert("Lomake lähetetty");
        return true;
    }
}
