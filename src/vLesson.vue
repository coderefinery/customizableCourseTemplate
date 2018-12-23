<template>
	<div class="lesson">
		<span class="h2">
			{{ lesson.title }}
		</span>
	</div>
</template>

<script>
	export default {
		name: "vLesson",
		props: [
			'lesson'
		]
	}
</script>

<style scoped>
	.lesson {
		width: 100%;
	}
 .fixed {
	 position: fixed;
 }
</style>
