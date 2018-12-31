<template>
  <v-ace
    ref="ace"
    :lang="language"
    :theme="theme"
    v-model="content"
    width="100%"
    height="100%"
    @init="editorInit"
  ></v-ace>
</template>

<script>
  import * as vACE from 'vue2-ace-editor';

  // https://github.com/coderefinery/customizableCourseTemplate/issues/21

  export default {
    name: "vCode",
    props: {
      content: String,
      language: {
        type: String,
        default: 'javascript'
      },
      theme: {
        type: String,
        default: 'chrome'
      }
    },
    methods: {
      editorInit: function (editor) {
        require('brace/ext/language_tools');
        require('brace/mode/' + this.language);
        require('brace/theme/chrome');
        editor.on("change", function (e) {
          /*
              handle changes:
                e.action // fx. insert
                start .row, .column
                end .row, .column
                lines[]
           */
        })
      }
    },
    components: {
      vAce: vACE
    }
  }
</script>
<style scoped>
  .ace_editor {
    min-height: 1em;
    padding: 1px;
  }
</style>
