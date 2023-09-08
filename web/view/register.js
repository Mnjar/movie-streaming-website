function validateForm(event)
{
    event.preventDefault()

    regisForm = document.getElementById("regisForm")
    username = document.getElementById("name")
    password = document.getElementById("password")
    confirmPassword = document.getElementById("confirm")
    birth = document.getElementById("birth")
    male = document.getElementById("male")
    female = document.getElementById("female")
    agree = document.getElementById("agree")
    error = document.getElementById("error")
    dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    birthValue = birth.value;

    if(username.value.length < 2)
    {
        error.innerHTML = "Username must be at leat 2 characters!"
    }
    else if(!isAlphaNumeric(password.value))
    {
        error.innerHTML = "Password must be alphanumeric"
    }
    else if(password.value != confirmPassword.value)
    {
        error.innerHTML = "Password does't match"
    }

    else if(!dateRegex.test(birthValue))
    {
        var parts = birthValue.split('/');
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[2], 10);

        if (year >= 1900 && year <= new Date().getFullYear() && month >= 1 && month <= 12)
        {
            var maxDay = new Date(year, month, 0).getDate();
            if (day >= 1 && day <= maxDay)
            {
                return;
            }
        }
        error.innerHTML = "Date of Birth must be use DD/MM/YYYY format"
    }
    
    else if(!(male.checked || female.checked))
    {
        error.innerHTML = "Gender must be picked"
    }
    else if(!(agree.checked))
    {
        error.innerHTML = "You must agree to Term & Condition"
    }
    else
    {
        error.innerHTML = ""
        alert("Succesfull")
        regisForm.submit()
        window.location.href = "movie.html"
    }
}

function isAlphaNumeric(pw)
{
    var num = false
    var alpha = false
    for(let i = 0; i<pw.length; i++)
    {
        !isNaN(pw[i]) ? num = true : alpha = true
        if(num && alpha)
        {
            return true;
        }
    }
}