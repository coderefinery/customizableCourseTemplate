<template>
  <div class="step">
    <div class="step-header">
      <h4 class="step-title">
        {{ step.title }}
      </h4>
      <p class="step-abstract">
        {{ step.abstract }}
      </p>
    </div>
    <v-markdown-editor
      :markdown="step.description"
      :readOnly="true"
    >
    </v-markdown-editor>
    <v-markdown-editor
      :markdown="step.abstract"
      :readOnly="true"
    >
    </v-markdown-editor>
  </div>
</template>

<script>
  import vMarkdownEditor from './vMarkdownEditor';

  export default {
    name: "vStep",
    props: {
      step: Object,
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    components: {
      vMarkdownEditor: vMarkdownEditor
    }
  }
</script>
<style scoped>
</style>
