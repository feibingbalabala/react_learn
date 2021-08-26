import React from 'react'

import ThemeContext from './context'

class bar extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {}
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (theme) => {
            return (
              <div
                style={{
                  backgroundColor: theme.bgColor,
                  color: theme.color
                }}
              >
                <div className={ theme.calssNames }>样式</div>
              </div>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default bar
