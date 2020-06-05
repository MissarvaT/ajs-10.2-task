/* eslint-disable no-inner-declarations */
/* eslint-disable consistent-return */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        function getSaving(data) {
          return JSON.parse(data);
        }

        const response = await read();
        const data = await json(response);
        const saving = await getSaving(data);
        return saving;
      } catch (err) {
        return `Error: ${(err)}`;
      }
    })();
  }
}
