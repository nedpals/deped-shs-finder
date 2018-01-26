<template>
<div>
  <div class="column is-12" @keyup.enter="submitFilter">
    <div class="columns is-multiline">
      <div class="field column is-12 is-marginless">
        <div class="control">
          <input type="text" v-model="filtered.q" class="input is-large" placeholder="Search" />
        </div>
      </div>
      <!-- <div class="field column is-4 is-marginless">
        <label class="label">Region</label>
        <div class="control">
          <input type="text" v-model="filtered.region" class="input" placeholder="region" />
        </div>
      </div>
      <div class="field column is-4  is-marginless">
        <label class="label">Province</label>
        <div class="control">
          <input type="text" v-model="filtered.province" class="input" placeholder="region" />
        </div>
      </div>
      <div class="field column is-4 is-marginless">
        <label class="label">Municipality / City</label>
        <div class="control">
          <input type="text" v-model="filtered.municipality" class="input" placeholder="region" />
        </div>
      </div> -->
      <div class="field column is-8 is-marginless">
        <label class="label">Programs</label>
        <div class="control" style="width:130%;">
          <b-field>
              <b-checkbox-button v-model="filtered.programs" :type="shsProgramTagClass(p)" v-for="(p, index) in programs" :key="index" :native-value="p">
                  <span>{{ p }}</span>
              </b-checkbox-button>
          </b-field>
        </div>
      </div>
      <div class="field column is-4 is-marginless">
        <div class="control">
          <button @click="submitFilter" class="button is-link is-fullwidth is-large">Search</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ['programsList'],
  data () {
    return {
        programs: this.programsList,
        filtered: {
          q: '',
          region: '',
          province: '',
          municipality: '',
          programs: []
        }
    }
  },
  methods: {
    ...mapActions(['searchSchool']),
    submitFilter() {
      this.$store.commit('SAVE_FILTER', this.filtered)
      this.$store.commit('SWITCH_SEARCH', true)
      this.searchSchool(this.$store.state.search.submitted)
    },
    shsProgramTagClass (programType) {
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
  }
}
</script>

<style lang="css" scoped>
.programs-checkbox-filter > .shs-program {
  display: inline;
  padding: 0.48rem;
}
</style>
