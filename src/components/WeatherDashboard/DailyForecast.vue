<template>
	<div class="daily-forecast">
		<h4 class="daily-forecast__day">{{ daysOfTheWeek }}</h4>
		<img 
			v-if="daily.icon" 
			:src="require(`../../assets/icons/${daily.icon}.svg`)" 
			:alt="daily.summary"
		>
		<div class="temperature">
			<span class="temperature__high">{{ roundupTemps(daily.temperatureHigh) }}</span>
			<span class="temperature__low">{{ roundupTemps(daily.temperatureLow) }}</span>
		</div>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		props: ['daily'],
		computed: {
			daysOfTheWeek() {
				return moment.unix(this.daily.time).format('dddd');
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
	.daily-forecast {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;

		span {
			font-size: 1.2rem;
			font-weight: 600;
		}

		img {
			max-width: 4rem;
		}

		.daily-forecast__day {
			text-align: left;
		}

		.daily-forecast__day,
		.temperature {
			flex: 1;
		}

		.temperature {
			display: flex;

			.temperature__low,
			.temperature__high {
				font-size: 1.6rem;
				flex: 1;
				text-align: right;
			}

			.temperature__low {
				color: rgba(white, 0.5);
			}
		}
	}
</style>
