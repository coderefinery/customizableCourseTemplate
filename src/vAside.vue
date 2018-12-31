<template>
	<div class="aside">
    <el-menu
      default-active="1-1-1"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ course.title }}</span>
        </template>
        <el-submenu
          v-for="(lesson, lessonIndex) in course.lessons"
          :key="lessonIndex"
          :index="'1-' + lessonIndex"
        >
          <template slot="title">
            {{ lesson.title }}
          </template>
          <el-menu-item
            v-for="(episode, episodeIndex) in lesson.episodes"
            :key="episodeIndex"
            :index="'1-' + lessonIndex + '-' + episodeIndex">
            {{ episode.title }}
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
	</div>
</template>

<script>
	export default {
	  name: 'vAside',
    props: [
      'course'
    ],
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>

<style scoped>
  .aside {
    text-align: left;
  }
</style>
