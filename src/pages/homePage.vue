<template>
	<div class="home-page">

		<preloader v-if="!user" />

		<div>
			<nav-bar
				class="home-page__nav-bar"
				@userInfo="userInfo" />
			<div class="home-page__container">
				<h1>Hello {{ user }} !</h1>
			</div>
		</div>

	</div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import preloader from '@/components/preloader.vue'

export default {
	name: 'homePage',
	data() {
		return {
			user: null,
		}
	},
	components: {
		navBar,
		preloader
	},
	methods: {
		userInfo(userInfo) {
			this.user = Object.values(userInfo)[0]
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