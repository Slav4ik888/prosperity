import { getData } from './get-data.js';


export const getMessages = async (messages, url) => {
  const data = await getData(url)
   
  data?.messages.forEach(m => messages.push(m))
  console.log(`messages: `, messages);
}