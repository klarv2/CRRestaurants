import React, {Component} from 'react';
import data from '../data.json'

class DetailPage extends Component{
  
  render(){
       
    const posts = data[0].posts 
    let id = this.props.match.params.id

    const PostDetail = ({post}) => {
      const styles = {
        backgroundImage: `url(${post.mainImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }
      return(
        <div className="details-page">
          <div className="App-header">
            <h1 className="header-title">{post.title}</h1>
          </div>
          <div className="details-content">
            <div className="detail-title">{post.title}</div>
            <div className="detail-mainImage" style={styles}></div>
            <div className="detail-tumbnails">
              {post.images.map(i =>
              {
                return(
                  <div className="detail-tumbnail" style={{
                    backgroundImage: `url(${i.src})`, 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 60%'}}>
                  </div>
                )
                
              })}
            </div>
            <div className="detail-body">{post.body}</div>
          </div>
        </div>
      )
    }

    const PostDetails = posts.length ? (
        posts.map (post => {
          console.log(id)
            return(
              post.id == id ? (
               
                <PostDetail post={post} key={post.id}/>
               
              ) : (
                null
              )
            )
        })
    ) : (
        <div className="center"> No posts yet</div>
    )
    

    return(
        <div className="container">
            <div className="main-content">
                {PostDetails}
            </div>
        </div>
    )
}
}

export default DetailPage;