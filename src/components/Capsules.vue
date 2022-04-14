<script>
import axios from 'axios';
export default {

    data () {
      return {
        capsules: ''
      }
    },

    mounted () {
      axios.get('https://api.spacexdata.com/v3/capsules')
	  .then(response => (
		  
		  this.capsules = response.data
	)).catch(function (error) {
      // handle error
      console.log(error);
    })

  }
}
</script>

<template>
	<div> 
		<h1>Capsules</h1>
		<a href=""></a>
		<div class="lauches"  v-for="capsule in capsules">
			<p>capsule {{ capsule.capsule_serial }}</p>
			<div>{{ capsule }}</div>
		</div>
  	</div>
</template>
