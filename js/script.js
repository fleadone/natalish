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
    $('.show-fon>div').append('<img src="photos/'+name+'-pr.jpg" class="image-lg">');
    console.log(name);
  });
  $('.close-photo').on('click', function() {
    $('.image-lg').remove();
    $('.show-fon').hide();
    $('html, body').css('overflow', 'auto');
  });
  $('.photos>div').append('<div class="hover-bg"> <div><div></div><div></div></div> </div>');
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
  $('.about-me-background>section>a').on('click', function (event) {
    event.preventDefault();
    $('.click-text').slideToggle();
  });
  $('footer>a').on('click', function(event) {
    event.preventDefault();
    $('.show-form').show();
  });
  $('.close-form').on('click', function(event) {
    event.preventDefault();
    $('.show-form').hide();
  });
  $('.btn').on('click', function (event) {
    event.preventDefault();
    $.ajax({
            url: "https://formspree.io/ishdesign.ln@gmail.com",
            method: "POST",
            data: {
                name: $('.user-name').val(),
                email: $('.user-email').val(),
                number: $('.user-phone').val(),
                text: $('.user-commit').val()
            },
            dataType: "json"}).done(function(e){
                // $('#message').css('display','block');
                // $('#form').css('display','none');
                $('.show-form').hide();
                e.preventDefault();
            });
  })
});
