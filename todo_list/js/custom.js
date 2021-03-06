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
		number: items.length + 1,
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
    			<div class="number">${item.number}</div>
    			<input type="checkbox" class="list-item_input" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
    			<label for="item${i}" class="list-item_label">${item.text}</label>
    			<span class="list-item_close-button">x</span>
			</>
    	`;
	}).join('');
    console.log(items);
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
        closeButton.parentNode.parentNode.removeChild(closeButton.parentNode);
        items.splice(index,1);
        for(var i = 0; i < items.length; i++) {
            items[i].number = i + 1;
		}
        populateList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
	}
}

var linkSortByNumber = document.querySelector('.task_number a');
var linkSortByName = document.querySelector('.task_name a');


var lastSortedByName = false;
var lastSortedByNumber = false;


function sortByNumber() {
    lastSortedByName = false;

    linkSortByName.parentNode.classList.remove('arrow-down');
    linkSortByName.parentNode.classList.remove('arrow-up');

    function compareByNumber(a, b) {
        return a.number - b.number;
    }

	if ( !(lastSortedByNumber) ) {
        items.sort(compareByNumber);
        populateList(items, itemsList);
        lastSortedByNumber = true;
        linkSortByNumber.parentNode.classList.add('arrow-down');
        linkSortByNumber.parentNode.classList.remove('arrow-up');
        lastSortedByNumber = true;
        localStorage.setItem('items', JSON.stringify(items));
	} else if (lastSortedByNumber)  {
        items.reverse();
        populateList(items, itemsList);
        lastSortedByNumber = false;
        linkSortByNumber.parentNode.classList.remove('arrow-down');
        linkSortByNumber.parentNode.classList.add('arrow-up');
        localStorage.setItem('items', JSON.stringify(items));
	}
}

function sortByName() {
    lastSortedByNumber = false;

    linkSortByNumber.parentNode.classList.remove('arrow-down');
    linkSortByNumber.parentNode.classList.remove('arrow-up');

    function compareName(a, b) {
        return a.text - b.text;
    }
	if (!lastSortedByName) {
        items.sort(function (a, b) {
            if (a.text > b.text) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a должно быть равным b

        });
        populateList(items, itemsList);
        console.log(items);
        lastSortedByName = true;
        linkSortByName.parentNode.classList.add('arrow-down');
        linkSortByName.parentNode.classList.remove('arrow-up');
        localStorage.setItem('items', JSON.stringify(items));
	} else {
        items.reverse();
        populateList(items, itemsList);
        lastSortedByName = false;
        linkSortByName.parentNode.classList.remove('arrow-down');
        linkSortByName.parentNode.classList.add('arrow-up');
        localStorage.setItem('items', JSON.stringify(items));

	}
}
linkSortByNumber.addEventListener('click', sortByNumber);
linkSortByName.addEventListener('click', sortByName);

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

