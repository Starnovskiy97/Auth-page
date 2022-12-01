<template>
	<div class="container">
		<form class="register" @submit.prevent="checkFormRegister">
			<div class="register__title">Register</div>
			<div class="register__subtitle">Please enter your Name, Login and your Password
			</div>
			<div class="register__form form">
				<div class="form__username">
					<input
						class="form__username__input input"
						type="text"
						placeholder="Username"
						v-model.trim="username"
						:class="$v.username.$error ? 'invalid' : ''">
					<span
						class="form__username__invalid text-invalid"
						v-if="$v.username.$dirty && !$v.username.required">
						Enter username
					</span>
					<span
						class="form__username__invalid text-invalid"
						v-if="$v.username.$dirty && !$v.username.minLength">
						Min field length - {{ $v.username.$params.minLength.min }}
					</span>
				</div>
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
						Enter correct email
					</span>
					<span
						class="form__email__invalid text-invalid"
						v-if="$v.email.$dirty && !$v.email.email">
						Enter email
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
				</div>
				<div class="form__re-password">
					<input
						class="form__re-password__input input"
						type="password"
						placeholder="Re-Enter Password"
						v-model.trim="repeatPassword"
						:class="$v.repeatPassword.$error ? 'invalid' : ''">
					<span
						class="form__re-password__invalid text-invalid"
						v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.sameAsPassword">
						Re-Enter password
					</span>
				</div>
				<button class="form__button" type="submit">
					Register
				</button>
				<div class="form__register-link">Already have an Account?
					<router-link to="/login"><i>Login!</i></router-link>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import firebase from "firebase/compat/app";
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
	name: 'loginPage',
	data() {
		return {
			email: '',
			password: '',
			repeatPassword: '',
			username: ''
		}
	},
	validations: {
		username: { required, minLength: minLength(3) },
		email: { email, required },
		password: { required, minLength: minLength(8) },
		repeatPassword: { sameAsPassword: sameAs('password') }
	},
	methods: {
		async checkFormRegister() {
			if (this.$v.$invalid) {
				this.$v.$touch()
				return
			}

			try {
				const data = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)

				const id = data.user.uid
				await firebase.database().ref(`/users/${id}`).set({ name: this.username })

				this.$router.push(`/#user=${this.username}`)
			} catch (err) {
				console.log(err)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.register {
	padding: 20px 10px 50px 10px;
	background-color: #ffffff;
	min-width: 400px;
	min-height: 400px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.register__title {
	font-size: 40px;
	font-weight: 700;
	line-height: 52/40*100%;
	text-align: center;
}

.register__subtitle {
	font-size: 18px;
	font-weight: 700;
	line-height: 23/18*100%;
	text-align: center;
	margin: 0 0 30px 0;
}

.form__password {
	margin: 0;
}

input {
	margin-bottom: 16px;
}

.text-invalid {
	position: absolute;
	left: 0;
}

.form__username {
	position: relative;
}

.form__re-password {
	position: relative;
}

.text-invalid {
	bottom: 2px;
	left: 35px;
}
</style>