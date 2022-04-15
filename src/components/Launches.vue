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
		<h1 class="title">launches</h1>

		<div class="content">
    	<div class="card" v-for="launch in launches">
			<h3 class="name">{{ launch.mission_name }}</h3>
			<div class="card_img">
				<img :src="launch.links.mission_patch" alt="">
			</div>
			
			<p><span class="subtitle">Launch year : </span>{{ launch.launch_year }}</p>
			<p><span class="subtitle">Launch site : </span>{{ launch.launch_site.site_name_long }}</p>
			<p><span class="subtitle">Successful launch : </span><span v-if="launch.launch_success == true">Yes</span><span v-else>No</span></p>
			<p >
				<span class="subtitle">Additional informations : </span>
				<span v-if="launch.details != null">{{ launch.details }}</span>
				<span v-else>No additionnal informations</span>
			</p>
		</div>
    </div>
  	</div>


</template>
