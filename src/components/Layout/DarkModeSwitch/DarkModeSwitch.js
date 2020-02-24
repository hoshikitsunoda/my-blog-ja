// @flow strict
import React from 'react'
import Switch from 'react-switch'
import useDarkMode from 'use-dark-mode'
import styles from './DarkModeSwitch.module.scss'

const DarkModeSwitch = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className={styles.darkmodeWrapper}>
      <Switch
        className={styles.darkmodeSwitch}
        onChange={darkMode.toggle}
        checked={darkMode.value}
        onColor={'#888888'}
        offColor={'#140e1b'}
      />
    </div>
  )
}

export default DarkModeSwitch
