<template>
	<div class="header">
    <v-logo></v-logo>
    <h1 class="title">
			CodeRefinery.org - {{ title }}
		</h1>
	</div>
</template>

<script>
  import vLogo from './vLogo';

	export default {
		name: "vHeader",
    props: {
      title: {
        type: String,
        default: 'Course Title'
      }
    },
    components: {
		  vLogo: vLogo
    }
	}
</script>

<style scoped>
  .header {
    height: 80px;
    display: flex;
    align-items: center;
  }
  .title {
    width: 100%;
    text-align: center;
  }
</style>
