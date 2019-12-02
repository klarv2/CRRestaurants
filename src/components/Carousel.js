import React, {Component} from 'react'
import { FaLink, FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'

// class component

class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: props.data.posts,
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
          return;
        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth(),
        }))
    }

    goToNextSlide = () => {

        if(this.state.currentIndex === this.state.posts.length - 1) {
          return this.setState({
            currentIndex: 0,
            translateValue: 0
        })
    }
        
        // This will not run if we met the if condition above
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
     }
      

    render(){
        const Slide = ({ image }) => {
            const styles = {
              backgroundImage: `url(${image.mainImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 60%'
            }
            return(
                    <div className="slide">
                        <Link to={'/' + image.id}>
                            <div className="slide-img" style={styles}>
                                <div className="overlay">
                                    <div className="link-icon"><FaLink/></div>
                                </div>
                                
                            </div>
                            <div className="slide-body">
                                <div className="title"><h3>{image.title}</h3></div> 
                                <div className="description"><p>{image.description}</p></div>
                            </div>
                        </Link> 
                    </div>
                    
                    )
                    
          }
          
          
        const LeftArrow = (props) => {
        return (
            <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <FaAngleLeft/>
            </div>
        );
        }
        
        
        const RightArrow = (props) => {
        return (
            <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <FaAngleRight/>
            </div>
        );
        }

        const Indicator = ({id}) => {
            return (
            (this.state.currentIndex+1) === id ?
                (<div className="indicator active"><FaCircle/></div>):
                ( <div className="indicator"><FaCircle/></div>)
            )
        }


        const {posts} = this.state
        return(
            <div className="slider">
                <div className="slider-wrapper" style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                  transition: 'transform ease-out 0.45s'
                }}>
                  {
                    posts.map(post => <Slide key={post.id} image={post} />)
                  }
                </div>
                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
                <div className="indicators">
                {
                    posts.map(post => <Indicator key={post.id} id={post.id} />)
                  }

                
                </div>

            </div>
            

            
        )
    }
}

export default Carousel
