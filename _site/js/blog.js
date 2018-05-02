
$(document).on('scroll', (ev) => {
    if (scrollY >= 340) {
        $('.bottom .ui.segment').addClass('sticky');    
    } else {
        $('.bottom .ui.segment').removeClass('sticky');
    }
})