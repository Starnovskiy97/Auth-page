<template>
	<div class="container">
		<form class="login" @submit.prevent="checkFormLogin">
			<div class="login__title">Login</div>
			<div class="login__subtitle">
				Please enter your Login and your Password
			</div>
			<div class="login__form form">
				<div class="form__email">
					<input
						class="form__email__input input"
						type="email"
						placeholder="Email address"
						v-model.trim="email"
						:class="$v.email.$error ? 'invalid' : ''">
					<span
						class="form__email__invalid text-invalid"
						v-if="$v.email.$dirty && !$v.email.required">
						Enter email
					</span>
					<span
						class="form__email__invalid text-invalid"
						v-if="$v.email.$dirty && !$v.email.email">
						Enter correct email
					</span>
				</div>
				<div class="form__password">
					<input
						class="form__password__input input"
						type="password"
						placeholder="Password"
						v-model.trim="password"
						:class="$v.password.$error ? 'invalid' : ''">
					<span
						class="form__password__invalid text-invalid"
						v-if="$v.password.$dirty && !$v.password.required">
						Enter password
					</span>
					<span
						class="form__password__invalid text-invalid"
						v-if="$v.password.$dirty && !$v.password.minLength">
						Min field length - {{ $v.password.$params.minLength.min }}
					</span>
					<!--<span class="form__password__question">
						<a href="#">Forgot password?</a>
					</span>-->
				</div>
				<button class="form__button" type="submit">
					Login
				</button>
				<div class="form__register-link">Not a member yet?
					<router-link to="/register"><i>Register!</i></router-link>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import firebase from "firebase/compat/app";
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
	name: 'loginPage',
	data() {
		return {
			email: '',
			password: '',
			error: {}
		}
	},
	validations: {
		email: { email, required },
		password: { required, minLength: minLength(8) },
	},
	methods: {
		async checkFormLogin() {
			if (this.$v.$invalid) {
				this.$v.$touch()
				return
			}

			try {
				await firebase.auth().signInWithEmailAndPassword(this.email, this.password)

				const userId = firebase.auth().currentUser.uid
				const userName = (await firebase.database().ref(`/users/${userId}/name`).once('value')).val()
				this.$router.push(`/#user=${userName}`)

			} catch (err) {
				this.error = err.code
				console.log(err)
			}

			if (this.error === 'auth/wrong-password') this.$toaster.error('The password is invalid')
			if (this.error === 'auth/user-not-found') this.$toaster.error('User is not found')

		}
	}
}
</script>

<style lang="scss">
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 100vw;
	min-height: 100vh;
	background-color: rgb(142, 134, 134);

	.login {
		padding: 20px 10px;
		background-color: #ffffff;
		min-width: 400px;
		min-height: 350px;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	.login__title {
		font-size: 40px;
		font-weight: 700;
		line-height: 52/40*100%;
		text-align: center;
	}

	.login__subtitle {
		font-size: 18px;
		font-weight: 700;
		line-height: 23/18*100%;
		text-align: center;
		margin: 0 0 30px 0;
	}

	.form {
		text-align: center;

		&__email {
			position: relative;
		}

		&__password {
			position: relative;
			margin: 16px 0 32px 0;

			&__question {
				font-size: 10px;
				line-height: 13/10*100%;
				position: absolute;
				top: 53px;
				right: 45px;
			}
		}

		a {
			text-decoration: none;
			color: #333333;
			opacity: 0.8;
		}

		&__button {
			min-width: 370px;
			min-height: 45px;
			border-radius: 30px;
			background-color: #e99c28;
			border: none;
			color: #eeeeee;
			outline: none;
			transition: 0.2s;

			&:hover {
				background-color: #fcb03e;
				cursor: pointer;
			}
		}

		&__register-link {
			margin: 6px 0 0 0;
			font-size: 13px;
			line-height: 18/13*100%;
		}
	}
}

.input {
	min-width: 350px;
	min-height: 45px;
	padding: 0 0 0 20px;
	border: 1px solid #eeeeee;
	border-radius: 30px;
	outline: none;

	&:focus {
		border: 2px solid #e99c28;
	}
}

.invalid {
	border: 2px solid rgba(214, 78, 78, 0.721);
}

.text-invalid {
	position: absolute;
	left: 35px;
	bottom: -14px;
	font-size: 11px;
	color: red;
}
</style>