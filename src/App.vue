<template>
	<div id="app">
		<Header :title="title" />
		<router-view />
		<Search />
	</div>
</template>

<script>
	import Header from '@/components/Header'
	import Search from '@/components/Search'

	export default {
		name: 'app',
		data() {
			return {
				title: 'Vue Weather'
			}
		},
		components: {
			Header,
			Search
		}
	}
</script>

<style lang="scss">
	$baseFontFamily: 'Avenir', Helvetica, Arial, sans-serif;

	#app {
		font-family: $baseFontFamily;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
