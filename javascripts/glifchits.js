$(function(){
  // smooth scroll
  // sectionHeightOffset = 0.5 * pictureHeight + padding(17px)
  var sectionHeightOffset = ($('div.picture')[0].clientHeight / 2) + 17;
  $('a[href*=#]').click(function() {
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top - sectionHeightOffset
    }, 300);
    return false;
  });
});
