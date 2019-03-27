
 var href = window.location.href.split('?')[1];
 console.log(href);
 if (href) {
   // 到指定位置
   //var t = $('#box').offset().top;
   //$(window).scrollTop(t - 30); 

   // 页面内容初始化
   var parameter = href.slice(-1);
   var elem = $('.furniture-container div');

   if (parameter == 1) {
     $('.classicCasePages-list .list').eq(1).show().siblings('.list').hide();
     elem.eq(1).addClass('current').siblings('div').removeClass('current');
     elem.eq(1).children('img').attr('src', 'images/icon/bedclothes.png')
   } else if (parameter == 2) {
     // 取消初始化
     elem.eq(0).children('img').attr('src', 'images/icon/no-sofa.png')
     $('.classicCasePages-list .list').eq(2).show().siblings('.list').hide();
     elem.eq(2).addClass('current').siblings('div').removeClass('current');
     $('.furniture-container div').eq(2).children('img').attr('src', 'images/icon/Carpet.png')
   } else if (parameter == 3) {
     // 取消初始化
     elem.eq(0).children('img').attr('src', 'images/icon/no-sofa.png')
     $('.classicCasePages-list .list').eq(3).show().siblings('.list').hide();
     elem.eq(3).addClass('current').siblings('div').removeClass('current');
     elem.eq(3).children('img').attr('src', 'images/icon/doors_ windows.png')
   } else if (parameter == 4) {
     // 取消初始化
     elem.eq(0).children('img').attr('src', 'images/icon/no-sofa.png')
     $('.classicCasePages-list .list').eq(4).show().siblings('.list').hide();
     elem.eq(4).addClass('current').siblings('div').removeClass('current');
     elem.eq(4).children('img').attr('src', 'images/icon/Tables_ chairs.png')
   }
 }
 

  var page;

  function ajaxFun() {
    if (page !== 0) {
      for (var i = 0; i < 6; i++) {
        $(".classicCasePages-list .list").append(
          `<div class="classicCasePages-item">
          <img src="images/proList1.png" alt="" />
          <div>- 我是加载的 -</div>
        </div>`
        );
      }
    }
  }

  $(window).scroll(
    function () {
      var scrollTop = $(this).scrollTop();
      console.log(scrollTop);
      var scrollHeight = $(document).height();
      var windowHeight = $(this).height();
      // var scrollHeight=windowHeight-$('footer').height();
      if (scrollTop + windowHeight == scrollHeight) {
        $('.more').html('正在加载');
        ajaxFun()
        page = 0;
        $('.more').html('没有更多了');
        // maxpage = sessionStorage['maxpage'];
        // if (page <= maxpage) {
        //   ajaxpage(page);
        //   page++;
        //   console.log(page);
        //   console.log(maxpage);
        //   if (page == maxpage) {
        //       alert('没有了');
        //     $("#more").html("没有更多数据了");
        //     return false;
        //   }
        // }
      }
    });