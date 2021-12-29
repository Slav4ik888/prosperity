import { ActionType, store } from './store/index.js';


const $switchEdit   = document.querySelector(`.switch-edit`);
const $switchResult = document.querySelector(`.switch-result`);
$switchEdit.checked = true;


const toggleSwitch = () => store.dispatch({ type: ActionType.TOGGLE_EDIT });


$switchEdit.addEventListener(`change`, toggleSwitch);
$switchResult.addEventListener(`change`, toggleSwitch);