import { IToastOptions } from './external-interfaces'

export const toastStyles: {
    success: IToastOptions
} = {
    success: {
        type: 'success',
        theme: 'colored',
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
}