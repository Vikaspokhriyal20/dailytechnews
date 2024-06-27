import React, { useState } from 'react'

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    }

    const checkIsOn = isOn ? <i class="bi bi-cloud-sun"></i>  : <i class="bi bi-cloud-moon"></i>;
    const toggleBgColor = { backgroundColor: isOn ? 'yellow' : 'black' };


    return (
        <div className='toggle-switch' onClick={handleToggle}  style={toggleBgColor} >
            <div className={`switch ${checkIsOn}`}>
                <span className='switch-state'>{checkIsOn}</span>
            </div>

        </div>
    )
}

export default ToggleSwitch
