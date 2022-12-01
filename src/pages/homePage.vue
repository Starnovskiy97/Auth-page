<template>
	<div class="home-page">
		<nav-bar
			class="home-page__nav-bar"
			@userInfo="userInfo" />
		<div class="home-page__container">
			<h1>Hello {{ user.name }} !</h1>
		</div>
	</div>
</template>

<script>
import navBar from '@/components/navBar.vue'

export default {
	name: 'homePage',
	data() {
		return {
			user: {}
		}
	},
	components: {
		navBar
	},
	methods: {
		userInfo(userInfo) {
			this.user = userInfo
		}
	}


}
</script>

<style lang="scss" scoped>
.home-page {
	min-height: 100vh;

	&__container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
	}
}
</style>