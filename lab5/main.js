// from https://getbootstrap.com/docs/4.5/components/forms/

'use strict';
window.addEventListener('load', function () {
    // $("#payment")[0].classList.remove("d-none") for testing

    var forms = $('.needs-validation');
    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            console.log(form.checkValidity())
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                $("#payment")[0].classList.remove("d-none")
                $("#infoForm")[0].classList.add("d-none")
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

function backToScheduling() {
    $("#payment")[0].classList.add("d-none")
    $("#infoForm")[0].classList.remove("d-none")
}





