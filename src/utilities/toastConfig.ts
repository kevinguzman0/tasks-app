import {useToast} from 'react-native-toast-notifications';

export const useErrorToast = () => {
  const toast = useToast();

  const showErrorToast = (message: string) => {
    toast.show(message, {
      type: 'danger',
      placement: 'bottom',
      duration: 3000,
      animationType: 'slide-in',
    });
  };

  const showSuccessToast = (message: string) => {
    toast.show(message, {
      type: 'success',
      placement: 'bottom',
      duration: 3000,
      animationType: 'slide-in',
    });
  };

  return {showErrorToast, showSuccessToast};
};
