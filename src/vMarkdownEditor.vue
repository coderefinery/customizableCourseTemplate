<template>
  <div class="markdown-editor">
    <v-code
      v-if="readOnly === false"
      :content="markdown"
    ></v-code>
    <div class="html-preview"></div>
  </div>
</template>

<script>
  import vCode from './vCode';

  // https://github.com/coderefinery/customizableCourseTemplate/issues/21

  export default {
    name: "MarkdownEditor",
    props: {
      markdown: String,
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    components: {
      vCode: vCode
    }
  }
</script>
<style scoped>
  /* todo: flexible columns layout (conditional editor visibility) */
</style>
