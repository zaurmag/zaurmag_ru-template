jQuery(document).ready(function($) {
    /**
     * Focus and blur on the input field
     */
    var formInput = $('.form__control');

    function addClassFn(object) {
        object.parent().addClass('form__control--focused');
    }

    function remClassFn(object) {
        object.parent().removeClass('form__control--focused');
    }

    formInput
        .on('focus', function() {
            addClassFn($(this));
        })
        .on('blur', function() {
            if($(this).val() === '') {
                remClassFn($(this));
            }
        });

    formInput.each(function(){
        if($(this).val()) {
            addClassFn($(this));
        }
    });

    /* Init forms
    ========================================================================= */

    /**
     * Feedback
     */
    $('#feedbackForm').simpleSendForm({
        mailUrl: "/wp-content/themes/zaurmag/form-submit/submit.php",
        successTitle: "Спасибо за ваше обращение!",
        successText: "Я обязательно отвечу на ваше письмо в самое ближайшее время.",
        captcha: true,
        captchaPublicKey: '6LfMJSgTAAAAAOTelVg60tsKx5AogFLXH5ElxqnQ'
    });

    /**
     * Order verstka
     */
    $('#orderVerstka').simpleSendForm({
        mailUrl: "/wp-content/themes/zaurmag/form-submit/submit.php",
        successTitle: "Спасибо за ваше обращение!",
        successText: "Я обязательно отвечу на вашу заявку не более суток.",
        captcha: true,
        captchaPublicKey: '6LfMJSgTAAAAAOTelVg60tsKx5AogFLXH5ElxqnQ'
    });

    /**
     * Order site
     */
    $('#orderSite').simpleSendForm({
        mailUrl: "/wp-content/themes/zaurmag/form-submit/submit.php",
        successTitle: "Спасибо за ваше обращение!",
        successText: "Я обязательно отвечу на вашу заявку не более суток.",
        captcha: true,
        captchaPublicKey: '6LfMJSgTAAAAAOTelVg60tsKx5AogFLXH5ElxqnQ'
    });
}); // end ready

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
