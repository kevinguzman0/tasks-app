import {Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

type PercentageInput = number;

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const wp = (width: PercentageInput) => widthPercentageToDP(width);
export const hp = (height: PercentageInput) => heightPercentageToDP(height);
