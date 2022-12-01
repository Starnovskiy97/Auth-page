<template>
	<div class="navbar">
		<div class="dropdown">
			<button
				v-if="this.userInfo"
				@click="openDropdown = !openDropdown"
				class="dropbtn">
				{{ userInfo.name }}
			</button>
			<router-link
				v-else
				tag="button"
				to="/login"
				class="dropbtn">
				Sign in
			</router-link>
			<div id="myDropdown"
				class="dropdown-content"
				v-if="openDropdown">
				<!--<a href="#">Profile</a>-->
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
			userInfo: null,
			userId: null
		}
	},
	methods: {
		async logoutUser() {
			await firebase.auth().signOut()
			this.$router.push('/login?info=logout')
		}
	},
	async mounted() {
		try {
			const userId = firebase.auth().currentUser.uid
			this.userInfo = (await firebase.database().ref(`/users/${userId}`).once('value')).val()

			this.$emit('userInfo', this.userInfo)
		} catch (err) {
			console.log(err)
		}
	}
}
</script>

<style lang="scss">
.navbar {
	min-height: 50px;
	background-color: grey;
	text-align: end;
}

.dropbtn {
	margin-right: 150px;
	min-height: 100%;
	min-width: 100px;
	background-color: #e99c28;
	color: white;
	padding: 16px;
	font-size: 16px;
	border: none;
	cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
	background-color: #fcb03e;
}

.dropdown {
	position: relative;
	display: inline-block;
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