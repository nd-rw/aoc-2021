import { input } from '../data/day1';

type threeMeasurementArray = readonly [number, number, number];

export const dayOne = () => {
  const splitInput = splitInputData(input);
  const numProceedingIncreases = getNumProceedingIncreases(splitInput);
  convertToThreeMeasurementArray(splitInput);
  // TODO continuing part 2 of day 1
  // for each run getThreeMeasurementSum(), then compare to prior :)
  return numProceedingIncreases;
}

const splitInputData = (stringData: string) => {
  return stringData.split(/\r?\n/);
}

const getNumProceedingIncreases = (values: readonly string[]) => {
  return values.filter((element, index) =>  
    !index || (values[index - 1] < element)
  ).length

}

const getThreeMeasurementSum = (inputArray: threeMeasurementArray) => {
  return inputArray.reduce((a, b) => a + b)
}

const convertToThreeMeasurementArray = (inputData:readonly string[]) => {
  return inputData.map((element, index) => {
    if (index >= 3) {
      if (index % 3 === 0) {
        return [inputData[index -2], inputData[index - 1], element]
      } else {
        return;
      }
    } else {
      return;
    }
  })
}

