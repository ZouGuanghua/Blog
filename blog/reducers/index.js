import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {FETCH_ARTICLES_CALL, FETCH_ARTICLES_ERROR, FETCH_ARTICLES_SUCCESS,
	FETCH_ARTICLE_CONTENT_SUCCESS, FETCH_ARTICLE_CONTENT_ERROR
} from '../actions/blogAction'

const routing = routerReducer


function byId(state = [], action) {
	switch(action.type) {
		case FETCH_ARTICLES_SUCCESS:
			return action.res;
		default:
			return state;
	}
}

function content (state = {}, action) {
	switch(action.type) {
		case FETCH_ARTICLE_CONTENT_ERROR:
			console.log('error', action);
			return state;
		case FETCH_ARTICLE_CONTENT_SUCCESS:
			console.log('success');
			console.log('cccc')
			console.log(action);
			return action.res;
		default:
			return state;
	}
}

export default combineReducers({
  routing,
	byId,
	content
});


