
//			导航的名：class、
//			内容的id: infoView  creditRecordView stockRightView  recruitInfoView 
//			  		  intellPropertyView   newsInfoView contactInfoView  commentView
//			 

			$(function() {
				var cont1 = $("#infoView").offset().top - 296; //获取模块距页面顶部的距离，由于有固定定位的导航栏，所以减100
				var cont2 = $("#creditRecordView").offset().top - 240;
				var cont3 = $("#stockRightView").offset().top - 240;
				var cont4 = $("#recruitInfoView").offset().top - 240;
				var cont5 = $("#intellPropertyView").offset().top - 240;
				var cont6 = $("#newsInfoView").offset().top - 240;
				var cont7 = $("#contactInfoView").offset().top - 240;
				var cont8 = $("#commentView").offset().top - 240;

				$('#a1').click(function() {
					$('html,body').animate({
						scrollTop: $('#infoView').offset().top - 296
					}, 400);
				}); //点击滑动到模块位置 由于有导航栏减91
				$('#a2').click(function() {
					$('html,body').animate({
						scrollTop: $('#creditRecordView').offset().top - 225
					}, 400);
				});
				$('#a3').click(function() {
					$('html,body').animate({
						scrollTop: $('#stockRightView').offset().top - 225
					}, 400);
				});
				$('#a4').click(function() {
					$('html,body').animate({
						scrollTop: $('#recruitInfoView').offset().top - 225
					}, 400);
				});

				$('#a5').click(function() {
					$('html,body').animate({
						scrollTop: $('#intellPropertyView').offset().top - 225
					}, 400);
				});
				$('#a6').click(function() {
					$('html,body').animate({
						scrollTop: $('#newsInfoView').offset().top - 235
					}, 400);
				});

				$('#a7').click(function() {
					$('html,body').animate({
						scrollTop: $('#contactInfoView').offset().top - 235
					}, 400);
				});
				$('#a8').click(function() {
					$('html,body').animate({
						scrollTop: $('#commentView').offset().top - 235
					}, 400);
				});

				window.onscroll = function() {
					var t = document.documentElement.scrollTop || document.body.scrollTop; //获取距离页面顶部的距离

					if(t >= cont1 && t <= cont2) { //到顶部的距离介于两者之间时
						$("#a1").addClass("on"); //添加class,改变对应导航栏颜色
					} else {

						$("#a1").removeClass("on");

					}
					if(t >= cont2 && t <= cont3) {

						$("#a2").addClass("on");
					} else {

						$("#a2").removeClass("on");

					}

					if(t >= cont3 && t <= cont4) {

						$("#a3").addClass("on");

					} else {

						$("#a3").removeClass("on");

					}
					if(t >= cont4 && t <= cont5) {
						$("#a4").addClass("on");
					} else {

						$("#a4").removeClass("on");

					}
					if(t >= cont5 && t <= cont6) {
						$("#a5").addClass("on");
					} else {

						$("#a5").removeClass("on");

					}
					if(t >= cont6 && t <= cont7) {
						$("#a6").addClass("on");
					} else {

						$("#a6").removeClass("on");

					}
					if(t >= cont7 && t <= cont8) {
						$("#a7").addClass("on");
					} else {

						$("#a7").removeClass("on");

					}
					if(t >= cont8) {
						$("#a8").addClass("on");
					} else {

						$("#a8").removeClass("on");

					}
					fresh()
				}

			})
			$(window).scroll(function() {
				var hei = $(document).scrollTop()
				if(hei >= 300) {
					$('.com_main_listr  .com_main_img').hide()
					$('.com_main_listr  .com_main_title').css('width', '5rem')
					$('.com_main_text').css('margin-left', '0')
					$('.com_main_txtx').hide()
					$('.com_url_add').hide()
					$('.topHeight').css('height', '3.8rem')
					$('.topHeight .com_navbar_list').css('top', '2.5rem')

					$('.main_com_tab_detail').css('height', '4.3rem')

				} else {
					$('.com_main_listr .com_main_img').show()
					$('.com_main_listr  .com_main_title').css('width', '4rem')
					$('.com_main_text').css('margin-left', '0.1rem')
					$('.com_main_txtx').show()
					$('.com_url_add').show()
					$('.topHeight').css('height', '5rem')
					$('.topHeight .com_navbar_list').css('top', '3.8rem')

				}
			});