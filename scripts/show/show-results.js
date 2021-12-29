import { processData } from '../process/index.js';
import { onShow } from './on-show.js';


export const showResults = () => {
  processData();
  onShow();
};