
//header

	$('.xuanwu').hover(function(){
		$('.img-t').show();
	})
	$('.img-t').mouseleave(function(){
		this.style.display='none'
	})
	//头部的游戏排行
	$('.game-rank').mouseover(function(){
		$('.rank').show();
		$(this).addClass('game-rank-active');
	})
	$('.rank').hover(function(){
		$('.rank').show();
		$('.game-rank').addClass('game-rank-active');
	},function(){
		
		$('.rank').hide();
		$('.game-rank').removeClass('game-rank-active');
	})
	$('.rank1 .gam-img')[0].style.display='block';
	$('.rank1 .game-text')[0].style.display='none';
	$('.rank2 .gam-img')[2].style.display='block';
	$('.rank2 .game-text')[2].style.display='none';
	$('.rank3 .gam-img')[3].style.display='block';
	$('.rank3 .game-text')[3].style.display='none';
	$('.rank1 .imgnav li').add('.rank2 .imgnav li').add('.rank3 .imgnav li').mouseover(function(){
		rank.call(this);
		rank();
	})
	for(var i=0;i<3;i++){
		$('.rank1 .num:eq('+i+')').add('.rank2 .num:eq('+i+')').add('.rank3 .num:eq('+i+')').css({
			'border-color':'#ff4e00',
			'background-color':'#ff4e00',
			'color':'#fff'
		})
		$('.rank1 .num1:eq('+i+')').add('.rank2 .num1:eq('+i+')').add('.rank3 .num1:eq('+i+')').css({
			'background-color':'#ff4e00',
			'border-color':'#ff4e00',
			'color':'#fff'
		})
	}


function rank(){
	$(this).children('.game-text').css({'display':'none'}).siblings().css({'display':'block'})
		$(this).siblings().children('.game-text').show();
		$(this).siblings().children('.gam-img').hide();
}
//轮播
var num=0;
$('.order li').mouseover(function(){
	num=$(this).index();
	fn1();
})
function fn1(){
	$('.ad-btn:eq('+num+')').css({
		'background-position-y':'-84px'
	}).siblings().css({
		'background-position-y':'-66px'
	})
	$('.promo .img img:eq('+num+')').show().siblings().hide();
}
var timer=null;
function aotuplay(){
	timer=setInterval(function(){
		num++;
		num=num%7;
		fn1();
	},1000)
}
aotuplay();
$('.promo').mouseover(function(){
	clearInterval(timer);
})
$('.promo').mouseout(function(){
	aotuplay();
})

//主导航选项卡
$('.next-rightsidebar:eq(0)').show();
$('.main-rightsidebar li').mouseover(function(){
	var index=$(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.next-rightsidebar:eq('+index+')').show().siblings().hide();

})

//活动中心 选项卡
$('.act_list:eq(0)').show();
$('.act-hd li').click(function(){
	var index=$(this).index();
	$(this).css({
		'border-top':'3px solid #EC4828'
	}).siblings().css({
		'border-top':'3px solid white'
	})
	$('.act_list:eq('+index+')').show().siblings().hide();
})
//左侧新手指南
$('.menu li').mouseover(function(){
	var index=$(this).index();
	$('.right_list1:eq('+index+')').show().siblings().hide();
})
$('.menu-guide').mouseout(function(){
	$('.right_list1').hide();
})
$('.right_list1').mouseover(function(){
	$(this).show();
})
//视频中心
$('.te11:eq(0)').show().siblings().hide();
$('.nav-nav2 li:eq(0)').css({
	'border-top':'3px solid #EC4828'
})
$('.nav-nav2 li').mouseover(function(){
	var index=$(this).index();
	$(this).css({
		'border-top':'3px solid #EC4828'
	}).siblings().css({
		'border-top':'3px solid white'
	})
	$('.te11:eq('+index+')').show().siblings().hide();
})
// 道具城
$('.tab-panel2 ul:eq(0)').show().siblings().hide();
$('.shop-hd li:eq(0)').css({
		'background-color':'#EC4828'
	})
$('.shop-hd li').mouseover(function(){
	var index=$(this).index();
	console.log(index)
	$(this).css({
		'background-color':'#EC4828'
	}).siblings().css({
		'background-color':'#d0d0d0'
	})
	$('.tab-panel2 ul:eq('+index+')').show().siblings().hide();
})
//合作媒体网站
$('.teamwork-select').add('.select').hover(function(){
	$('.select').show();
},function(){
	$('.select').hide();
})
//职业攻略
$('.job-info:eq(0)').show();
$('.role .job-list').click(function(){
	$(this).children().css({
		'background-position-y':'-218px'
	}).parent().parent().siblings().children('.job-list').children().css({
		'background-position-y':'0px'
	})
	$('.job-info').hide();
	$(this).next().show();
})
//小说
$('.novel-bd:eq(0)').show();
$('.novel-hd li:eq(0)').css({
		'border-top':'3px solid #ec4828'
	})
$('.novel-hd li').mouseover(function(){
	$(this).css({
		'border-top':'3px solid #ec4828'
	}).siblings().css({
		'border-top':'3px solid white'
	})
	var index=$(this).index();
	$('.novel-bd:eq('+index+')').show();
	$('.novel-bd').not($('.novel-bd:eq('+index+')')).hide();
})
//玩家社区
$('.zone-list:eq(0)').show();
$('.zone-nav li:eq(0)').css({
		'border-top':'3px solid #ec4828'
	})
$('.zone-nav li').mouseover(function(){
	$(this).css({
		'border-top':'3px solid #ec4828'
	}).siblings().css({
		'border-top':'3px solid white'
	})
	var index=$(this).index();
	$('.zone-list:eq('+index+')').show();
	$('.zone-list').not($('.zone-list:eq('+index+')')).hide();
})
//赛事专区
$('.event-bd:eq(0)').show();
$('.event-hd li:eq(0)').css({
		'border-top':'3px solid #ec4828'
	})
$('.event-hd li').click(function(){
	$(this).css({
		'border-top':'3px solid #ec4828'
	}).siblings().css({
		'border-top':'3px solid white'
	})
	var index=$(this).index();
	$('.event-bd:eq('+index+')').show();
	$('.event-bd').not($('.event-bd:eq('+index+')')).hide();
})