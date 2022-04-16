<script>
import axios from "axios";
export default {
  data() {
    return {
      capsules: "",
    };
  },

  mounted() {
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((response) => (this.capsules = response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<template>
  <div>
    <h1 class="title">Capsules</h1>

	<div class="content">
    	<div class="card" v-for="capsule in capsules">
			<h3 class="name">{{ capsule.capsule_serial }}</h3>
			<div class="card_img">
				<img src="../assets/images/capsule.png" alt="">
			</div>
			<p><span class="subtitle">Status: </span>{{ capsule.status }}</p>
			<p><span class="subtitle">Number of landings : </span>{{ capsule.landings }}</p>
			<p >
				<span class="subtitle">Additional informations : </span>
				<span v-if="capsule.details != null">{{ capsule.details }}</span>
				<span v-else>No additionnal informations</span>
			</p>
			<p><span class="subtitle">Missions :</span></p>
			<div class="missions">
				<div v-if="capsule.missions != null" class="one_mission" v-for="mission in capsule.missions">
					<div class="name">{{ mission.name }}</div>
					<div>Flight : {{ mission.flight }}</div>
				</div>
				<div v-else>No missions</div>
			</div>
		</div>
    </div>
  </div>
</template>

<style scoped>

</style>