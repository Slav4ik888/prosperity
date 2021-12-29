import { getMessages } from './get-messages.js';
import { showResults } from './show/show-results.js';
import './switch.js';
import './store/index.js';


const url = `./data/result.json`;

await getMessages(url);

const $showBtn = document.querySelector(`.show-btn`);
$showBtn.addEventListener(`click`, showResults);

// git add . && git commit -m "add store" && git push origin master