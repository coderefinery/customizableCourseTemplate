<template>
	<div class="course">
    <div class="lessons">
      <v-lesson
        v-for="(lesson, index) in course.lessons"
        :key="index"
        :lesson="lesson">
      </v-lesson>
    </div>
	</div>
</template>

<script>
	import vLesson from './Lesson'

	export default {
	  name: 'vCourse',
    props: [
      'course'
    ],
		components: {
			vLesson: vLesson
		}
	}
</script>

<style scoped>
</style>
