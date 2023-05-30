import React, {useContext} from 'react'

const ThemeCreated = React.createContext('light')

const Context = () => {
    const theme = useContext(ThemeCreated)
  return (
    <div>Context</div>
  )
}

export default Context
