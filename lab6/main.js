const form = document.getElementById("myform")
// form.on("submit", submitForm(e))




function submitForm(e) {
    e.preventDefault()
    const form = $("#myform")
    console.log(new FormData(form))
    fetch("/lab6/server/analyze-results", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form.serializeArray())
    }).then((res) => {
        if (res.ok) {
            console.log("Successfully Submitted Form")
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