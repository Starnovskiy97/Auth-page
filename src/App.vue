<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
body {
	font-family: 'PT Sans', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	height: auto;
	margin: 0;
}

@media (max-width: 37.5em) {

	html,
	body {
		font-size: 0.8rem;
	}
}

@media (max-width: 25em) {

	html,
	body {
		font-size: 0.7rem;
	}
}
</style>
