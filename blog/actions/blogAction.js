import {
  CALL_API
} from '../middleware/api'

export const FETCH_ARTICLES_CALL = 'FETCH_ARTICLES_CALL';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';
export function fetchArticles() {
	console.log('1111');
	let url = '/blog/articles/Article.js';
	return {
		[CALL_API]: {
			url: url,
			type: FETCH_ARTICLES_CALL
		}
	};
}

export const FETCH_ARTICLE_CONTENT_CALL = 'FETCH_ARTICLE_CONTENT_CALL';
export const FETCH_ARTICLE_CONTENT_SUCCESS = 'FETCH_ARTICLE_CONTENT_SUCCESS';
export const FETCH_ARTICLE_CONTENT_ERROR = 'FETCH_ARTICLE_CONTENT_ERROR';
export function fetchContent(contentId) {
	console.log('bbbb');
	let id = contentId+1;
	console.log(id, 'id----')
	let url = `/blog/articles/Article${id}.js`;
	return {
		[CALL_API]: {
			url: url,
			type: FETCH_ARTICLE_CONTENT_CALL
		}
	}
}