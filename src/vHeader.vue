<template>
	<div class="header">
    <v-logo></v-logo>
    <h1 class="title">
			CodeRefinery.org - {{ title }}
      <el-checkbox v-model="contentIsEditable">Show Editors</el-checkbox>
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
        default: 'Welcome'
      }
    },
    computed: {
		  contentIsEditable: {
		    get () {
  		    return this.$store.state.contentIsEditable
        },
        set (newValue) {
		      return this.$store.dispatch('setContentIsEditable', newValue)
        }
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
