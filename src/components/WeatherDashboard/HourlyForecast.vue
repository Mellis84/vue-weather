<template>
	<div class="hourly-forecast">
		<img 
			v-if="hourly.icon" 
			:src="require(`../../assets/icons/${hourly.icon}.svg`)" 
			:alt="hourly.summary"
		>
		<span class="">{{ hourly.temperature }}°</span>
	</div>
</template>

<script>
	export default {
		props: ['hourly']
	}
</script>

<style lang="scss">
	.hourly-forecast {
		span {
			font-size: 1.2rem;
			font-weight: 600;
		}
	}
</style>
