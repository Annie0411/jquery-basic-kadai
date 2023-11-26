//P要素の色変更 
$(function(){
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });
});

//P要素のテキスト変更 
$(function(){
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });
});

//P要素をフェードアウト 
$(function(){
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
});

//P要素をフェードイン
$(function(){
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});
