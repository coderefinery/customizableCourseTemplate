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
  import vStep from './Step';
  import vQuiz from './Quiz';
  import vExercise from './Exercise';

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
      vStep,
      vQuiz,
      vExercise
    }
  }
</script>
<style scoped>
  .episode {
    background-color: #edf2ff;
  }
</style>
