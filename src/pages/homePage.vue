<template>
	<div class="home-page">

		<preloader v-if="loading" />

		<div>
			<nav-bar class="home-page__nav-bar" />
			<div class="home-page__container">
				<h1>Hello {{ userName }} !</h1>
			</div>
		</div>

	</div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import preloader from '@/components/preloader.vue'
import firebase from "firebase/compat/app";

export default {
	name: 'homePage',
	data() {
		return {
			userName: null,
			loading: false
		}
	},
	components: {
		navBar,
		preloader
	},
	mounted() {
		firebase.auth().onAuthStateChanged(async user => {
			if (user) {
				try {
					this.loading = true
					const userId = firebase.auth().currentUser.uid
					this.userName = (await firebase.database().ref(`/users/${userId}/name`).once('value')).val()
					this.loading = false
				} catch (err) {
					console.log(err)
				}
			}
		})
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