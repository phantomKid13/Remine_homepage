$('#home').click(function(){
    $('#home').addClass('active')
    $('#about').removeClass('active')
    $('#contact').removeClass('active')
});

$('#about').click(function(){
    $('#about').addClass('active')
    $('#home').removeClass('active')
    $('#contact').removeClass('active')
});

$('#contact').click(function(){
    $('#contact').addClass('active')
    $('#about').removeClass('active')
    $('#home').removeClass('active')
});
