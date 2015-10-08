var $exes = $('.glyphicon-remove')
var $star = $('.glyphicon-star')
var $checkboxes = $('.checkboxes')
var $span = $('span')
var $paras = $('p')
var text = $('#todo')

$exes.click(function(){
  $(this).parent().remove();
  console.log('this is working');
})

$star.click(function(){
  $(this).toggleClass('active');
})

$checkboxes.click(function(){
  $(this).next().next().toggleClass('strikethrough');
  console.log('this is working');
})

$('.btn').click(function(){
  $('.list').last().append('<p><input type="checkbox" class="checkboxes"><i class="glyphicon glyphicon-star"></i><span>'+ text.val() +'</span><i class="glyphicon glyphicon-remove"></i></p>');
  event.preventDefault();
})
