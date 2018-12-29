<template>
  <div
    class="markdown-editor"
    @click="highlight"
  >
    <v-code
      v-if="readOnly === false"
      language="markdown"
      :content="markdown"
    ></v-code>
    <v-markdown
      class="html-preview"
      :emoji="false"
    >{{ markdown }}</v-markdown>
  </div>
</template>
<script>
  import vCode from './vCode';
  import vueMarkdown from 'vue-markdown';

  function resetBackgroundColor (el) {
    el.style.backgroundColor = 'transparent';
  }
  export default {
    name: "vMarkdownEditor",
    props: {
      markdown: String,
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      highlight: function (event) {
        let editors = document.querySelectorAll('.markdown-editor');
        editors.forEach(el => resetBackgroundColor(el));

        event.target.closest('.markdown-editor').style.backgroundColor = '#fffb9d';
      }
    },
    components: {
      vCode: vCode,
      vMarkdown: vueMarkdown
    }
  }
</script>

<style scoped>
  .markdown-editor {
    padding:  4px;
    margin: 1em 0;
    display: grid;
  }

</style>
