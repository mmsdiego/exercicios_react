import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import fieldRecuder from './fieldReducer';

import Field from './field';

const reducers = combineReducers({
  field: fieldRecuder
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field />
  </Provider>
, document.getElementById('app'))