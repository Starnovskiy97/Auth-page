<template>
	<div class="navbar">

		<router-link
			v-if="this.userName"
			@click="userName"
			to="/users"
			class="user-list">
			User list
		</router-link>

		<div class="dropdown">
			<button
				v-if="this.userName"
				@click="openDropdown = !openDropdown"
				class="dropbtn">
				{{ userName }}
			</button>

			<router-link
				v-else
				to="/login"
				class="dropbtn">
				Sign in
			</router-link>

			<div id="myDropdown"
				class="dropdown-content"
				v-if="openDropdown">
				<a href="#" @click="logoutUser">Sign out</a>
			</div>
		</div>

	</div>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
	name: 'navBar',
	data() {
		return {
			openDropdown: false,
			userName: null,
		}
	},
	methods: {
		async logoutUser() {
			await firebase.auth().signOut()
			this.$router.push('/login?info=logout')
		}
	},
	async mounted() {
		firebase.auth().onAuthStateChanged(async user => {
			if (user) {
				try {
					const userId = firebase.auth().currentUser.uid
					this.userName = (await firebase.database().ref(`/users/${userId}/name`).once('value')).val()
				} catch (err) {
					console.log(err)
				}
			}
		})
	}
}
</script>

<style lang="scss">
.navbar {
	max-height: 4rem;
	background-color: grey;
	text-align: end;
	display: flex;
	justify-content: flex-end;
}

.dropbtn {
	display: flex;
	justify-content: center;
	margin: 0 8rem 0 3rem;
	width: inherit;
	text-decoration: none;
	background-color: #e99c28;
	color: white;
	padding: 1.3rem;
	font-size: 1rem;
	border: none;
	cursor: pointer;
}

.user-list {
	display: flex;
	justify-content: center;
	max-width: 4rem;
	min-height: 100%;
	text-decoration: none;
	background-color: #e99c28;
	color: white;
	padding: 1rem;
	font-size: 1rem;
	border: none;
}

@media (max-width: 500px) {
	.dropbtn {
		margin: 0 3rem 0 2rem;
	}
}

.user-list:hover,
.user-list:focus,
.dropbtn:hover,
.dropbtn:focus {
	background-color: #fcb03e;
}

.dropdown-content {
	position: absolute;
	background-color: #f1f1f1;
	text-align: center;
	min-width: 120px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
}

.dropdown-content a {
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
}

.dropdown-content a:hover {
	background-color: #ddd
}
</style>