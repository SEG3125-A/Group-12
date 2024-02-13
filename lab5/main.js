function showPayment(e) {
    e.preventDefault();
    var div = document.getElementById("payment")

    var custRegex = new RegExp("[a-zA-Z ]+");
    var emailRegex = new RegExp("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/");
    var phoneRegex = new RegExp("[0-9]{10}");

    var name = document.getElementById("custName");
    var email = document.getElementById("custEmail");
    var phone = document.getElementById("custPhone");

    if(!(custRegex.test(name.value))){
        name.oninvalid = name.setCustomValidity("Invalid name. Please use letters only. ")
        console.log("name wrong1")
        return;
    }
    // else if (!emailRegex.test((email.value))){
    //     console.log("email wrong1")
    //     return;
    // }
    else if (!phoneRegex.test((phone.value))){
        console.log("phone wrong1")
        return;
    }
    
    div.className = div.className.replace("d-none", "")
}

