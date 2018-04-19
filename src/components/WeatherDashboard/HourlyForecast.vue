<template>
	<div class="hourly-forecast">
		<span class="hourly-forecast__hour">{{ hourlyHours }}</span>
		<img 
			v-if="hourly.icon" 
			:src="require(`../../assets/icons/${hourly.icon}.svg`)" 
			:alt="hourly.summary"
		>
		<span class="hourly-forecast__temp">{{ roundupTemps(hourly.temperature) }}°</span>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		props: ['hourly'],
		computed: {
			hourlyHours() {
				return moment.unix(this.hourly.time).format('ha');
			}
		},
		methods: {
			roundupTemps(temp) {
				return temp.toFixed();
			}
		}
	}
</script>

<style lang="scss">
	.hourly-forecast {
		span {
			font-size: 1.2rem;
			font-weight: 600;
		}

		img {
			margin: 0.5rem 0;
		}
	}
</style>
