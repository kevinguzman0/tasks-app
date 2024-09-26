import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import ButtonSheetModal from '@src/components/Modals/ButtonSheetModal';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import TextInputCustom from '@src/components/TextInputCustom';
import {useTasks} from '@src/hooks/useTask.hook';
import {useModal} from '../context/ModalContext';
import {styles} from '../styles/createModal.styles';
import {useErrorToast} from '@src/utilities/toastConfig';
import {useHandleError} from '@src/utilities/errorHandle';
import {useTaskForm} from '@src/hooks/useTaskForm';

export default function CreateUpdateTaskModal() {
  const showError = useHandleError();
  const {showSuccessToast} = useErrorToast();
  const {bottomSheetModalRef, edit, editTask} = useModal();
  const {createTask, isCreateTaskLoading, updateTask} = useTasks();

  const {title, setTitle, description, setDescription, initializeForm} =
    useTaskForm(edit, editTask);

  useEffect(() => {
    initializeForm();
  }, [initializeForm]);

  const handleTask = useCallback(async () => {
    try {
      if (edit) {
        await updateTask({
          id: editTask!._id,
          body: {title, description},
        });
        showSuccessToast('Task updated successfully');
      } else {
        await createTask({title, description});
        showSuccessToast('Task created successfully');
      }
      bottomSheetModalRef.current?.dismiss();
    } catch (errorResponse) {
      const {error} = errorResponse as {error: {msg: string}};
      showError(error.msg);
    }
  }, [
    edit,
    editTask,
    title,
    description,
    createTask,
    updateTask,
    showSuccessToast,
    showError,
    bottomSheetModalRef,
  ]);

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
