<template>
  <div class="exercise">
    <div class="exercise-header">
      <p class="exercise-title">
        {{ exercise.title }}
      </p>
      <v-markdown-editor
        :markdown="exercise.abstract"
      />
    </div>
    <v-markdown-editor
      :markdown="exercise.description"
    />
  </div>
</template>

<script>

  export default {
    name: "vExercise",
    props: {
      exercise: Object,
      readOnly: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped>
  .exercise {
    background-color: #d2ecff;
    border: 1px #a3d9ff solid;
    border-radius: 4px;
    padding: 0.3em 1em;
  }
  .exercise-title {
    font-style: italic;
  }
</style>
