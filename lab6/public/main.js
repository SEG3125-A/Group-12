function submitForm(e) {
    e.preventDefault()
    const form = $("#myform")
    const bodyData = form.serializeArray()
    form[0].reset()
    $('#thankYouMessage').show();
    fetch("/submit-answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "answers": bodyData })
    }).then((res) => {
        if (res.ok) {
            console.log("Successfully Submitted Form")
        }

    }).catch((err) => {
        console.error(err)
    })

}
