<template>
  <div class="quiz">
    <div class="quiz-header">
      <p class="quiz-title">
        {{ quiz.title }}
      </p>
      <v-markdown-editor
        :markdown="quiz.abstract"
      />
    </div>
    <v-markdown-editor
      :markdown="quiz.description"
    />
  </div>
</template>

<script>
  export default {
    name: "vQuiz",
    props: {
      quiz: Object,
      readOnly: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped>
  .quiz {
    background-color: white;
    border: 1px #e6e6e6 solid;
    border-radius: 4px;
    padding: 0.3em 1em;
  }
  .quiz-title {
    font-style: italic;
  }
</style>
