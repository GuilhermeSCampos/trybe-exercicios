import { combineReducers } from 'redux';
const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducersCombined = combineReducers({themeReducer, statusReducer})

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const store = Redux.createStore(reducersCombined);

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
});

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
});

console.log(store.getState());