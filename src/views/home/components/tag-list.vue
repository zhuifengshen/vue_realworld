<template>
	<div class="sidebar">
		<p>Popular Tags</p>

		<div class="tag-list">
			<a 
				v-for="tag in tags"
				:key="tag"
				href=""
				class="tag-pill tag-default"
			>
			{{ tag }}
			</a>
		</div>
	</div>
</template>

<script>
import { getTags } from '@/api/tag'

export default {
	name: 'TagList',
	data(){
		return {
			tags: []
		}
	},
	created(){
		this.loadTags()
	},
	methods: {
		async loadTags(){
			const res = await getTags()
			this.tags = res.data.tags
		}
	}
}
</script>

<style>
</style>
