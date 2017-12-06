function paragraphSelector() {

    return $('p')
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('div.pics')
}

function firstListItem() {
  console.log($('ul#pic-list:first-child'))
  return $('div.pics ul#pic-list:first-child')
}
