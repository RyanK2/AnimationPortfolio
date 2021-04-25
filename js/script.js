//var text = $('.text').html();
var words = $('.single19.text').html().split(" "); 
$('.text').text('');

$.each(words, function(index, value){
  $('.reveal-text').append('<span><span class="l-word reveal">' + value + '&nbsp;</span></span>');
});

$('.container').on('click', function(){
  $('.l-word').each(function(i){
    setTimeout(function(){
      $('.l-word').eq(i).toggleClass('reveal');
    }, i*100);
  });
});
