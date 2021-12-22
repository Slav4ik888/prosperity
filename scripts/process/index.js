import { prepareDate } from './prepeare-date.js';
import { prepeareUser } from './prepeare-user.js';
import { prepeareResult } from './prepeare-result.js';
import { validate } from './validate.js';


export function processData(messages) {
  let result = [];

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

  return result;
}