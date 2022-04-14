<script>
import axios from 'axios';
export default {

    data () {
      return {
        launches: ''
      }
    },

    mounted () {
      axios.get('https://api.spacexdata.com/v3/launches')
	  .then(response => (
		  
		  this.launches = response.data
	)).catch(function (error) {
      // handle error
      console.log(error);
    })

  }
}
</script>

<template>
	<div> 
		<h1>launches</h1>
		<a href=""></a>
		<div v-for="launche in launches">
			<p>capsule {{ launches.launche_id }}</p>
			<div>{{ launche }}</div>
		</div>
  	</div>
</template>
