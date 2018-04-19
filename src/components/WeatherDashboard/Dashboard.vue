<template>
	<div class="dashboard">
		<half-circle-spinner
			:animation-duration="1000"
			:size="60"
			v-if="isLoading"
			color="#ffffff"
		/>

		<div v-else class="weather-details">
			<div class="weather-details__header">
				<h2>{{ weather.summary }}</h2>
				<span>Wind Speed: {{ weather.windSpeed }}mps</span>
			</div>
			<div class="weather-details__icon">
				<img 
					v-if="weather.icon" 
					:src="require(`../../assets/icons/${weather.icon}.svg`)" 
					:alt="weather.summary"
				>
			</div>
			<div class="weather-details__temperatures">
				<span>{{ roundupTemps(weather.temperature) }}°</span>
				<span>{{ weather.humidity }}°</span>
			</div>
			<router-link to="location/edinburgh" class="weather-details__link">
				View the daily forcast
			</router-link>
		</div>

	</div>
</template>

<script>
	import { HalfCircleSpinner } from 'epic-spinners';
	const API = 'a1d49c663e7af63a0de24a508e41157d';

	export default {
		name: 'Dashboard',
		data() {
			return {
				isLoading: true,
				lat: '55.9411289',
				long: '-3.3454205',
				weather: {}
			}
		},
		components: {
			HalfCircleSpinner
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
					this.weather = weather.currently;
					this.isLoading = false;
				} catch(e) {
					console.log(e);
				}
			},
			roundupTemps(temp) {
				return temp.toFixed();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dashboard {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		flex-grow: 1;
	}

	.weather-details {
		max-width: 20rem;
		width: 90%;

		.weather-details__header {
			text-align: center;
			margin-bottom: 2.5rem;

			span {
				font-size: 1.4rem;
			}
		}

		.weather-details__icon {
			margin-bottom: 2.5rem;
		}

		.weather-details__temperatures {
			display: flex;
			justify-content: space-evenly;
			padding: 0.5rem;
			margin-bottom: 1rem;
			border-radius: 0.5rem;
			background-color: rgba(0, 0, 0, 0.06);

			span {
				font-size: 2rem;
			}
		}

		.weather-details__link {
			font-size: 1.2rem;
			text-decoration: underline;
			font-weight: 600;
		}
	}
</style>
