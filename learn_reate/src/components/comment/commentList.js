import React from 'react'

class commentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: props.commentList || []
    }
  }
  delComment(idx) {
    this.props.onDelComment(idx)
  }
  render() {
    return (
      <div>
        <div>评论列表</div>
        <ul>
          {
            this.props.commentList.map((item, index) => {
              return (
                <li key={ index }>
                  { item }
                  <span
                    style={{
                      cursor: 'pointer',
                      padding: '0 0 0 20px'
                    }}
                    onClick={ () => { this.delComment(index) } }
                  >删除</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default commentList
