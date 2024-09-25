import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import ButtonSheetModal from '@src/components/Modals/ButtonSheetModal';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import TextInputCustom from '@src/components/TextInputCustom';
import {useTasks} from '@src/hooks/useTask.hook';
import {useModal} from '../context/ModalContext';
import {styles} from '../styles/createModal.styles';
import {useErrorToast} from '@src/utilities/toastConfig';

export default function CreateTaskModal() {
  const {showErrorToast, showSuccessToast} = useErrorToast();
  const {bottomSheetModalRef} = useModal();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const {createTask, isCreateTaskLoading} = useTasks();

  const handleCreateTask = async () => {
    try {
      await createTask({title, description}).unwrap();
      setTitle('');
      setDescription('');
      bottomSheetModalRef.current?.dismiss();
      showSuccessToast('Task created successfully');
    } catch (errorResponse) {
      const {error} = errorResponse as {error: {msg: string}};
      showErrorToast(error.msg);
    }
  };

  return (
    <ButtonSheetModal>
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Create New Task</Text>
        </View>

        <View style={styles.padding}>
          <TextInputCustom
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInputCustom
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
            {isCreateTaskLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.textButton}>Create Task</Text>
            )}
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </ButtonSheetModal>
  );
}
