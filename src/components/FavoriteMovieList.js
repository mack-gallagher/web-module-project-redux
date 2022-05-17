import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeFavorite, REMOVE_FAVORITE } from '../actions/favoritesActions.js';

const mapStateToProps = (state) => {
  return {
           favorites: state.favorites.favorites,
         }
}

const FavoriteMovieList = (props) => {
    const { dispatch, favorites } = props;
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span>
                          <span 
                            className="material-icons"
                            onClick={ () => dispatch(removeFavorite(movie.id)) }
                          >
                            remove_circle
                          </span>
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connect(mapStateToProps)(FavoriteMovieList);
