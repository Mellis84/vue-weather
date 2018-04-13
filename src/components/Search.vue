<template>
	<input 
		class="location-search" 
		type="text" 
		name="location"
		placeholder="Search for a city or country"
		autofocus="autofocus"
		autocomplete="off"
	>
</template>

<script>
	export default {
		name: 'Search'
	}
</script>

<style lang="scss">
	.location-search {
		appearance: none;
		border: none;
		padding: 1.5rem;
		outline: none;
		font-size: 1.4rem;
		color: white;
		background-color: rgba(white, 0.05);
		border-top: 1px solid rgba(white, 0.2);
		transition: background-color 500ms ease;

		&::placeholder {
			color: white;
		}

		&:focus {
			background-color: rgba(white, 0.2);
		}
	}
</style>
