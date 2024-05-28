import data from './data.json' with{ type: 'json' };

console.log(data);

const filterTabs = document.querySelectorAll('.filter');

for(let i = 0; i < filterTabs.length; i++) {
	filterTabs[i].addEventListener('click', (e) => {
		console.log('HIT', e.target);
	});
}
