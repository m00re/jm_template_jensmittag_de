jQuery(document).ready(function () {
  jQuery("#hamburger").click(function () {
    var leftValue = jQuery("#menu").css('left');
    if (leftValue == "-202px") {
      jQuery("#menu").css('left', 0);
      jQuery(".main").css('margin-left', '200px');
    } else {
      jQuery("#menu").css('left', '-202px');
      jQuery(".main").css('margin-left', '0');
    }
  });
});