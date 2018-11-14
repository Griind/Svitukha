$(function () {
    var $startBtn = $('#startButton');
    var $startMenu = $('#startMenu');
    var $startSubmenu = $('#programsButton');
    $startBtn.on('click', function () { $startMenu.toggle(); });
    $startSubmenu.on('click', function () { $('#startSubMenu').toggle(); });

    document.getElementById('paint_button').onclick = function () {

        var iframe = document.createElement('iframe');
       
        iframe.style.position = 'middle';

        iframe.src = 'home/paint';
        iframe.scrolling = 'no';
        document.body.appendChild(iframe);
       
    };
   
});