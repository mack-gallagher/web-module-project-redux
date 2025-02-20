import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { deleteMovie, DELETE_MOVIE } from '../actions/movieActions.js';
import { connect } from 'react-redux';

import { addFavorite, ADD_FAVORITE } from '../actions/favoritesActions.js';

const mapStateToProps = state => {
  return {
           movies: state.movies.movies,
           displayFavorites: state.favorites.displayFavorites,
         }
}

const Movie = (props) => {

    const { movies, dispatch } = props;

    const { id } = useParams();

    const movie = movies.filter(movie=>movie.id===parseInt(id))[0];

    if (!movie){
      return (
        <div></div>
      )
    }

    const { push } = useHistory();

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span 
                              className="m-2 btn btn-dark"
                              onClick={() => dispatch(addFavorite(movie))}
                            >
                              Favorite
                            </span>
                            <span className="delete">
                              <input 
                                type="button" 
                                className="m-2 btn btn-danger" 
                                value="Delete"
                                onClick={() => dispatch(deleteMovie(id))}
                              />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default connect(mapStateToProps)(Movie);
