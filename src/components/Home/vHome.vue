<template>
	<div id="home">
    <h1>
      {{ course.title }}
      <span>by CodeRefinery.org</span>
    </h1>
    <v-course
      :course="course"
    />
	</div>
</template>

<script>
	import vCourse from './Course'

	export default {
	  computed: {
	    course: function () {
	      return this.$store.state.course
      },
    },
    methods: {
      notify() {
				this.$notify({
					title: 'Title',
					type: 'success',
					message: 'information',
					duration: 8000
				})
			}
		},
		components: {
      vCourse
		}
	}
</script>

<style scoped>
</style>
