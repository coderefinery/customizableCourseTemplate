<template>
	<div id="app">
		<el-container>
			<el-header height="auto">
				<v-header :title="course.title"></v-header>
			</el-header>
			<el-container>
				<el-aside width="20%">
          <v-aside
            :course="course"
          />
        </el-aside>
				<el-container>
          <v-breadcrumbs></v-breadcrumbs>
          <el-main :style="{'background-color': '#' + pageColor}">
            <router-view></router-view>
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
	import vAside from './vAside'
	import vBreadcrumbs from './vBreadcrumbs'
	import vFooter from './vFooter'

	export default {
	  computed: {
	    pageColor () {
	      console.log(this.$store.state.pageColor)
	      return this.$store.state.pageColor
      },
      course: function () {
        return this.$store.state.course
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
			vHeader,
			vAside,
      vBreadcrumbs,
			vFooter
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
		color: #333;
		text-align: left;
	}

	body > .el-container {
		margin-bottom: 40px;
    -webkit-font-smoothing: antialiased;
  }

</style>
