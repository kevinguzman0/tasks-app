import {useErrorToast} from './toastConfig';

export const useHandleError = () => {
  const {showErrorToast} = useErrorToast();

  const handleErrorManaqer = (msg: string) => {
    showErrorToast(msg);
  };

  return handleErrorManaqer;
};
