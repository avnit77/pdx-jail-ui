import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

import withConfig from '../wrappers/withConfig'

const Toast = withConfig(({config}) => {
    const { DISPLAY_TOASTS } = config
    const displayToasts = !!DISPLAY_TOASTS
    if (!displayToasts) {
        return null
    } else {
        return <ToastContainer />
    }
})

const ToastLogic = ({ level, message}) => {
    const toastConfig = {
        className: 'toast',
    }
    switch (level) {
        case 'success':
            toast.success(message, toastConfig)
            console.log(`%c${message}`, 'color: green;')
            break;
        case 'error':
            toast.error(message, toastConfig)
            console.log(`%c${message}`, 'color: red;')
            break;
        case 'info':
            toast.info(message, toastConfig)
            console.log(`%c${message}`, 'color: blue;')
            break;
        default:
            toast.info(message, toastConfig)
            console.log(`%c${message}`, 'color: blue;')
    }
}

export default ToastLogic

export { ToastLogic , Toast }
