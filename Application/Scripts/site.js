$(function () {
    var $startBtn = $('#startButton');
    var $startMenu = $('#startMenu');
    var $startSubmenu = $('#programsButton');
    $startBtn.on('click', function () { $startMenu.toggle(); });
    $startSubmenu.on('click', function () { $('#startSubMenu').toggle(); });

});