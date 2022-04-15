<script setup>
	import Header from './components/Header.vue'
	import Homepage from './components/Homepage.vue'
	import Footer from './components/Footer.vue'
	import Launches from './components/Launches.vue'
  //import 'bootstrap/dist/css/bootstrap.css'
  //import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>

<template>
	<header>
		<Header />
	</header>
	<router-view />
	<footer>
		<Footer />
	</footer>
</template>

<style>
@import './assets/base.css';
@font-face {
  font-family: "FuturaStd";
  src: local("FuturaStd"),
   url(.assets/fonts/FuturaStd/FuturaStd-Medium.otf) format("opentype");
}
</style>
