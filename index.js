'use strict';
function shoppingList() {
  checkItem();
  removeItem();
  addItem();

}

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle',function(e) {
  // Will this code work as well?
  //  $(e.target).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function removeItem(){
  $('.shopping-list').on('click', '.shopping-item-delete',function(e) {
    $(this).closest('li').remove();
  });
}

function addItem(){
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    $('.shopping-list').append(`<li>
      <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
  });
}

$(shoppingList());

