import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {  
    }

    componentWillMount() {
        // request API            
    }

    componentDidMount() {
        // processing response    
        setTimeout((i, j) => {
            this.setState({
                movies: [{
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
            });
        }, 5000);
    }

    _render() {
        // const movies = [<Movie/>, <Movie/>, <Movie/>];
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
        });
        return movies;
    }

    render() {
        return (
            <div className='App'>
                {
                    (this.state.movies == null) ? <h5>loading.....</h5> : this._render()
                }
            </div>
    );
  }
}

export default App;
