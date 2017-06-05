$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});
/* viewport width */
function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */



const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.list');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
	e.preventDefault();
	var inputInfoText = (this.querySelector('[name=item]')).value;
	const item = {
		text: inputInfoText,
		done: false
	};
	items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

function populateList(items = [], itemList) {
    itemList.innerHTML = items.map((item, i) => {
    	return `
    		<li class="list-item">
    			<input type="checkbox" class="list-item_input" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
    			<label for="item${i}" class="list-item_label">${item.text}</label>
    			<span class="list-item_close-button">x</span>
			</li>
    	`;
	}).join('');
}

function deleteItem() {

}

function toggleDone(e) {
	if(e.target.matches('input')) {
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
	}
	else if(e.target.matches('span')) {

		const closeButton = e.target;
		const index = closeButton.previousElementSibling.previousElementSibling.dataset.index;
        console.log(closeButton.parentNode.parentNode);
        console.log(closeButton.parentNode);
        closeButton.parentNode.parentNode.removeChild(closeButton.parentNode);
        items.splice(index,1);
        localStorage.setItem('items', JSON.stringify(items));
	}

}





populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);


