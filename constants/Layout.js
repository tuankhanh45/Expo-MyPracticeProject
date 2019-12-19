import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  isSmallDevice: width < 375,
  ScreenWidth: width,
  ScreenHeight: height,
  StatusBarHeight: 50,
  StatusBarWidth: width,
  MenuWidth: width / 5 * 4,
};
