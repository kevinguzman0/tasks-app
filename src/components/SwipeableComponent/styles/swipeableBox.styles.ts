import {colors} from '@src/theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    backgroundColor: colors('purple'),
    marginVertical: 5,
  },
  containerContent: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors('purple'),
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'capitalize',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    fontStyle: 'italic',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    fontStyle: 'italic',
    textTransform: 'capitalize',
  },
});
