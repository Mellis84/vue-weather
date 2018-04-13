<template>
	<header>
		<h1>
			<router-link to="/">
				<img src="../assets/VWlogo.svg" :alt="title" />
			</router-link>
		</h1>
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: {
		title: String
	}
}
</script>

<style lang="scss" scoped>
	header {
		a {
			display: flex;
			align-items: center;
			align-content: center;
			justify-content: center;
			
			img {
				padding: 1.6rem 0;
				max-width: 5rem;
			}
		}
	}
</style>
