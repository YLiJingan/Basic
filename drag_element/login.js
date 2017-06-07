/**
 * login
 *
 */
window.onload =function() {
    var top = (document.documentElement.clientHeight - 350) / 2;
    var left = (document.documentElement.clientWidth - 350) / 2;
    var panel = document.getElementsByClassName('panel')[0];
    var login = document.getElementsByClassName('login')[0];
    var close = document.getElementsByClassName('close')[0];
    panel.style.top = top + 'px';
    panel.style.left = left + 'px';
    login.onclick = function () {
        panel.style.display = 'block';
    }
    close.onclick = function () {
        panel.style.display = 'none';
    }
    window.onresize = function(){
        var top = (document.documentElement.clientHeight - 250)/2;
        var left = (document.documentElement.clientWidth - 350)/2;
        panel.style.top = top + 'px';
        panel.style.left = left + 'px';
    }
}
