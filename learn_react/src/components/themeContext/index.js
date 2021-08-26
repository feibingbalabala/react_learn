import React from 'react'
import ThemeContext from './context'
import Bar from './bar'
const theme = {
  light: {
    calssNames: 'btn light',
    bgColor: '#eee',
    color: '#000'
  },
  dark: {
    calssNames: 'btn dark',
    bgColor: '#222',
    color: '#fff'
  }
}

class themeContext extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
  }
  changeTheme(theme) {
    this.setState({
      theme: theme
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={theme[this.state.theme]}>
        <div>
          <div onClick={ () => { this.changeTheme('dark') } }>深色主题</div>
          <div onClick={ () => { this.changeTheme('light') } }>浅色主题</div>
          <Bar />
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default themeContext
