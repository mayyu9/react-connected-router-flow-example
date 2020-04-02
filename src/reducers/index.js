import { combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import counter from './counter';

// connected react router to work we should have router as combine reducer object.
const rootReducer = history =>(combineReducers({
    router: connectRouter(history),
    counter
    }
    ));

export default rootReducer;
