const form = document.getElementById("myform")
// form.on("submit", submitForm(e))




function submitForm(e) {
    e.preventDefault()
    const form = $("#myform")
    fetch("/submit-answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "answers": form.serializeArray() })
    }).then((res) => {
        if (res.ok) {
            console.log("Successfully Submitted Form")
            console.log(res.body)
        }

    }).catch((err) => {
        console.log(err)
    })

}

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     event.stopPropagation();
//     form.classList.add('was-validated');
// }, false);