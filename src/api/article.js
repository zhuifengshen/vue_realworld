/**
 * 文章相关请求模块
 */
import request from '@/utils/request.js'

export const getArticles = () => {
	return request({
		method: 'GET',
		url: '/api/articles'
	})
}

export const getArticleBySlug = slug => {
	return request({
		method: 'GET',
		url: `/api/articles/${slug}`
	})
}

export const createArticle = ({
	title,
	description,
	body,
	tagList = []
}) => {
	return request({
		method: 'POST',
		url: '/api/articles',
		data: {
			article: {
				title,
				description,
				body,
				tagList
			}
		}
	})
}
