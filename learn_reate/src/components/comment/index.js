import React from 'react'
import CommentList from './commentList'
import CommentInput from './commentInput'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: ['123']
    }
    this.addComment = this.addComment.bind(this)
    this.delComment = this.delComment.bind(this)
  }
  addComment(value) {
    this.setState({
      commentList: [...this.state.commentList, value]
    })
  }
  delComment(idx) {
    this.state.commentList.splice(idx, 1)
    this.setState({
      commentList: this.state.commentList
    })
  }
  render() {
    return (
      <div>
        <CommentList
          commentList={ this.state.commentList }
          onDelComment={ this.delComment }
        />
        <CommentInput
          commentLength={ this.state.commentList.length }
          onAddComment={ this.addComment }
        />
      </div>
    )
  }
}

export default Comment