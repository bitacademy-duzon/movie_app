import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [{
  title:'생일',
  poster: 'https://movie-phinf.pstatic.net/20190329_223/1553847778414CTAcF_JPEG/movie_image.jpg'
},{
  title:'헬보이',
  poster: 'https://movie-phinf.pstatic.net/20190404_205/155434484507891fje_JPEG/movie_image.jpg'
},{
  title:'돈',
  poster: 'https://movie-phinf.pstatic.net/20190306_280/1551849045570X4iac_JPEG/movie_image.jpg'
},{
  title:'미성년',
  poster: 'https://movie-phinf.pstatic.net/20190411_137/1554973943268Tu8fN_JPEG/movie_image.jpg'
},{
  title:'극한직업',
  poster: 'https://file.mk.co.kr/meet/neds/2019/01/image_readtop_2019_47065_15482039843612795.jpg'
}]


//
// Life Circle
//

// render: componentWillMount() -> render() -> componentDidMount()
// update: componentWillReceivePops() -> componentShouldUpdate() -> compnentWiilUpdate() -> render()
//                                       return (old props != new props)              


class App extends Component {
  componentWillMount() {
    // request API
    console.log('componentWillMount() called')
  }

  componentDidMount() {
    // request done
    console.log('componentDidMount() called')
  }

  render() {
    console.log('render() called')
    return (
      <div className='App'>
        {
          movies.map((movie, index) => 
            <Movie title={movie.title} poster={movie.poster} key={index}/>
          )    
        }
      </div>
    );
  }
}

export default App;
