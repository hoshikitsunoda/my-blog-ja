// @flow strict
import React, { useState } from 'react'
import Switch from 'react-switch'
import useDarkMode from 'use-dark-mode'
import styles from './DarkModeSwitch.module.scss'

const DarkModeSwitch = () => {
  const darkMode = useDarkMode(false)
  const [isToggled, setToggled] = useState(true)
  const toggleTrueFalse = () => {
    setToggled(!isToggled)
    return isToggled ? darkMode.enable() : darkMode.disable()
  }

  return (
    <div className={styles.darkmodeWrapper}>
      <Switch
        className={styles.darkmodeSwitch}
        onChange={toggleTrueFalse}
        checked={!isToggled}
      />
    </div>
  )
}

export default DarkModeSwitch
