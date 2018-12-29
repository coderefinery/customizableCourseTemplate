<template>
	<div class="header">
    <div class="frame">
      <img src="./assets/logo.png">
    </div>
    <span class="h1">
			{{ title }}
		</span>
	</div>
</template>

<script>
	export default {
		name: "vHeader",
    props: {
      title: {
        type: String,
        default: 'Course Title'
      }
    }
	}
</script>

<style scoped>
  .header {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .frame {
    height: 100%;
    padding: 5px 1.5em 5px 0;
  }
  .frame>* {
    height: 100%;
  }
</style>
