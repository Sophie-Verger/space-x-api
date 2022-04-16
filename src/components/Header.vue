<script setup>
import { BNavbarNav } from "bootstrap-vue";
</script>

<template>
  <div>

    <nav class="navbar">

      <div class="navbar--brand">
      
        <router-link class="title--brand" to="/">
          <img
            class="title--picto"
            src="../assets/images/logo-space.svg"
            alt="Logo Space X"
            title="Logo Space X"
            width="55" height="55"
          />
        </router-link>

        <h2>
          <router-link class="title--brand logo" to="/">SPACE X</router-link>
        </h2>

      </div>

      <div class="navbar--links">

        <ul>
        
          <router-link class="navbar--links logo" to="/">
            <img
              id="purple"
              class="title--picto"
              src="../assets/images/logo-space.svg"
              alt="Logo Space X"
              title="Logo Space X"
              width="55" height="55"
            />
          </router-link>

          <li>
            <router-link id="purple" to="/">HOME</router-link>
          </li>

          <router-link class="navbar--links logo" to="/launches">
            <img
              class="title--picto"
              src="../assets/images/picto-launches.svg"
              alt="Picto Space X Launches"
              title="Picto Space X Launches"
              width="55" height="55"
            />
          </router-link>

          <li>
            <router-link id="purple" to="/launches">LAUNCHES</router-link>
          </li>

          <router-link class="navbar--links logo" to="/capsules">
            <img
              class="title--picto"
              src="../assets/images/picto-capsules.svg"
              alt="Picto Space X Capsules"
              title="Picto Space X Capsules"
              width="55" height="55"
            />
          </router-link>

          <li>
            <router-link id="purple" to="/capsules">CAPSULES</router-link>
          </li>

        </ul>

      </div>

    </nav>

  </div>
</template>

<style scoped>
/* navbar */

.navbar {
  background-color:#331867;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar--brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 40px;
}

.title--brand {
  padding: 20px;
  text-decoration: none;
  color: white;
  font-size: 30px;
  list-style: none;
}

.navbar--links ul {
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin: 0;
  padding: 0;
}

.navbar--links li {
  list-style: none;
  padding-right: 40px;
}

.navbar--links li a {
  text-decoration: none;
  padding: 20px;
  display: block;
}

#purple {
  color: white;
}

@media only screen and (max-width: 990px) {
  #purple {
    display: none;
    width: 100%;
  }

  .navbar--links logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

  .navbar--links ul {
    width: 100%;
    flex-direction: row;
  }

  .navbar--links li {
    text-align: center;
    padding: 20px;
  }

  .navbar--links li a {
    padding: 0.1em 1em;
  }

  .navbar--links.active {
    display: flex;
    padding-bottom: 40px;
  }
}

</style>
