<template>
	<div class="footer">
    <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">License</a>
    <div class="frame">
      <img src="../assets/cc_white.svg" alt="CC">
      <img src="../assets/attribution_icon_white.svg" alt="BY">
      <img src="../assets/sa_white.svg" alt="SA">
    </div>
	</div>
</template>

<script>
	export default {
		name: "vFooter",
    props: {
      title: {
        type: String,
        default: 'Course Title'
      }
    }
	}
</script>

<style scoped>
  .footer {
    background-color: #B3C0D1;
    color: #333;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .frame {
    margin: 0 0 0 1em;
    height: 70%;
  }
  .frame>* {
    height: 100%;
  }
</style>
