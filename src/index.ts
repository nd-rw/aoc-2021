export * from './lib/async';
export * from './lib/number';
import { dayOne} from './aoc/day1';

type resultTypes = any;
type resultDict = { readonly [key: number]: resultTypes };

const daysCompleted = 1;

const getResult = (dayNum:number) => {
  const { partOne, partTwo } = dayOne();
  const results: resultDict = { 1: [partOne, partTwo]}
  return results[dayNum];
}

const getDaysArray = (daysCompleted:number) => {
  return Array.from({ length: daysCompleted }, (_, i) => i + 1)
}

const printResultSummary = (daysCompleted: number) => {
  getDaysArray(daysCompleted).forEach(day => {
    const dayResult = getResult(day);
    console.log(`day ${day}: ${dayResult}`);
  })
}

printResultSummary(daysCompleted);

