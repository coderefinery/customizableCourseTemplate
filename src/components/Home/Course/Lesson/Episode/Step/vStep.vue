<template>
  <div class="step">
    <div class="step-header">
      <p class="step-title">
        {{ step.title }}
      </p>
      <v-markdown-editor
        :markdown="step.abstract"
      />
    </div>
    <v-markdown-editor
      :markdown="step.description"
    />
  </div>
</template>

<script>

  export default {
    name: "vStep",
    props: {
      step: Object,
      readOnly: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped>
  .step {
    background-color: white;
    border: 1px #e6e6e6 solid;
    border-radius: 4px;
    padding: 0.3em 1em;
    box-shadow: 2px 2px 4px grey;
  }
  .step-title {
    font-weight: 500;
  }
</style>
