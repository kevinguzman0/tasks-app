import {colors} from '@src/theme/colors';
import {hp} from '@src/utilities/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: colors('white'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  containerTitle: {
    backgroundColor: colors('purple'),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: hp(15),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    paddingLeft: 20,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors('white'),
  },
  containerButton: {
    position: 'absolute',
    bottom: 40,
    left: 35,
    right: 35,
  },
  button: {
    backgroundColor: colors('blue'),
    paddingVertical: 18,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: colors('white'),
    fontSize: 24,
    fontWeight: 'bold',
  },
  padding: {
    paddingTop: 90,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
