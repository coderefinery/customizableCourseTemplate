<template>
	<div class="lesson">
		<div class="fixed">
			<el-steps :active="0" align-center>
				<el-step
					v-for="(item, index) in lesson.episodes"
					:key="index"
					:episode="item"
				></el-step>
			</el-steps>
		</div>
		<span class="h2">
			{{ lesson.title }}
		</span>
		<p v-html="lesson.brief"></p>
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
