<template>
<div>
  <section class="hero is-light is-small">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-gapless is-centered">
          <div class="column is-narrow is-9-widescreen is-10-desktop is-10-tablet is-12-mobile">
            <div class="columns is-multiline">
              <!-- <div class="column has-text-centered is-12">
                <h1 class="title is-size-1">
                  Help pick what's right for you.
                </h1>
                <h2 class="subtitle">
                  Lorem ipsum, hello world this is a static text.
                </h2>
              </div> -->
              <filter-form :programs-list="programs"></filter-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid" id="results">
    <div class="columns is-narrow is-mobile is-centered">
      <div class="column is-12-tablet is-10-desktop">

        <transition name="fade-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <list
                v-if="!searchMode"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="isLoading"
                infinite-scroll-distance="100"
                :loading="isLoading"
                :list-data="schoolData">
          </list>
        </transition>
        <transition name="fade-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div v-if="searchMode">
            <section class="section">
              <div class="container-fluid">
                <div class="columns">
                  <div class="column is-four-fifths">
                    <h2 class="title">Results</h2>
                    <h2 class="subtitle">
                      {{ searchResults.length }} schools found
                    </h2>
                  </div>
                  <div class="column">
                    <button class="button is-large is-fullwidth is-danger is-outlined" @click="resetResults">Close</button>
                  </div>
                </div>
              </div>
            </section>
            <list
                  :loading="isLoading"
                  :list-data="searchResults">
            </list>
          </div>
        </transition>
      </div>
    </div>
  </div>
  <footer class="dib w-100 ph4 fixed left-0 right-0 bottom-0 bg-navy white">
  	<p class="f5">&copy; 2017 </p>
  </footer>
</div>
</template>

<script>
const FilterForm = () => import(/* webpackChunkName: "site-filter-form" */ 'components/FilterForm')
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
    },
    resetResults() {
      this.$store.commit('SWITCH_SEARCH', false)
    }
  },
  computed: {
  	...mapState({
    	schoolData: state => state.schools,
    	regions: state => state.regions,
      programs: state => state.programs,
      searchMode: state => state.search.searchMode,
      searchResults: state => state.search.results
    })
  },
  components: {
    List,
    FilterForm
  },
  directives: {
  	infiniteScroll
  }
}
</script>


<style>
#results {
  margin-top: 2rem;
}
</style>
