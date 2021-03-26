<template>
	<div id="app">
		<Header/>
		<ShopContent/>
		<Footer/>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import ShopContent from './components/ShopContent.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		Header,
		ShopContent,
		Footer
	}
}

</script>
<style>
	@import "./assets/css/base.css";
	@import "./assets/css/grid.css";
	@import "./assets/css/main.css";
	@import "./assets/css/responsive.css";
	@import "./assets/css/login.css";
</style>