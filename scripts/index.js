import { getMessages } from './get-messages.js';
import { showResults } from './show/show-results.js';
import { processData } from './process/index.js';

const sort = true;
// const sort = false;

const url = `./data/result.json`;
let messages = []; // Storage


await getMessages(messages, url);

const result = processData(messages);
showResults(result, sort);