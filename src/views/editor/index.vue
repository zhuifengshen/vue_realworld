<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                >
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                >
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tagInput"
                  @keypress.enter.prevent="addTag(tagInput)"
                >
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) of article.tagList"
                    :key="tag + index"
                  >
                    <i
                      class="ion-close-round"
                      @click="removeTag(tag)"
                    ></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="onCreateArticle"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { createArticle } from '@/api/article'

export default {
	name: "EditorIndex",
	data() {
		return {
			article: {
				title: '',
				description: '',
				body: '',
				tagList: []
      },
      tagInput: null,
		}
	},
	methods: {
		async onCreateArticle() {
			const { data } = await createArticle(this.article)
			this.$router.push({
				name: 'article',
				params: {
					slug: data.article.slug
				}
			})
    },
    addTag(tag) {
      this.article.tagList.push(tag)
      this.tagInput = null
    },
    removeTag(tag) {
      const index = this.article.tagList.indexOf(tag)
      if (index > -1) {
        this.article.tagList.splice(index, 1)
      }
    },
	}
}
</script>

<style>
</style>
