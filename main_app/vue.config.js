const isProd = process.env.NODE_ENV === 'production'

const path = require('path')

module.exports = {
	productionSourceMap: false,
	baseUrl: process.env.BASE_URL,
  	css: {
    	extract: true,
    	sourceMap: false
	},
	configureWebpack: {
	    resolve: {
	      	alias: {
	        	"@alt_src": path.resolve(__dirname, '../comps_repo/')
	    	}
		}
	}
}