function addFavorite2() {
var url = window.location;
var title = document.title;
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("360se") > -1) {
alert("防止失联关注公众号：甜甜小窝");
}
else if (ua.indexOf("msie 8") > -1) {
window.external.AddToFavoritesBar(url, title); //IE8
}
else if (document.all) {
try{
window.external.addFavorite(url, title);
}catch(e){
alert('防止失联关注公众号：甜甜小窝');
}
}
else if (window.sidebar) {
window.sidebar.addPanel(title, url, "");
}
else {
alert('防止失联关注公众号：甜甜小窝');
}
}