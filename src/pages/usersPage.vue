<template>

	<div class="users">
		<preloader v-if="loading" />

		<div
			class="users__main">
			<nav-bar />

			<div class="users__container">
				<ul class="users__list">
					<li
						v-for="(user, index) in userList"
						:key="index">
						{{ index + 1 }} - {{ user }}
					</li>
				</ul>
				<router-link
					to="/"
					class="users__link">
					Home
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import preloader from '@/components/preloader.vue'
import firebase from "firebase/compat/app";

export default {
	name: 'usersPage',
	data() {
		return {
			userList: [],
			loading: false,
		}
	},
	components: {
		navBar,
		preloader
	},
	async mounted() {
		try {
			this.loading = true
			const getUsers = (await firebase.database().ref('users').once('value')).val()

			for (let i = 0; i < Object.values(getUsers).length; i++) {
				this.userList.push(Object.values(getUsers)[i].name)
			}

			this.loading = false
		} catch (err) {
			console.log(err)
		}
	}
}
</script>

<style>
.users__container {
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.users__link {
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 0.8rem;
	width: 4rem;
	color: white;
	border-radius: 10px;
	background-color: #e99c28;
}

.users__link:hover,
.users__link:focus {
	background-color: #fcb03e;
}

.users__list {
	list-style-type: none;
	font-size: 2rem;
}
</style>