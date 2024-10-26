function addFavorite2() {
var url = window.location;
var title = document.title;
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("360se") > -1) {
alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
}
else if (ua.indexOf("msie 8") > -1) {
window.external.AddToFavoritesBar(url, title); //IE8
}
else if (document.all) {
try{
window.external.addFavorite(url, title);
}catch(e){
alert('加入收藏失败,请按 Ctrl+D 手动收藏!');
}
}
else if (window.sidebar) {
window.sidebar.addPanel(title, url, "");
}
else {
alert('加入收藏失败,请按 Ctrl+D 手动收藏!');
}
}