<template>
	<div class="breadcrumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index) in viewPath"
        :key="index"
        :to="{ path: viewPathByIndex(index) }"
      >
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>

	export default {
	  name: 'vBreadcrumbs',
    computed: {
      viewPath () {
	      return this.$store.state.viewPath
      }
    },
    methods: {
	    viewPathByIndex (index) {
	      let path = this.$store.state.viewPath

        if (index < path.length) {
          console.log(path)
          console.log(index)
          path = '/' + path.slice(0, index + 1).join('/')
          console.log(path)
        }
        return path
      }
    }
	}
</script>

<style scoped>
</style>
