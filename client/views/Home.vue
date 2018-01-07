<template>
<div>
  <navbar></navbar>
  <section class="hero is-light is-small">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-gapless is-centered">
          <div class="column is-narrow is-9-widescreen is-10-desktop is-10-tablet is-12-mobile">
            <filter-form programs-list="programs"></filter-form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid" id="results">
    <div class="columns is-narrow is-mobile is-centered">
      <div class="column is-12-tablet is-10-desktop">
        <list v-infinite-scroll="loadMore"
              infinite-scroll-disabled="isLoading"
              infinite-scroll-distance="100"
              :loading="isLoading"
              :list-data="schoolData">
        </list>
      </div>
    </div>
  </div>
  <footer class="dib w-100 ph4 fixed left-0 right-0 bottom-0 bg-navy white">
  	<p class="f5">&copy; 2017 </p>
  </footer>
</div>
</template>

<script>
const Navbar = () => import(/* webpackChunkName: "navbar" */ 'components/Navbar')
const FilterForm = () => import(/* webpackChunkName: "site-filter-form" */ 'components/FilterForm')
const List = () => import(/* webpackChunkName: "school-list" */ 'components/List')

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
      this.isLoading = true

      setTimeout(() => {
        this.loadData(this.pageNum++)
        this.isLoading = false
      }, 500)
    },
    shsProgramTagClass(programType) {
      return {
        "is-danger": programType === "ABM",
        "is-success": programType === "HUMSS",
        "is-dark": programType === "STEM",
        "is-warning": programType === "GAS",
        "is-info": programType === "TVL",
        "is-link": programType === "Arts and Design",
        "is-primary": programType === "Sports"
      }
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
    List,
    Navbar,
    FilterForm
  },
  directives: {
  	infiniteScroll
  }
}
</script>

<style src="bulma/css/bulma.css">
</style>

<style>
#results {
  margin-top: 2rem;
}
</style>
