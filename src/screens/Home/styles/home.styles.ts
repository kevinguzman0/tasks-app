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
    elevation: 10,
  },
  containerPurpleBox: {
    backgroundColor: colors('purple'),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: hp(24),
    justifyContent: 'center',
    paddingLeft: 20,
  },
  containerFlashList: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    height: hp(62),
    backgroundColor: colors('white'),
    borderTopLeftRadius: 45,
    paddingTop: hp(4),
  },
  containerFlashListContent: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  containerButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: hp(20),
    backgroundColor: colors('white'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors('white'),
  },
  textSubtitle: {
    fontSize: 22,
    padding: 25,
    fontWeight: 'bold',
    color: colors('purple'),
  },
  textDate: {
    color: colors('darkGrey'),
    fontStyle: 'italic',
    paddingLeft: 4,
  },
  containerTextEmpty: {
    marginTop: 20,
  },
  textEmpty: {
    fontSize: 18,
    color: colors('darkGrey'),
    textAlign: 'center',
  },
});
