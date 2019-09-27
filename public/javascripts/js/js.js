/* new function() {
 	var _self = this;
 	_self.width = 750; //设置默认最大宽度
 	_self.fontSize = 100; //默认字体大小
 	_self.widthProportion = function() {
 		var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
 		return p > 1 ? 1 : p < 0.32 ? 0.32 : p;
 	};
 	_self.changePage = function() {
 		document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
 	}
 	_self.changePage();
 	window.addEventListener('resize', function() {
 		_self.changePage();
 	}, false);
 };
*/

(function(doc, win) {
	var docEl = doc.documentElement,
		isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
		dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
		dpr = 1,
		scale = 1 / dpr,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	docEl.dataset.dpr = dpr;
	var metaEl = doc.createElement('meta');
	metaEl.name = 'viewport';
	metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
	docEl.firstElementChild.appendChild(metaEl);
	var recalc = function() {
		var width = docEl.clientWidth;
		if(width / dpr > 750) {
			width = 750 * dpr;
		}
		// 乘以100，px : rem = 100 : 1
		docEl.style.fontSize = 100 * (width / 750) + 'px';
	};
	recalc()
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
})(document, window);

function clearSubs(e, s, d, r) {
	if(e.val() != '' && s.val() != '' && d.val() != '') {
		r.addClass('on');
		r.removeAttr('disabled');
	} else {
		r.removeClass('on');
		r.attr('disabled', 'disabled');
	}
}

function clearSub(e, s, r) {
	if(e.val() != '' && s.val() != '') {
		r.addClass('on');
		r.removeAttr('disabled');
	} else {
		r.removeClass('on');
		r.attr('disabled', 'disabled');
	}
}
$('.content .box_inp .lable_in input').bind('input propertychange', function() {
	clearSubs($('#a'), $('#b'), $('#c'), $('.btn'))
});
$('.content .box_inp .lable_in input').bind('input propertychange', function() {
	clearSub($('#a'), $('#b'), $('.btn'))
});
$('.reg_pas_lab input').bind('input propertychange', function() {
	clearSub($('#a'), $('#b'), $('.buttonser'))
});
$('.reg_lable input').bind('input propertychange', function() {
	clearSub($('#a'), $('#b'), $('.buttonser'))
});
//弹出
var title = '',
	classer = 0,
	arrlist = [],
	actives = '',
	lengths = '';

function btnup(e) {
	arrlist = [];
	$('.contas ul li').remove()
	lengths = e.length - 2 / 0.88 + 'rem';
	$('#targetContainer .contas').css('bottom', '-' + lengths);
	$('#targetContainer .contas').animate({
		'bottom': 0
	}, 250)
	for(var n = 0; n < e.length; n++) {
		if(n == 0) {
			classer = e[n]
		} else if(n == 1) {
			title = e[n]
		} else {
			arrlist.push(e[n])
		}
	}
	$('#targetContainer p').html(title)
	$('#targetContainer').fadeIn();
	for(var s = 0; s < arrlist.length; s++) {
		var str = '<li >' + arrlist[s] + '</li>';
		$('.contas ul').append(str)
	}
}
$('#targetContainer ul').on('click', 'li', function() {
	$(this).addClass('on').siblings().removeClass('on')
	actives = $(this).html()
})
$('#targetContainer .contas div').click(function() {
	$('#targetContainer').fadeOut();
	$('#targetContainer .contas').animate({
		'bottom': '-' + lengths
	}, 350)
	$('.' + classer).html(actives);
})
$('#targetContainer').click(function() {
	$('#targetContainer').fadeOut();
	$('#targetContainer .contas').animate({
		'bottom': '-' + lengths
	})
})
$('#targetContainer .contas').click(function(e) {
	e.stopPropagation()
})

/*点击输入框后，键盘弹出，底部菜单隐藏*/

window.onresize = function() {
	var windowHeight = $(window).height(); //获取窗口的可见高度,不是整个文档的高度
	var screenHeight = window.screen.availHeight; //获取浏览器的屏幕的可用高度
	//alert(windowHeight+','+window.screen.availHeight);

	var u = navigator.userAgent;

	if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
		if(windowHeight <= screenHeight / 2) {
			$('footer').css({
				'position': 'absoult',
				'display': 'none'
			});
		} else {
			$('footer').css({
				'position': 'fixed',
				'display': 'block'
			});
		}
	}
}
//alert($(window).height());
//alert(window.screen.availHeight);
$("input[type='text']").on('focus', function() {
	$('footer').hide();
})
$("input[type='text']").on('blur', function() {
	$('footer').show();
})