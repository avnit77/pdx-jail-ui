import React from 'react'
import { IconContext } from 'react-icons'
import { FaSpinner } from 'react-icons/fa'

const LoadingSpinner = ({size}) => {
    return (
    <div className="loadingSpinnerWrapper">
        <IconContext.Provider value={{ className: 'fa-pulse', size: size }}>
            <FaSpinner />
        </IconContext.Provider>
    </div>
)
}

export default LoadingSpinner