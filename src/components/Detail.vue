<template>
	<div class="detail">
		<half-circle-spinner
			:animation-duration="1000"
			:size="60"
			v-if="isLoading"
			color="#ffffff"
		/>

		<div v-else class="weather-details">
			<div class="weather-details__header">
				<h2>{{ $route.params.id }}</h2>
				<span>{{ weather.hourly.summary }}</span>
			</div>
			<div class="weather-details__hourly-forecast">
				<h5>Today</h5>
				<ul class="hourly-forecast-list">
					<li 
						:key="index" 
						v-for="(hourly, index) in weather.hourly.data"
					>
						<HourlyForecast :hourly="hourly" />
					</li>
				</ul>
			</div>
			<div class="weather-details__daily-forecast">
				<ul class="daily-forecast-list">
					<li 
						:key="index" 
						v-for="(daily, index) in weather.daily.data"
					>
						<DailyForecast :daily="daily" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { HalfCircleSpinner } from 'epic-spinners';
	import HourlyForecast from './WeatherDashboard/HourlyForecast';
	import DailyForecast from './WeatherDashboard/DailyForecast';

	const API = 'a1d49c663e7af63a0de24a508e41157d';

	export default {
		name: 'Dashboard',
		data() {
			return {
				isLoading: true,
				lat: '55.9411289',
				long: '-3.3454205',
				weather: []
			}
		},
		components: {
			HalfCircleSpinner,
			HourlyForecast,
			DailyForecast
		},
		created: function() {
			this.fetchData();
		},
		computed: {
			location() {
				return `${this.lat},${this.long}`;
			}
		},
		methods: {
			fetchData: async function() {
				try {
					const results = await fetch(
						`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API}/${this.location}?units=auto`
					);
					const weather = await results.json();
					this.weather = weather;
					this.isLoading = false;
				} catch(e) {
					console.log(e);
				}
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		flex-grow: 1;

		h2 {
			text-transform: capitalize;
		}
	}

	.weather-details {
		width: 100%;

		.weather-details__header {
			margin-bottom: 2.5rem;
		}

		.weather-details__hourly-forecast {
			h5 {
				text-align: left;
				text-transform: uppercase;
				margin-bottom: 0.5rem;
				margin-left: 1.5rem;
			}

			.hourly-forecast-list {
				display: flex;
				flex-wrap: nowrap;
				overflow-x: auto;
				overflow: -moz-scrollbars-none;
				-ms-overflow-style: none;
				border-top: 1px solid rgba(white, 0.2);
				border-bottom: 1px solid rgba(white, 0.2);
				padding: 1.5rem 0;

				&::-webkit-scrollbar {
					display: none;
				}

				li {
					flex: 1 0 auto;
					width: 3rem;
					margin: 0 1.5rem;
				}
			}
		}

		.weather-details__daily-forecast {
			.daily-forecast-list {
				li {
					padding: 1.5rem 1.5rem 0;
				}
			}
		}
	}
</style>
