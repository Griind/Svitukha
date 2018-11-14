$(function () {
    var $startBtn = $('#startButton');
    var $startMenu = $('#startMenu');
    var $startSubmenu = $('#programsButton');
    $startBtn.on('click', function () { $startMenu.toggle(); });
    $startSubmenu.on('click', function () { $('#startSubMenu').toggle(); });

    document.getElementById('programs_button').onclick = function () {

        var iframe = document.createElement('iframe');
        iframe.src = 'http://example.com';
        document.body.appendChild(iframe);

    };

});