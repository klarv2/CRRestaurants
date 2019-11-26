import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
    state = {
       posts: [] 
    }
    componentDidMount(){
        fetch('../data.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            }).catch(function (error) {
                console.log(error);
        });
       //   axios.get('https://jsonplaceholder.typicode.com/posts')
           // .then(res => {
            //    this.setState({
            //        posts: res.data.slice(0,10)
              //  })
         //   })
    }
    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map (post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> No posts yet</div>
        )
        return(
            <div className="container">
                <header className="App-header">
                    <h1 className="header-title">Travel Agency</h1>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed mauris sit amet massa aliquet ornare ac sit amet est. </h6>        
                </header>
            
                <div className="main-content">
                    {postList}
                </div>
            </div>
        )
    }
}

export default Home