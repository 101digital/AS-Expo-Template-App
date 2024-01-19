import { DimensionValue } from 'react-native';
declare const screenWidth: number;
declare const screenHeight: number;
declare const convertPercentageToPx: (percentage: number | string | DimensionValue | undefined, isWidth: boolean) => number | undefined;
export { screenWidth, screenHeight, convertPercentageToPx };
