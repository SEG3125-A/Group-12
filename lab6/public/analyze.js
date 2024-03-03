fetch("/api/get-analyst-data", {
    method: "GET",
}).then((res) => {
    if (res.ok) {
        return res.json()
    }
}).then((dataset) => {
    document.getElementById("currentPhone").innerHTML = JSON.stringify(dataset['currentPhone'], null, 4).replaceAll(/[{}", ]/gi, '').trim().replaceAll(/\n/gi, '<br>').replaceAll(/:/gi, ': ')
    document.getElementById("ownedProduct").innerHTML = JSON.stringify(dataset['ownedProduct'], null, 4).replaceAll(/[{}", ]/gi, '').trim().replaceAll(/\n/gi, '<br>').replaceAll(/:/gi, ': ')
    document.getElementById("budget").innerHTML = JSON.stringify(dataset['budget'], null, 4).replaceAll(/[{}", ]/gi, '').trim().replaceAll(/\n/gi, '<br>').replaceAll(/:/gi, ': ')
    document.getElementById("preferredOS").innerHTML = JSON.stringify(dataset['preferredOS'], null, 4).replaceAll(/[{}", ]/gi, '').trim().replaceAll(/\n/gi, '<br>').replaceAll(/:/gi, ': ')
    document.getElementById("nameAndComment").innerHTML = JSON.stringify(dataset['nameAndComment']).replaceAll(/(\],*)/gi, '<br><br>').replaceAll(/\[/gi, '').replaceAll(/\","/gi, '<br>').replaceAll(/\"/gi, '')
}).catch((err) => {
    console.error(err)
})