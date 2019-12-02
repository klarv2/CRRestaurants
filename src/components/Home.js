import React, {Component} from 'react'
import data from '../data.json'
import uuid from 'uuid-random';

import Carousel from './Carousel'

class Home extends Component {
    
  
    render(){
        
        const CarouselSlider = data.length ? (
            data.map (post => {
                return(
                    <Carousel data={post} key={uuid()}/>
                    
                )
            })
        ) : (
            <div className="center"> No posts yet</div>
        )

        return(
            <div className="container">
                <header className="App-header">
                    <div className="col-12 center">
                        <h1 className="header-title">Travel Agency</h1>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed mauris sit amet massa aliquet ornare ac sit amet est. </h6>        
                    </div>
                </header>
                <div className="main-content">
                    {CarouselSlider}
                </div>
            </div>
        )
    }
}

export default Home