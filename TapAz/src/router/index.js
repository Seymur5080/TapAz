import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'
import SignComp from '../components/SignComp.vue'
import AddComp from '../components/AddComp.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeComp
		},
		{
			path: '/sign',
			name: 'sign',
			component: SignComp
		},
		{
			path: '/add',
			name: 'add',
			component: AddComp
		},
	]
})

export default router
