$(function(){
/*	$('.fade_list_detail_one ').click(function() {
				$('.com_main_txtx ').hide();
				$('.com_main_img ').hide();
				$('.com_url_add ').hide();
			});
				$('.fade_list_detail_ter ').click(function() {
				$('.com_main_txtx ').show();
				$('.com_main_img ').show();
				$('.com_url_add ').show();
			});*/
	
		(function() {
			var showMoreNChildren = function($children, n) {
				//显示某jquery元素下的前n个隐藏的子元素
				var $hiddenChildren = $children.filter(":hidden");
				var cnt = $hiddenChildren.length;
				for(var i = 0; i < n && i < cnt; i++) {
					$hiddenChildren.eq(i).show();
				}
				return cnt - n; //返回还剩余的隐藏子元素的数量
			}

			//对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
			$(".showMoreNChildren1").each(function() {
				var pagesize = $(this).attr("pagesize") || 10;
				var $children = $(this).children();
				if($children.length > pagesize) {
					for(var i = pagesize; i < $children.length; i++) {
						$children.eq(i).hide();
					}

					$(".expand_more1").insertAfter($(this)).click(function() {
						if(showMoreNChildren($children, pagesize) <= 0) {
							//如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条”
							$(this).hide();
						};
					});
					
				}
			});
		})();


			
	
})



 


