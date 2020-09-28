import { combineReducers } from 'redux';

import { user } from './entities/user';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
