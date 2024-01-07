let fName = document.getElementById("fNam");
let lName = document.getElementById("lNam");
let email = document.getElementById("email");
let password = document.getElementById("password");
document.getElementById("submit").addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll(".input-container").forEach(inputContainer => {
        var txt = inputContainer.querySelector("input");
        if (checkEmpty(txt.value)) {
            txt.classList.add("errorB");
            inputContainer.querySelector("img").style.display = "block";
            inputContainer.querySelector("p").style.display = "block";
        }        
        else {
            console.log(txt)
            if (txt.name === "email") {
                if (validateEmail(txt.value)) {
                    txt.classList.remove("errorB");
                    inputContainer.querySelector("img").style.display = "none";
                    inputContainer.querySelector("p").style.display = "none";
                } else {
                    txt.classList.add("errorB");
                    inputContainer.querySelector("img").style.display = "block";
                    inputContainer.querySelector("p").innerText="Looks like this is not an email"
                    inputContainer.querySelector("p").style.display = "block";
                }
            } else {
                txt.classList.remove("errorB");
                inputContainer.querySelector("img").style.display = "none";
                inputContainer.querySelector("p").style.display = "none";
            }
        }
    });
});

function checkEmpty(value) {
    if (value==="") {
        return true
    } else {
        return false
    }
}

function validateEmail(emailField){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (emailField.match(validRegex)) 
    {
        return true;
    }
    else
        return false;

}