import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const reducer = combineReducers({movies: movieReducer, favorites: favoritesReducer});

export default reducer;
