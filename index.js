'use strict';
function shoppingList() {

}

function getUserInput() {
  
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    let input = $('#shopping-list-entry').val();
  });
}

function checkItem() {
  console.log("called function");
  $('.shopping-list').on('click', '.shopping-item-toggle',function(e) {
  //  $(e.target).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

checkItem();

