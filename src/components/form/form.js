/**
 * Focus and blur on the input field
 */
var formInput = $('.form__input');

function addClassFn(object) {
    object.parent('.form__element').addClass('form__element--focused');
}

function remClassFn(object) {
    object.parent('.form__element').removeClass('form__element--focused');
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
    if($(this).attr('value')) {
        addClassFn($(this));
    }
});
