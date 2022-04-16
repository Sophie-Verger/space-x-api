<script setup>
	import Header from './components/Header.vue'
	import Homepage from './components/Homepage.vue'
	import Footer from './components/Footer.vue'
	import Launches from './components/Launches.vue'
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
@import './assets/css/base.css';
@import './assets/css/space-x.css';
@font-face {
  font-family: "FuturaStd";
  src: local("FuturaStd"),
   url(.assets/fonts/FuturaStd/FuturaStd-Medium.otf) format("opentype");
}
</style>
