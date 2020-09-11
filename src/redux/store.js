import { createStore } from 'redux';

import FavoriteReducer from './Favorites/reducer';

const store = createStore(FavoriteReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
