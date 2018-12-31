<template>
  <v-ace
    :lang="language"
    :theme="theme"
    v-model="content"
    width="100%"
    @init="editorInit"
  ></v-ace>
</template>

<script>
  import * as vACE from 'vue2-ace-editor';

  export default {
    name: "vCode",
    data: function () {
      return {
        veryHighNumber: 1333337
      }
    },
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

        editor.setOptions({
          maxLines: this.veryHighNumber
        })
        editor.on("change", function (e) {
          /*
              handle content changes:
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

</style>
