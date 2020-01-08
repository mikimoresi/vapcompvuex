import Vue from 'vue'
import VueRouter from 'vue-router'

function loadView(view) {
	
	return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}/${view}.vue`)
}

Vue.use(VueRouter)

export default () => {
  	return new VueRouter({
    	mode: 'history',
    	routes: [
			
			

			{ path: '*', component: () => import('@/views/Simplepage/Simplepage.vue'), meta: {ssr:true} },


			

			//{ path: '/ats/dashboard', component: loadView('Dashboard'),props:true },
			//{ path: '/ats/search_history', component: loadView('Tablelist'),props:true },
			//
			//{ path: '/ats/*/search/:id', component: loadView('Search'),props:true },
			//
			//{ path: '/crm/dashboard', component: loadView('Dashboard'),props:true },
			//{ path: '/crm/search_advanced', component: loadView('Formpage'),props:true },
			//{ path: '/crm/*/search/:id', component: loadView('Search'),props:true },
			//
			//{ path: '/ats/ads_ads', component: loadView('Formpage'),props:true },
			//
			//{ path: '/', component: loadView('Formpage'),props:true },
			//{
			//	path: '/',
			//	component: () => import('./components/Home.vue'),
			//	meta: {
			//		ssr: true
			//	}
			//},
			//{
			//	path: '/test/',
			//	component: () => import('./components/Home.vue'),
			//	meta: {
			//		ssr: true
			//	}
			//}
    	]
  	})
}