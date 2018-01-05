<template>
<div>
  <navbar></navbar>
  <section class="hero is-light is-small">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-gapless is-centered">
          <div class="column is-narrow is-half">
            <div class="columns is-multiline">
              <div class="column has-text-centered is-12">
                <h1 class="title is-size-1">
                  Help pick what's right for you.
                </h1>
                <h2 class="subtitle">
                  Lorem ipsum, hello world this is a static text.
                </h2>
              </div>
              <div class="column is-12">
                <div class="columns is-multiline">
                  <div class="field column is-12 is-marginless">
                    <div class="control">
                      <input type="text" class="input is-large" placeholder="Search" />
                    </div>
                  </div>
                  <div class="field column is-4 is-marginless">
                    <label class="label">Region</label>
                    <div class="control">
                      <input type="text" class="input" placeholder="region" />
                    </div>
                  </div>
                  <div class="field column is-4  is-marginless">
                    <label class="label">Province</label>
                    <div class="control">
                      <input type="text" class="input" placeholder="region" />
                    </div>
                  </div>
                  <div class="field column is-4 is-marginless">
                    <label class="label">Municipality / City</label>
                    <div class="control">
                      <input type="text" class="input" placeholder="region" />
                    </div>
                  </div>
                  <div class="field column is-8 is-marginless">
                    <label class="label">Programs</label>
                    <div class="control">
                      <b-field>
                          <b-checkbox-button
                              v-for="p in programs"
                              :native-value="Nop"
                              :type="shsProgramTagClass(p)">
                              <span>{{ p }}</span>
                          </b-checkbox-button>
                      </b-field>
                    </div>
                  </div>
                  <div class="field column is-4 is-marginless">
                    <div class="control">
                      <button class="button is-link is-fullwidth is-large">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container-fluid" id="results">
    <div class="columns is-narrow is-centered">
      <div class="column is-10">
        <list v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="100" v-bind:loading="isLoading" v-bind:list-data="schoolData"></list>
      </div>
    </div>
  </div>
  <footer class="dib w-100 ph4 fixed left-0 right-0 bottom-0 bg-navy white">
  	<p class="f5">&copy; 2017 </p>
  </footer>
</div>
</template>

<script>
import List from 'components/List'
import Navbar from 'components/Navbar'
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
    Navbar
  },
  directives: {
  	infiniteScroll
  }
}
</script>

<style src="bulma/css/bulma.css">
</style>

<style>
.programs-checkbox-filter > .shs-program {
  display: inline;
  padding: 0.48rem;
}

#results {
  margin-top: 2rem;
}
</style>
