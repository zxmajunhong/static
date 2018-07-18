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

  $(".area2 .slide").slide({mainCell:".bd ul",autoPlay:true,effect: 'fold',interTime: 3500});
});