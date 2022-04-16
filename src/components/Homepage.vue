<script>
import axios from "axios";
</script>

<template>

  <div class="picture--space">

    <div class="picture--space--middle">
      <router-link to="/launches">
        <img
          class="picture--space--middle--link"
          src="../assets/images/decollage-carre.jpg"
          alt="Picture Space X Launches"
          title="Picture Space X Launches"
		      width="550" height="550"
        />
      </router-link>
	  <h1>LAUNCHES</h1>
    </div>

    <div class="picture--space--middle">
      <router-link to="/capsules">
        <img
          class="picture--space--middle--link"
          src="../assets/images/capsule-carre-plus-grand.jpg"
          alt="Picture Space X Capsules"
          title="Picture Space X Capsules"
		      width="550" height="550"
        />
      </router-link>
	  <h1>CAPSULES</h1>
    </div>

  </div>

</template>

<style scoped>

/* main */

.picture--space--middle {
  margin: 0 1%;
}

.picture--space--middle h1{
	display: flex;
	justify-content: center;
	padding: 40px;
	font-size: 60px;
	color: #ffb145;
}

.picture--space--middle--link {
	border-radius: 20px;
}

.picture--space--middle--link:hover {
    border-radius: 500px;
}


.picture--space {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 80px 20px;
  min-height: 500px;
}

@media only screen and (max-width: 900px) {
  .picture--space {
    display: flex;
    flex-direction: column;
    padding: 80px;
  }
}
</style>
