<template>
  <div class="episode">
    <div class="episode-header">
      <h3 class="episode-title">
        {{ episode.title }}
      </h3>
      <p class="episode-abstract">
        <v-markdown-editor
          :markdown="episode.abstract"
        />
      </p>
    </div>
    <v-markdown-editor
      :markdown="episode.description"
    />
    <v-step
      v-for="(step, index) in episode.steps"
      :key="index"
      :step="step"
    ></v-step>
  </div>
</template>

<script>
  import vStep from './vStep';
  import vQuiz from './vQuiz';
  import vExercise from './vExercise';
  import vMarkdownEditor from './vMarkdownEditor';

  export default {
    name: "vEpisode",
    props: {
      episode: Object,
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    components: {
      vMarkdownEditor,
      vStep,
      vQuiz,
      vExercise
    }
  }
</script>
<style scoped>
</style>
