import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const roters = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', name: 'Home', component: Home}
	]
})

export default roters