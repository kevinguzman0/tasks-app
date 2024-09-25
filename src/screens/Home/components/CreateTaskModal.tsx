import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ButtonSheetModal from '@src/components/Modals/ButtonSheetModal';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import {colors} from '@src/theme/colors';
import TextInputCustom from '@src/components/TextInputCustom';

export default function CreateTaskModal() {
  return (
    <ButtonSheetModal>
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Create New Task</Text>
        </View>

        <View style={styles.padding}>
          <TextInputCustom placeholder="Title" />
          <TextInputCustom placeholder="Description" />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.textButton}>Create Task</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </ButtonSheetModal>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: colors('white'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
  },
  containerTitle: {
    backgroundColor: colors('purple'),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    paddingLeft: 20,
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
    paddingTop: 100,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
