// from https://getbootstrap.com/docs/4.5/components/forms/

'use strict';
window.addEventListener('load', function () {
    //for testing
    // $("#payment")[0].classList.remove("d-none") 
    // $("#paymentToast").toast('show')



    var forms = $('.needs-validation');
    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity()) {
                // if ($("#payment")[0)
                $("#payment")[0].classList.remove("d-none")
                $("#infoForm")[0].classList.add("d-none")
                if (form.id === 'paymentForm') {
                    $("#toastMessage").text(`Hello ${$("#validationCustom04").val()}! Your booking for a ${$("#validationCustom01").val()}cut with ${$("#validationCustom02").val()} has been successfully booked for ${new Date($("#validationCustom03").val()).toLocaleTimeString()} on ${new Date($("#validationCustom03").val()).toLocaleDateString()}`)
                    $("#paymentToast").toast('show')
                }
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

// datetime picker settings
var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
var nowDate = now.toISOString().split("T")[0] + "T00:00";
$("#validationCustom03")[0].setAttribute("min", nowDate);

now.setFullYear(now.getFullYear() + 1)
var laterDate = now.toISOString().split("T")[0] + "T00:00";
$("#validationCustom03")[0].setAttribute("max", laterDate);

function backToScheduling() {
    $("#payment")[0].classList.add("d-none")
    $("#infoForm")[0].classList.remove("d-none")
}



function onSubmitPayment(e) {
    $("#toastMessage").text(`Hello ${$("#validationCustom04").val()}! Your booking for a ${$("#validationCustom01").val()}cut with ${$("#validationCustom02").val()} has been successfully booked for ${new Date($("#validationCustom03").val()).toLocaleTimeString()} on ${new Date($("#validationCustom03").val()).toLocaleDateString()}`)
    $("#paymentToast").toast('show')
}


