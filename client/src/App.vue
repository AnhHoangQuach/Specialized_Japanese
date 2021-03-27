<template>
	<div id="app">
		<div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div class="object" id="object_one"></div>
                    <div class="object" id="object_two"></div>
                    <div class="object" id="object_three"></div>
                    <div class="object" id="object_four"></div>
                </div>
            </div>
        </div>
		<Header/>
		<router-view/>
		<Footer/>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import $ from 'jquery'

export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	mounted() {
		$("#loading").delay(300).fadeOut(500);
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