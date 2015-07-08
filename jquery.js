$(document).ready(function() {
    $('.square').on('mouseover', function() {
        $(this).find('span').removeClass('hide').addClass('show');
    });
    $('.square').on('mouseleave', function() {
        $(this).find('span').removeClass('show').addClass('hide');
    });
    $('.square').on('click', function() {
        var value = $(this).find('span').html();
        console.log('zduping');
        $('.square-big').html(value).css({
            'font-size': '11.5em',
            'color': 'white',
            'text-align': 'center',
        });
    });
    $('.loader').on('click', function() {
        $('.logo').text('Trochę Cierpliwości gnoju');
    });
    $('.loader').on('dblclick', function() {
        $('.logo').text('Więcej razy się nie da kliknąć ? :)');
    });
});