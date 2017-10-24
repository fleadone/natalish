$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });
  $('.flex-control-nav li a').text('');
  $('.photos>div').click(function() {
    var name = $(this).find('.image').attr('alt');
    $('.show-fon').show('fast');
    $('html, body').css('overflow', 'hidden');
    $('.show-fon').append('<img src="photos/'+name+'-pr.jpg" class="image-lg">');
    console.log(name);
  });
  $('.show-fon').on('click', function() {
    $('.image-lg').remove();
    $(this).hide();
    $('html, body').css('overflow', 'auto');
  });
  $('.hover-bg').append('<i class="fa fa-plus center-block" aria-hidden="true"></i>');
  $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  $('.logo-footer').on('click', function(event) {
    event.preventDefault();
    var el = $(this).attr('href');
    $('body,html').animate({scrollTop: $(el).offset().top}, 1000);
  });
  $('.nav-click').on('click', 'a', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1500);
  });
  var waypoint1 = new Waypoint({
    element: $('#home'),
    handler: function() {
      $('.nav-click>ul>li>a').css('background-image', 'url(img/nav-click.png)');
      $('.nav-click>ul>li:nth-child(1)>a').css('background-image', 'url(img/nav-click-active.png)');
    },
    offset:-20
  });
  var waypoint2 = new Waypoint({
    element: $('#about'),
    handler: function() {
      $('.nav-click>ul>li>a').css('background-image', 'url(img/nav-click.png)');
      $('.nav-click>ul>li:nth-child(2)>a').css('background-image', 'url(img/nav-click-active.png)');
    }
  });
  var waypoint3 = new Waypoint({
    element: $('#works'),
    handler: function() {
      $('.nav-click>ul>li>a').css('background-image', 'url(img/nav-click.png)');
      $('.nav-click>ul>li:nth-child(3)>a').css('background-image', 'url(img/nav-click-active.png)');
    }
  });
  var waypoint4 = new Waypoint({
    element: $('#contact'),
    handler: function() {
      $('.nav-click>ul>li>a').css('background-image', 'url(img/nav-click.png)');
      $('.nav-click>ul>li:nth-child(4)>a').css('background-image', 'url(img/nav-click-active.png)');
    },
    offset:100
  });
});
