import React from 'react';
import './Notification.css'

const Notification = ({ notification }) => {

    if (notification === '') {
        return null
    } else {
        if (notification.startsWith("A")) {
            return (
                <div className="noti">
                    {notification}
                </div>
            )
        } else {
            return (
                <div className="error">
                    {notification}
                </div>
            )
        }

    }
}

export default Notification