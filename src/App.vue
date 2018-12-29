<template>
	<div id="app">
		<el-container>
			<el-header height="auto">
				<v-header :title="course.title"></v-header>
			</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-container>
          <el-main :style="{'background-color': '#' + pageColor}">
            <!-- todo: list courses component with alternative abstraction levels -->
            <v-course
              :course="course"
            />
						<!--div>
							<el-button @click="notify">Notify Me!</el-button>
						</div-->
					</el-main>
					<el-footer>
            <v-footer></v-footer>
          </el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import vHeader from './vHeader'
	import vFooter from './vFooter'
	import vCourse from './vCourse'

	export default {
	  computed: {
	    course () {
	      return this.$store.state.course
      },
      pageColor () {
	      console.log(this.$store.state.pageColor)
	      return this.$store.state.pageColor
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
			vFooter: vFooter,
      vCourse
		}
	}
</script>

<style>
	#app {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
    background-color: #fafafa;
    color: #333;
    text-align: center;
  }

  .el-footer {
    background-color: #B3C0D1;
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
		text-align: left;
		/*line-height: 16px;*/
	}

	body > .el-container {
		margin-bottom: 40px;
    -webkit-font-smoothing: antialiased;
  }

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

</style>
