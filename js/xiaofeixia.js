$(function () {
  $('.area1 .content').fadeIn(5000);

  // 显示视频弹窗
  $('.check-video').click(function () {
    $('.video-modal').show();
    $('.video-modal .modal').fadeIn(1000);
  });

  // 关闭弹窗
  $('.video-modal').on('click', '.close', function () {
    $('.video-modal').hide();
    $('.video-modal .modal').hide();
  });

  // 创建视频播放层方法
  function showVideo(source) {
    
    var html = '<div class="video-layer"><div class="layer"></div>' + 
                  '<video class="p-pagevideo" autoplay="autoplay">' +
                    '<source type="video/webm" src="' + source + '">' +
                    '<source type="video/mp4" src="' + source + '">' +
                  '</video>' +
                  '<a href="javascript:;" class="close"></a>' +
                '</div>';
    $('body').append(html);
    $('video').attr('autoplay','autoplay');
  }

  // 视频关闭事件
  $('body').on('click', '.layer, .video-layer .close', function () {
    $('.layer').remove();
    $('.video-layer').remove();
  });

  // 通用显示视频方法
  $('.J_showVideo').click(function () {
    var videoSrc = $(this).attr('source');
    showVideo(videoSrc);
  });


  $(".area3 .slide").slide({mainCell:".bd ul",autoPlay:true,effect: 'fold',interTime: 3500});

  // 第四个区域的视频播放
  $('.area4 .video-list').on('mouseover mouseout', 'li', function (e) {
    if (e.type == 'mouseover') {
      $(this).addClass('act').siblings().removeClass('act');
      $(this).find('.video').trigger('play');
    } else {
      $(this).removeClass('act');
    }
  });

  // 数字显示
  $('.ele-list li .num').countUp({time: 1000});

  if (window.getComputedStyle) {
    new WOW().init(); // IE9+动画效果
  } // 锚点动画效果
});