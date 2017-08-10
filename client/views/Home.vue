<template>
<div>
  <nav class="bg-blue pa3 pa4-ns">
	 <a class="link dim white b f1 f-headline-ns tl db mb3 mb4-ns" href="#" title="Home">Site Name</a>
	  <div class="tc pb3">
	    <a class="link dim white f6 f5-ns dib mr3" href="#" title="Home">Home</a>
	    <a class="link dim white f6 f5-ns dib mr3" href="#" title="About">About</a>
	    <a class="link dim white f6 f5-ns dib mr3" href="#" title="Store">Store</a>
	    <a class="link dim white f6 f5-ns dib" href="#" title="Contact">Contact</a>
	  </div>
  </nav>
  <div class="f3 fl w-100 pv3 mb5 dib bg-dark-blue pa3 pa4-ns">
  	<div class="fl mh7 w-60 pr3">
  		<input placeholder="Search..." class="pa3 w-100 bg-navy b--none white br2" type="text" />
  		<ul class="list pl0 ma0 mt3 tc white">
  			<li v-for="p in programs" class="dib pa2">
  				<input type="checkbox" :id="p" :value="p">
  				<label :for="p" class="lh-copy">{{ p }}</label>
  			</li>
  		</ul>
  	</div>
  </div>
  <div class="pa3 pa4-ns">
    <list v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10" v-bind:loading="isLoading" v-bind:list-data="schoolData"></list>
  </div>
  <footer class="dib w-100 ph4 fixed left-0 right-0 bottom-0 bg-navy white">
  	<p class="f5">&copy; 2017 </p>
  </footer>
</div>
</template>

<style src="tachyons/css/tachyons.css"></style>

<script>
import List from 'components/List'
import { mapActions, mapState } from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'

export default {
  data() {
  	return {
  		pageNum: 1,
  		isLoading: false
  	}
  },
  methods: {
  	...mapActions([ 'loadData' ]),
    loadMore() {
      this.isLoading = true;

      setTimeout(() => {
        this.loadData(this.pageNum++)
        this.isLoading = false;
      }, 500);
    }
  },
  computed: {
  	...mapState({
    	schoolData: state => state.schools,
    	regions: state => state.regions,
    	programs: state => state.programs
    })
  },
  components: {
    List
  },
  directives: {
  	infiniteScroll
  }
}
</script>
