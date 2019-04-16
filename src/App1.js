import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {
        greeting: 'Good Morning',
        movies:  [{
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
    }

    componentWillMount() {
        console.log('componentWillMount() called')
    }

    componentDidMount() {
        console.log('componentDidMount() called')
        setTimeout((i, j) => {
            this.setState({
                greeting: 'Good Afternoon',
                // movies: this.state.movies.concat([{
                //     title: '덤보',
                //     poster: 'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg'        
                // }])
                movies: [{
                    title: '덤보',
                    poster: 'https://movie-phinf.pstatic.net/20190328_112/1553762886182QHDpG_JPEG/movie_image.jpg'
                }, ...this.state.movies]
            });
        }, 5000);
    }

    render() {
        console.log('render() called')
        return (
            <div className='App'>
                <h1>{this.state.greeting}</h1>
                {
                    this.state.movies.map((movie, index) => {
                        return <Movie title={movie.title} poster={movie.poster} key={index}/>
                    })    
                }
            </div>
    );
  }
}

export default App;
