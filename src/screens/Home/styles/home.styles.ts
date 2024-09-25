import {colors} from '@src/theme/colors';
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
    height: '25%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  containerFlashList: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: colors('white'),
    borderTopLeftRadius: 45,
  },
  containerFlashListContent: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  containerButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: '25%',
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
});
