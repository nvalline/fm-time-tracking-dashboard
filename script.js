import data from './data.json' with{ type: 'json' };

console.log(data);

// ----- Data Handling -----

const panelList = document.getElementById('panelList')

const setPanel = (timeframe) => {
	
	data.forEach(category => {
		// console.log('TITLE', category.title)
		// console.log('TIMEFRAME', category.timeframes)
		const li = document.createElement('li')
	
		li.innerHTML = `
				<li id="work" class="card">
					<img
						src="./images/icon-work.svg"
						alt=""
						height="78"
						width="78"
						class="icon"
					/>
					<div class="content">
						<div class="category">
							<h2>Work</h2>
							<img src="./images/icon-ellipsis.svg" alt="" />
						</div>
						<div id="workData" class="data">
							<h3><span>32</span>hrs</h3>
							<p>Last Week - <span>36</span>hrs</p>
						</div>
					</div>
				</li>
			`;

		panelList.appendChild(li);
	})

}

// ----- Tabbed Interface -----

const tablist = document.querySelector('.tablist')
const tabs = document.querySelectorAll('.tab');

// The tab switching function
const switchTab = (oldTab, newTab) => {
	newTab.focus()
	// Make the active tab focusable by the user (Tab key)
	newTab.removeAttribute('tabindex')
	// Set the selected state
	newTab.setAttribute('aria-selected', 'true')
	oldTab.removeAttribute('aria-selected')
	oldTab.setAttribute('tabindex', '-1')
	// Get the timeframe of the new and old tabs to find the correct tab panels to show and hide
	let timeframe = newTab.getAttribute('id')
	
	setPanel(timeframe)
}

// Add semantics to remove user focusability for each tab
Array.prototype.forEach.call(tabs, (tab, i) => {
	tab.setAttribute('tabindex', '-1')

	// Handle mouse user clicks
	tab.addEventListener('click', (e) => {
		e.preventDefault()
		let currentTab = tablist.querySelector('[aria-selected]')

		if(e.currentTarget !== currentTab) {
			switchTab(currentTab, e.currentTarget)
		}
	})
})

// Initially activate the first tab and reveal the first tab panel
tabs[1].removeAttribute('tabindex');
tabs[1].setAttribute('aria-selected', 'true');
setPanel(tabs[1].id);