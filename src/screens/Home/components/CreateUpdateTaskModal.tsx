import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import ButtonSheetModal from '@src/components/Modals/ButtonSheetModal';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import TextInputCustom from '@src/components/TextInputCustom';
import {useTasks} from '@src/hooks/useTask.hook';
import {useModal} from '../context/ModalContext';
import {styles} from '../styles/createModal.styles';
import {useErrorToast} from '@src/utilities/toastConfig';
import {useHandleError} from '@src/utilities/errorHandle';

export default function CreateUpdateTaskModal() {
  const showError = useHandleError();
  const {showSuccessToast} = useErrorToast();
  const {bottomSheetModalRef, edit, editTask} = useModal();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const {createTask, isCreateTaskLoading, updateTask} = useTasks();

  useEffect(() => {
    initializeForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  const initializeForm = () => {
    if (edit) {
      setTitle(editTask!.title);
      setDescription(editTask!.description);
    } else {
      setTitle('');
      setDescription('');
    }
  };

  const handleTask = async () => {
    if (!title) {
      showError('Title is required!');
      return;
    }
    if (edit) {
      handleUpdateTask();
    } else {
      handleCreateTask();
    }
  };

  const handleUpdateTask = async () => {
    try {
      await updateTask({
        id: editTask!._id,
        body: {title, description},
      }).unwrap();
      cleanModal('Task updated successfully');
    } catch (errorResponse) {
      const {error} = errorResponse as {error: {msg: string}};
      showError(error.msg);
    }
  };

  const handleCreateTask = async () => {
    try {
      await createTask({title, description}).unwrap();
      cleanModal('Task created successfully');
    } catch (errorResponse) {
      const {error} = errorResponse as {error: {msg: string}};
      showError(error.msg);
    }
  };

  const cleanModal = (message: string) => {
    setTitle('');
    setDescription('');
    bottomSheetModalRef.current?.dismiss();
    showSuccessToast(message);
  };

  return (
    <ButtonSheetModal>
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            {edit ? 'Modify your Task' : 'Create New Task'}
          </Text>
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
          <TouchableOpacity style={styles.button} onPress={handleTask}>
            {isCreateTaskLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.textButton}>Save</Text>
            )}
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </ButtonSheetModal>
  );
}
