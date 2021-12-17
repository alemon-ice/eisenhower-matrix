import { useRef } from "react";

import { IToastOptions } from 'shared/utils/external-interfaces'
import { toastify } from 'shared/utils/external-libs'
import { ToastBody } from 'shared/components/atoms'

const useToast = () => {
  const toastId = useRef(null);
  const isRepeatToast = useRef(false);
  const isDismissOnClick = useRef(false);
  const isDismissOnRepeat = useRef(false);

  return {
    showToast: ({
      text,
      buttonText,
      onClick,
      options,
      onClose
    }: {
      text: string
      buttonText: string
      onClick(): void
      options: IToastOptions
      onClose(): void
    }) => {
      if (isRepeatToast.current) {
        isDismissOnRepeat.current = true;
        toastify.toast.dismiss(toastId.current);
      } else {
        isRepeatToast.current = true;
      }
      toastId.current = toastify.toast(
        <ToastBody
          text={text}
          buttonText={buttonText}
          onClick={() => {
            isDismissOnClick.current = true;
            toastify.toast.dismiss(toastId.current);
            onClick();
          }}
        />,
        {
          ...options,
          onClose: () => {
            if (isDismissOnRepeat.current) {
              isDismissOnRepeat.current = false;
            } else if (isDismissOnClick.current) {
              isRepeatToast.current = false;
              isDismissOnClick.current = false;
            } else {
              isRepeatToast.current = false;
              onClose();
            }
          },
        }
      );
    },
  };
};

export default useToast;