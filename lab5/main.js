// some code from https://getbootstrap.com/docs/4.5/components/forms/

'use strict';
window.addEventListener('load', function () {
    //for testing
    $("#payment")[0].classList.remove("d-none")
    // $("#paymentToast").toast('show')



    var forms = $('.needs-validation');
    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity()) {
                $("#payment")[0].classList.remove("d-none")
                $("#infoForm")[0].classList.add("d-none")

                if (form.id === 'paymentForm') {
                    $("#toastMessage").text(`Hello, ${$("#validationCustom04").val()}! Your booking for a ${$("#validationCustom01").val()}cut with ${$("#validationCustom02").val()} has been successfully booked at ${parseInt($("#timepicker").val().split(":")[0]) % 12 || 12}:${$("#timepicker").val().split(":")[1].padStart(2, "0")}${parseInt($("#timepicker").val().split(":")[0]) < 12 ? "AM" : "PM"} on ${new Date($("#datepicker").val()).toLocaleDateString()} `)
                    $(".toast").toast('show')
                }
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

$('img').on('dragstart', function (event) { event.preventDefault(); });



function backToScheduling() {
    $("#payment")[0].classList.add("d-none")
    $("#infoForm")[0].classList.remove("d-none")
}



function onSubmitPayment(e) {
    $("#toastMessage").text(`Hello ${$("#validationCustom04").val()} !Your booking for a ${$("#validationCustom01").val()}cut with ${$("#validationCustom02").val()} has been successfully booked for ${new Date($("#validationCustom03").val()).toLocaleTimeString()} on ${new Date($("#validationCustom03").val()).toLocaleDateString()} `)
    $("#paymentToast").toast('show')
}


$(document).on('change', '#validationCustom02', function () {
    $('#datepicker').prop("disabled", false)
    $('#datepicker').datepicker({
        beforeShowDay: function (date) {

            if ($('#validationCustom02').val() === "Surge R.") {
                return [date.getDay() == 0 || date.getDay() == 6 || date.getDay() == 1 ? false : true];

            }
            else if ($('#validationCustom02').val() === "Alphonse-Zander A.") {
                return [date.getDay() == 5 || date.getDay() == 0 || date.getDay() == 6 ? false : true];
            }

            return [date.getDay() == 0 || date.getDay() == 6 ? false : true];
        }, minDate: 0, maxDate: 14
    });
});
