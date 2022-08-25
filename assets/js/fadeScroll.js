$(document).ready(() => {
    $('.fade-scroll').click(function () {
        let invalid = false
        document.querySelectorAll('.order__top input').forEach((item) => {
            if(!item.value && !invalid) {
                invalid = true
            }
        })
        if(!invalid) {
            var top = $('#title').offset().top//определим высоту от начала страницы до якоря
            $('body,html').animate({scrollTop: top}, 1000); //сделаем
        }

    })
});
