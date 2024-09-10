import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk'; // Typage pour redux-thunk
import { composeWithDevTools } from '@redux-devtools/core'; // Utilisation de @redux-devtools/core pour Redux 5.x et TypeScript
import userReducer from './reducers/userReducer'; // Assure-toi que userReducer est en TypeScript

// Typage pour l'état global
export interface RootState {
  user: ReturnType<typeof userReducer>;
}

// Combiner les réducteurs
const rootReducer = combineReducers({
  user: userReducer,
});

// Création du store avec le middleware thunk et les DevTools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState>))
);

export default store;