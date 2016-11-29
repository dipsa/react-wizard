import { combineReducers } from 'redux';
import ContentReducer from './reducer_content';
import CurrentContentReducer from './reducer_current_content';

const rootReducer = combineReducers({
  content: ContentReducer,
  currentContentId: CurrentContentReducer
});

export default rootReducer;
