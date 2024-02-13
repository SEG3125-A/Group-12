function showPayment(e) {
    e.preventDefault();
    var div = document.getElementById("payment")
    div.className = div.className.replace("d-none", "")
}

