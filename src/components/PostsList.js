import React, { Component } from 'react';
import axios from 'axios';

class PostsList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMessage: ''
      }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts1')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => this.setState({errorMessage: 'Error retrieving data'}))
    }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        Posts list
        {
            posts.length ? posts.map(post =>
                <div key={post.id}>{post.title}</div>
            ) : null
        }
        {
            errorMessage ? <div>{errorMessage}</div> : null
        }
      </div>
    )
  }
}

export default PostsList
