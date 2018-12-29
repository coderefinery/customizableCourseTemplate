<template>
  <div class="episode">
    <div class="episode-header">
      <h3 class="episode-title">
        {{ episode.title }}
      </h3>
      <p class="episode-abstract">
        {{ episode.abstract }}
      </p>
    </div>
    <v-markdown-editor
      :markdown="episode.description"
      :readOnly="true"
    >
    </v-markdown-editor>
    <v-markdown-editor
      :markdown="episode.abstract"
      :readOnly="true"
    >
    </v-markdown-editor>
    <v-step
      v-for="(step, index) in episode.steps"
      :key="index"
      :step="step"
    ></v-step>
  </div>
</template>

<script>
  import vStep from './vStep';
  import vMarkdownEditor from './vMarkdownEditor';

  export default {
    name: "Episode",
    props: {
      episode: Object,
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    components: {
      vMarkdownEditor: vMarkdownEditor,
      vStep: vStep
    }
  }
</script>
<style scoped>
</style>
