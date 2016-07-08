$(function(){
  $.get('/comments', appendToCommentList);

  function appendToCommentList(data) {
    var list = [];
    for(var i in data){
      list.push($('<li>', {text: data[i].author}));
    }
    $('.block-list').append(list);
  }
})
