
   $(function() {
   	//查企业 查个人按钮的切换
    $(".layui-tab-title li").each(function(index) {
        $(this).click(function(e) {
            $(this).addClass("layui-this").siblings().removeClass("layui-this");
            $(".layui-tab-item").eq(index).show().siblings(".layui-tab-item").hide();
        })
    });
    //首页导航的颜色变化
    $(".banner_top ul li a").mouseover(function(){
    	$(this).css("color","#15C2F5")
    })
    $(".banner_top ul li a").mouseleave(function(){
    	$(this).css("color","#fff")
    })
    //行业新闻资讯右侧滑过背景的变化
	$(".consu_box .fr ul li").mouseover(function(){
		$(this).css({"background":"#E2E2FF"})
				.find("p").css("color","#6E3CFF")
	})
	$(".consu_box .fr ul li").mouseleave(function(){
		$(this).css({"background":"#fff","color":"#fff"})
				.find("p").css("color","#383552")
	})
	//平台公告
	$(".next_gg ul li").mouseover(function(){
		$(this).css("opacity","1")
	})
	$(".next_gg ul li").mouseleave(function(){
		$(this).css("opacity","0.7")
	})
	//侧边栏
	$('.sidebar ul li a').hover(function(){
		$(this).find("p").css("color","#15C2F5")
	});
	$('.sidebar ul li a').mouseleave(function(){
		$(this).find("p").css("color","#fff")
	});
	$('.sidebar ul li').eq(0).hover(function() {
	$(this).children().children('img').attr('src', '/HRzhicha/public/images/webimg/eej_03.jpg')
	})
	
	$('.sidebar ul li').eq(0).mouseleave(function() {
		$(this).children().children('img').attr('src', '/HRzhicha/public/images/webimg/actnavbar_101.jpg')
	})
	$('.sidebar ul li').eq(1).hover(function() {
	$(this).children().children('img').attr('src', '/HRzhicha/public/images/webimg/seac_061.jpg')
	})
	$('.sidebar ul li').eq(1).mouseleave(function() {
		$(this).children().children('img').attr('src', '/HRzhicha/public/images/webimg/actnavbar_103.jpg')
	})
	$('.sidebar ul li').eq(2).hover(function() {
		$(this).children().children('img').attr('src', '/HRzhicha/public/images/webimg/seac_03.jpg')
	})
	$('.sidebar ul li').eq(2).mouseleave(function() {
		$(this).children().children('img').attr('src', '/HRzhicha/public/images/webimg/actnavbar_10.jpg')
	})
	$('.sidebar ul li').hover(function() {
	$(this).find('div').stop().animate({
		left: '-167px'
	})
	$(this).find('div').show();
	})
	$('.sidebar ul li').mouseleave(function() {
	$(this).find('div').stop().animate({
		left: '-100px'
	})
	$(this).find('div').hide();
	})
	$(".sidebar .downs_box").click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 500);
	});
	//查企业页面下拉选择框点击某一选项背景变为白色
	$("#trade").click(function(){
		$(this).css("background","#fff")
	})
	// 查企业页面搜索的网址滑过改变颜色
	$(".compTitleBot").find("#www").hover(function(){
		$(this).css("color","#6E3CFF")
	})
	$(".compTitleBot").find("#www").mouseleave(function(){
		$(this).css("color","#868686")
	})
	//控制首页的视频中文字的显示隐藏
	/* $("#news").mouseover(function(){
		$(this).find("p").style("display","block")
	});
	$("#news").mouseleave(function(){
		$(this).find("p").style("display","none")
	}); */
})