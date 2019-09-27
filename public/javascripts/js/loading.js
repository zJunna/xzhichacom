

//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 57 ? (_PageHeight - 57) / 2 : 0,
    _LoadingLeft = _PageWidth > 67 ? (_PageWidth - 67) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="text-align:center; position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#fff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left:45px; padding-right: 5px; background: url(/HRzhicha/public/images/img/loading123.gif) no-repeat scroll 5px 10px; color: #696969; font-family:\'Microsoft YaHei\';"></div></div>';
//呈现loading效果
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
