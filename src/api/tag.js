/**
 * 标签相关请求模块
 */
import request from '@/utils/request.js'

export const getTags = () => {
	return request({
		method: 'GET',
		url: '/api/tags'
	})
}