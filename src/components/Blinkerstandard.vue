<template>
	<div>
		<h2>blinker component made with standard API</h2>
		<h1 v-if="blink">BLINK :)</h1>
		<h1 v-else>WAITING BLINK :(</h1>
	</div>
	
</template>

<script>
  export default {
    name: 'blinkerstandard',
    
    computed: {
        
        blink: function(){
          	return this.$store.state.blink;
		}
    }
  }
</script>

<style scoped>
	h2 {
		color: grey;
		border-top:1px solid black;
	}
</style>
