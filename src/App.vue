<template>
	<div id="app">
		<el-container>
			<el-header>
				<v-header></v-header>
			</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-container>
          <!--
              customization
                gitAbstraction
                workEnvironment
                page format
                episodeAppendix
              lesson
                episode
                  gitCommands
                    newConcepts
                    example
                    exercises
                    quizz
                  bashAliases
                    newConcepts
                    example
                    exercises
                    quizz
                  GitHubDesktop
                    newConcepts
                    example
                    exercises
                    quizz
                  ...
            --><el-main>Main
						<div class="lessons">
              <v-lesson
								v-for="(item, index) in lessons"
								:key="index"
								:lesson="item">
							</v-lesson>
						</div>
						<img src="./assets/logo.png">
						<!--div>
							<el-button @click="notify">Notify Me!</el-button>
						</div-->
					</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import vHeader from './vHeader'
	import vLesson from './vLesson'
	export default {
    data: function() {
			return {
				lessons: [
					{
						title: 'Install GitHub Desktop',
						brief: 'download the app from <a href="https://desktop.github.com/" _target="blank">here</a>',
						episodes: []
					}
				]
			}
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
			vHeader: vHeader,
			vLesson: vLesson
		}
	}
</script>

<style>
	#app {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		text-align: center;
	}

	.h1 {
		font-size: 20px
	}

	.h2 {
		font-size: 18px
	}

	.h3 {
		font-size: 16px
	}

	.text-regular {
		font-size: 14px
	}

	.text-small {
		font-size: 13px
	}

	.text-smaller {
		font-size: 12px
	}

	.color-dark-light {
		color: #99a9bf
	}

	.el-row {
		margin-bottom: 20px;
	}
	.el-row:last-child {
		margin-bottom: 0;
	}

	.el-header, .el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body > .el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
