import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/WeatherDashboard/Dashboard';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Dashboard',
			component: Dashboard
		},
		{
			path: '/location/:id',
			name: 'Location Detail',
			component: Detail
		}
	]
})