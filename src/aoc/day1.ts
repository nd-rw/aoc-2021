import { input } from '../data/day1';

type threeValueMeasurement = readonly number[];

export const dayOne = () => {
  const splitInput = splitInputData(input);
  const numProceedingIncreases = getNumProceedingIncreases(splitInput);
  const threeMeasurementArray = convertToThreeMeasurementArray(splitInput);
  const numProceedingThreeMeasurementIncreases = getNumProceedingThreeMeasurementIncreases(threeMeasurementArray)
  // TODO continuing part 2 of day 1
  // for each run getThreeMeasurementSum(), then compare to prior :)
  return {
    'partOne': numProceedingIncreases, 'partTwo': numProceedingThreeMeasurementIncreases}
}

const splitInputData = (stringData: string) => {
  return stringData.split(/\r?\n/);
}

const getNumProceedingIncreases = (values: readonly string[]) => {
  return values.filter((element, index) =>  
    !index || (values[index - 1] < element)
  ).length

}

const convertToThreeMeasurementArray = (inputData: readonly string[]) => {
  const threeMeasurementArray = inputData.map((element, index) => {
    if (index >= 3) {
      if (index % 3 === 0) {
        return [Number(inputData[index -2]), Number(inputData[index - 1]), Number(element)]
      } else {
        return null
      }
    } else {
      return null;
    }
  })

  if (threeMeasurementArray.every(element => element === null)) {
    return null;
  } else {
    return threeMeasurementArray;
  }
  
};

const getThreeMeasurementSum = (input: threeValueMeasurement | null) => {
  return input === null ? 0 : input.reduce((a, b) => a + b)
}

const getNumProceedingThreeMeasurementIncreases = (inputArray: readonly (readonly number[] | null)[] | readonly threeValueMeasurement[] | null) => {
  if (inputArray === null || inputArray.every(element => element === null)) {
    return 0;
  } else {
    if (inputArray.length > 0) {
      return inputArray.filter((element: any, index: number) =>
      !index || (getThreeMeasurementSum(inputArray[index - 1]) < getThreeMeasurementSum(element))
    ).length
    } else {
      return 0;
    }
  }
}

