<template>
  <div class="pa3 pa4-ns">
  	<nav>
	  <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Site Name</a>
	  <div class="tc pb3">
	    <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
	    <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
	    <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
	    <a class="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
	  </div>
	</nav>
    <list v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10" v-bind:loading="isLoading" v-bind:list-data="schoolData"></list>
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
    	schoolData: state => state.schools
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
