<template>
  <div class="lesson">
    <div class="lesson-header">
      <h2 class="lesson-title">
        Code Refinery - {{ lesson.title }}
      </h2>
      <p class="lesson-abstract">
        <v-markdown-editor
          :markdown="lesson.abstract"
        />
      </p>
    </div>
    <!-- todo: data store variable for global layout abstraction setting -->
    <div class="lesson-content">
      <v-markdown-editor
        :markdown="lesson.description"
      />
      <v-episode
        v-for="(episode, index) in lesson.episodes"
        :key="index"
        :episode="episode"
      ></v-episode>
    </div>
  </div>
</template>

<script>
  import vMarkdownEditor from './vMarkdownEditor';
  import vEpisode from './vEpisode';

  export default {
		name: "vLesson",
		props: [
			'lesson'
		],
    components: {
      vMarkdownEditor: vMarkdownEditor,
      vEpisode: vEpisode
    }
	}
</script>
<style scoped>
	.lesson {
		width: 100%;
    text-align: left;
	}
  .header-anchor {
    display: none;
  }

  .lesson__scroll {
    height: calc(100% - 80px);
    margin-top: 80px
  }

  .lesson__scroll .el-scrollbar__wrap {
    overflow-x: auto
  }

  .lesson {
    box-sizing: border-box;
    height: 100%
  }

  .lesson .lesson__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top .3s
  }

  .lesson .lesson__nav .el-scrollbar__wrap {
    height: 100%
  }

  .lesson .lesson__nav.is-extended {
    padding-top: 0
  }

  .lesson .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0
  }

  .lesson .side-nav > ul {
    padding-bottom: 50px
  }

  .lesson .lesson__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box
  }

  .lesson .content {
    padding-top: 30px
  }

  .lesson .content > h1,
  .lesson .content > h2,
  .lesson .content > h3,
  .lesson .content > h4 {
    margin: 55px 0 20px;
  }

  .lesson .content > table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em
  }

  .lesson .content > table strong {
    font-weight: 400
  }

  .lesson .content > table td, .lesson .content > table th {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px
  }

  .lesson .content > table th {
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: 400
  }

  .lesson .content > table td {
    color: #333
  }

  .lesson .content > table td:first-child, .lesson .content > table th:first-child {
    padding-left: 10px
  }

  .lesson .content > ul:not(.timeline) {
    margin: 10px 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: #5e6d82;
    line-height: 2em
  }

  .lesson .lesson-up {
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    z-index: 5
  }

  .lesson .lesson-up i {
    color: #409eff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px
  }

  .lesson .lesson-up.hover {
    opacity: 1
  }

  .lesson .back-top-fade-enter, .lesson .back-top-fade-leave-active {
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
    opacity: 0
  }

  .lesson.page-container {
    padding: 0
  }

  @media (max-width: 768px) {
    .lesson .lesson__nav {
      width: 100%;
      position: static;
      margin-top: 0
    }

    .lesson .side-nav {
      padding-top: 0;
      padding-left: 50px
    }

    .lesson .lesson__content {
      padding-left: 10px;
      padding-right: 10px
    }

    .lesson .content {
      padding-top: 0
    }

    .lesson .content > table {
      overflow: auto;
      display: block
    }

    .lesson .lesson-up {
      display: none
    }
  }
</style>
