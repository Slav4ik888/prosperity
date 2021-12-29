import { getData } from './get-data.js';
import { store, ActionType } from './store/index.js';


export const getMessages = async (url) => {
  const data = await getData(url)
  let messages = [];

  data?.messages.forEach(m => messages.push(m))
  console.log(`messages: `, messages);

  store.dispatch({ type: ActionType.SET_MESSAGES, payload: messages });
}