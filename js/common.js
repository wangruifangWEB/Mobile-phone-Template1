function biglv() {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
biglv();

$(function(){
  $(document).ready(function () {
    //初始化宽度、高度
    $(".header-mask-list").height($(window).height() - 35);
    //当文档窗口发生改变时 触发
    $(window).resize(function () {
    $(".header-mask-list").height($(window).height() - 35);
    });
  });
  
  // 导航内容显示与隐藏切换
  $("#menu").click(function () {
    $(".header-mask-list").slideToggle();
  });

  if($('.header-mask-list').is(":hidden")){
    $('section').click(function(){
      $(".header-mask-list").slideUp();
    })
  }

  //产品中心页面图标点击切换
  $('.furniture-container').on('click','div',function(){
    var index=$(this).index();
    var elem= $('.furniture-container div');
    $('.classicCasePages-list .list').eq(index).show().siblings('div').hide();
    $(this).addClass('current').siblings('div').removeClass('current');
    if( $(this).hasClass('current') && index === 0){
     elem.eq(0).children('img').attr('src','images/icon/sofa.png')
    }else{
     elem.eq(0).children('img').attr('src','images/icon/no-sofa.png')
    }
    if($(this).hasClass('current') && index === 1){
    elem.eq(1).children('img').attr('src','images/icon/bedclothes.png')
    }else{
     elem.eq(1).children('img').attr('src','images/icon/no-bedclothes.png')
    }
    if($(this).hasClass('current') && index === 2){
     elem.eq(2).children('img').attr('src','images/icon/Carpet.png')
    }else{
     elem.eq(2).children('img').attr('src','images/icon/no-Carpet.png')
    }
    if($(this).hasClass('current') && index === 3){
     elem.eq(3).children('img').attr('src','images/icon/doors_ windows.png')
    }else{
     elem.eq(3).children('img').attr('src','images/icon/no-doors_ windows.png')
    }
    if($(this).hasClass('current') && index === 4){
    elem.eq(4).children('img').attr('src','images/icon/Tables_ chairs.png')
    }else{
     elem.eq(4).children('img').attr('src','images/icon/no-Tables_ chairs.png')
    }
  });


  $('.classicCasePages-list').on('click', '.classicCasePages-item', function () {
    var imgSrc = $(this).children('img').attr('src'),
      index = $(this).index();
    swiper.slideTo(index, 1000, false); //切换到需要切换的slide，速度为1秒
    $('.mask-swiper').show();
    $('body').addClass('noScroll');
  })
  // 关闭遮罩
  $('.closeBtn').click(function () {
    $('.mask-swiper').hide();
    $('body').removeClass('noScroll');
  });

})

