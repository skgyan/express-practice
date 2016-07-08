$(function(){
  $.get('/blocks', appendToList);
  function appendToList(data) {
    var list = [];
    for(var i in data){
      list.push($('<li>', {text: data[i]}));
    }
    $('.block-list').append(list);
  }
})
