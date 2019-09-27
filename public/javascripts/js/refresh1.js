$(".refreBox").pullToRefresh(function() {
    setTimeout(function() {
      /* $("#time").text(new Date); */
      $(".refreBox").pullToRefreshDone();
    }, 1000);
  });
  $("#trigger").click(function () {
    $(".refreBox").pullToRefresh('triggerPullToRefresh')
  })