import { prepareDate } from './prepeare-date.js';
import { prepeareUser } from './prepeare-user.js';
import { prepeareResult } from './prepeare-result.js';
import { validate } from './validate.js';
import { store, ActionType } from '../store/index.js';

export function processData() {
  let result = [];

  const messages = store.getState().messages;

  messages.forEach(m => {
    const valid = validate(m);

    if (valid) {
      const item = {
        date       : prepareDate(m.date),
        user       : prepeareUser(m.from_id),
        result     : prepeareResult(m.text),

        fromId     : m.from_id,
        from       : m.from,
        originText : m.text, // Оригинальное сообщение
      };

      result.push(item);
    }
    else {
      console.log(`Invalid message: `, m);
    }
  })

  store.dispatch({ type: ActionType.SET_RESULT, payload: result });
}