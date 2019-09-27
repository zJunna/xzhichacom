window.onload = function() {
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		cWidth = canvas.width,
		cHeight = canvas.height,
		score = canvas.attributes['data-score'].value,
		stage = ['一般', '中等', '良好', '优秀', '极好'],
		radius = 240, //外圆的半径
		//圆所在的角度，刻度所在的角度
		deg0 = Math.PI / 9,
		deg1 = Math.PI * 11 / 45;

	if(score < 0 || score > 100) {
		/*console.log(1);*/
		/*ClipToBands=false;*/
	/*score=100;*/
	if(score>100){
		var dot = new Dot(),
			dotSpeed = 0.03,
			textSpeed = Math.round(dotSpeed * 100 / deg1),
			angle = 0,
			credit = 0;

		(function drawFrame() {

			ctx.save();
			ctx.clearRect(0, 0, cWidth, cHeight);
			ctx.translate(cWidth / 2, cHeight / 2);
			ctx.rotate(8 * deg0);

			dot.x = radius * Math.cos(angle);
			dot.y = radius * Math.sin(angle);

			var aim = (score - 0) * deg1 / 20;
			if(angle < aim) {
				angle += dotSpeed;
			}
			dot.draw(ctx);

			if(credit < score - textSpeed) {
				credit += textSpeed;
			} else if(credit >= score - textSpeed && credit < score) {
				credit += 1;
			}
			text(credit);

			ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 26; //跑动的宽度
			ctx.strokeStyle = '#EFC980';//跑动的颜色
			ctx.arc(0, 0, radius,0, angle, false);
			ctx.stroke();
			ctx.restore();

			window.requestAnimationFrame(drawFrame);

			/*ctx.save(); //中间刻度层
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(255, 255, 255, .2)';
			ctx.lineWidth = 10;
			ctx.arc(0, 0, 200, 0, 11 * deg0, false);
			ctx.stroke();
			ctx.restore();*/

			ctx.save(); // 刻度线
			/*for(var i = 0; i < 6; i++) {
			    ctx.beginPath();
			    ctx.lineWidth = 2;
			    ctx.strokeStyle = 'rgba(255, 255, 255, .3)';
			    ctx.moveTo(140, 0);
			    ctx.lineTo(130, 0);
			    ctx.stroke();
			    ctx.rotate(deg1);
			}*/
			ctx.restore();

			ctx.save(); // 细分刻度线
			/* for(i = 0; i < 25; i++) {
			     if(i % 5 !== 0) {
			         ctx.beginPath();
			         ctx.lineWidth = 2;
			         ctx.strokeStyle = 'rgba(255, 255, 255, .1)';
			         ctx.moveTo(140, 0);
			         ctx.lineTo(133, 0);
			         ctx.stroke();
			     }
			     ctx.rotate(deg1 / 5);
			 }*/
			ctx.restore();

			ctx.save(); //信用分数
			ctx.rotate(Math.PI / 2);
			for(i = 0; i < 6; i++) {
				ctx.fillStyle = '#999999'; //刻度数字的颜色
				ctx.font = '20px Helvetica';
				ctx.textAlign = 'center';
				ctx.fillText(0 + 20 * i, 0, -190); //位置
				ctx.rotate(deg1);
			}
			ctx.restore();

			ctx.save(); //分数段
			ctx.rotate(Math.PI / 2 + deg0);
			for(i = 0; i < 5; i++) {
				ctx.fillStyle = '#999999';
				ctx.font = '20px Helvetica'; //刻度优秀的颜色
				ctx.textAlign = 'center';
				ctx.fillText(stage[i], 5, -190); //位置
				ctx.rotate(deg1);
			}
			ctx.restore();

			ctx.save(); //信用阶段及评估时间文字
			ctx.rotate(10 * deg0);
			ctx.fillStyle = '#EFC980'; //信用极好的颜色
			ctx.font = '30px Helvetica'; //信用极好的大小
			ctx.textAlign = 'center';
			if(score < 50) {
				ctx.fillText('信用一般', 0, 20);
			} else if(score < 60 && score >= 50) {
				ctx.fillText('信用中等', 0, 20);
			} else if(score < 70 && score >= 60) {
				ctx.fillText('信用良好', 0, 20);
			} else if(score < 80 && score >= 70) {
				ctx.fillText('信用优秀', 0, 20);
			} else if(score <= 100 && score >= 80) {
				ctx.fillText('信用极好', 0, 20);
			}

			ctx.fillStyle = '#666666'; //时间
			ctx.font = '14px Helvetica';
			//ctx.fillText('评估时间：2016.11.06', 0, 60);
			var date = new Date();
			var ymd = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
			ctx.fillText('评估时间 : ' + ymd, 0, 100);

			ctx.fillStyle = '#7ec5f9';
			ctx.font = '14px Helvetica';
			/* ctx.fillText('BETA', 0, -60);*/
			ctx.restore();

			// ctx.save(); //最外层轨道(底色)
			ctx.beginPath();
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 26;
			ctx.arc(0, 0, radius, 0, 11 * deg0, false);
			ctx.stroke();
			ctx.restore();
			

		})();
	}
	} else {
		var dot = new Dot(),
			dotSpeed = 0.03,
			textSpeed = Math.round(dotSpeed * 100 / deg1),
			angle = 0,
			credit = 0;

		(function drawFrame() {

			ctx.save();
			ctx.clearRect(0, 0, cWidth, cHeight);
			ctx.translate(cWidth / 2, cHeight / 2);
			ctx.rotate(8 * deg0);

			dot.x = radius * Math.cos(angle);
			dot.y = radius * Math.sin(angle);

			var aim = (score - 0) * deg1 / 20;
			if(angle < aim) {
				angle += dotSpeed;
			}
			dot.draw(ctx);

			if(credit < score - textSpeed) {
				credit += textSpeed;
			} else if(credit >= score - textSpeed && credit < score) {
				credit += 1;
			}
			text(credit);

			ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 26; //跑动的宽度
			ctx.strokeStyle = 'rgba(239,201,128,1)';//跑动的颜色
			ctx.arc(0, 0, radius,0, angle, false);
			ctx.stroke();
			ctx.restore();

			window.requestAnimationFrame(drawFrame);

			/*ctx.save(); //中间刻度层
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(255, 255, 255, .2)';
			ctx.lineWidth = 10;
			ctx.arc(0, 0, 200, 0, 11 * deg0, false);
			ctx.stroke();
			ctx.restore();*/

			ctx.save(); // 刻度线
			/*for(var i = 0; i < 6; i++) {
			    ctx.beginPath();
			    ctx.lineWidth = 2;
			    ctx.strokeStyle = 'rgba(255, 255, 255, .3)';
			    ctx.moveTo(140, 0);
			    ctx.lineTo(130, 0);
			    ctx.stroke();
			    ctx.rotate(deg1);
			}*/
			ctx.restore();

			ctx.save(); // 细分刻度线
			/* for(i = 0; i < 25; i++) {
			     if(i % 5 !== 0) {
			         ctx.beginPath();
			         ctx.lineWidth = 2;
			         ctx.strokeStyle = 'rgba(255, 255, 255, .1)';
			         ctx.moveTo(140, 0);
			         ctx.lineTo(133, 0);
			         ctx.stroke();
			     }
			     ctx.rotate(deg1 / 5);
			 }*/
			ctx.restore();

			ctx.save(); //信用分数
			ctx.rotate(Math.PI / 2);
			for(i = 0; i < 6; i++) {
				ctx.fillStyle = '#999999'; //刻度数字的颜色
				ctx.font = '20px Helvetica';
				ctx.textAlign = 'center';
				ctx.fillText(0 + 20 * i, 0, -190); //位置
				ctx.rotate(deg1);
			}
			ctx.restore();

			ctx.save(); //分数段
			ctx.rotate(Math.PI / 2 + deg0);
			for(i = 0; i < 5; i++) {
				ctx.fillStyle = '#999999';
				ctx.font = '20px Helvetica'; //刻度优秀的颜色
				ctx.textAlign = 'center';
				ctx.fillText(stage[i], 5, -190); //位置
				ctx.rotate(deg1);
			}
			ctx.restore();

			ctx.save(); //信用阶段及评估时间文字
			ctx.rotate(10 * deg0);
			ctx.fillStyle = '#EFC980'; //信用极好的颜色
			ctx.font = '30px Helvetica'; //信用极好的大小
			ctx.textAlign = 'center';
			if(score < 50) {
				ctx.fillText('信用一般', 0, 45);
			} else if(score < 60 && score >= 50) {
				ctx.fillText('信用中等', 0, 45);
			} else if(score < 70 && score >= 60) {
				ctx.fillText('信用良好', 0, 45);
			} else if(score < 80 && score >= 70) {
				ctx.fillText('信用优秀', 0, 45);
			} else if(score <= 100 && score >= 80) {
				ctx.fillText('信用极好', 0, 45);
			}

			ctx.fillStyle = '#666666'; //时间
			ctx.font = '22px Helvetica';
			//ctx.fillText('评估时间：2016.11.06', 0, 60);
			var date = new Date();
			var ymd = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
			ctx.fillText('评估时间 : ' + ymd, 0, 100);

			ctx.fillStyle = '#7ec5f9';
			ctx.font = '20px Helvetica';
			/* ctx.fillText('BETA', 0, -60);*/
			ctx.restore();

			// ctx.save(); //最外层轨道(底色)
			ctx.beginPath();
			ctx.strokeStyle = 'rgb(244, 244, 244,.5)';
			ctx.lineWidth = 26;
			ctx.arc(0, 0, radius, 0, 11 * deg0, false);
			ctx.stroke();
			ctx.restore();
			

		})();
	}

	function Dot() {
		this.x = 0;
		this.y = 0;
		this.draw = function(ctx) {
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = '#EFC980'; //滑动小球的颜色
			ctx.arc(this.x, this.y, 0, 0, Math.PI * 2, false);
			ctx.fill();
			ctx.restore();
		};
	}

	function text(process) {
		ctx.save();
		ctx.rotate(10 * deg0);
		ctx.fillStyle = '#EFC980';
		ctx.font = '120px Helvetica';
		ctx.textAlign = 'center';
		ctx.textBaseLine = 'top';
		ctx.fillText(process, 0, -15); //数值的位置
		ctx.restore();
	}
};