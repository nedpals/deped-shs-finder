<template>
<div>
  <div v-if="listData" class="columns is-multiline">
    <div class="column is-4" v-bind:key="school.school_id"  v-for="school in listData">
      <div class="box">
        <div class="columns is-multiline">
          <div class="column is-12 has-text-centered">
            <h3 class="school-name title is-5" @click="openModal(school.school_id)">{{ school.school_name }}</h3>
            <p class="subtitle is-6 has-text-grey">
              <strong class="has-text-grey">{{ school.region }}</strong> /
              <strong class="has-text-grey">{{ region_fixed(school.region, school.province) }}</strong>
              <br />
              {{ school.municipality }}
            </p>
            <div class="tags">
              <span class="tag has-text-centered" :class="shsProgramTagClass(p)" v-for="p in school.programs">{{ p }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <b-loading :active.sync="loading" :canCancel="true"></b-loading>

  <b-modal v-if="schl" :active.sync="isCardModalActive" :width="640" scroll="keep" @close="closeModal" has-modal-card>
  <div class="modal-card">
    <header class="modal-card-head">
      <nav class="level" style="width:100%;">
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5">
              <strong>#{{ schl.school_id }}</strong>
            </p>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post">
              </p>
              <p class="control">
                <button class="button">
                  Copy
                </button>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column is-12">
          <h1 class="title">{{ schl.school_name }}</h1>
          <p class="subtitle is-6 has-text-grey">
            <strong class="has-text-grey">{{ schl.region }}</strong> /
            <strong class="has-text-grey">{{ region_fixed(schl.region, schl.province) }}</strong>
            <br />
            {{ schl.municipality }}
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <h3 class="title is-4">Strands offered</h3>
          <div class="tags">
            <span class="tag has-text-centered is-medium" :key="p" :class="shsProgramTagClass(p)" v-for="p in schl.programs">{{ p }}</span>
          </div>
        </div>
        <div class="column is-half">
          <h3 class="title is-4">TVL Specializations:</h3>
          <div v-show="typeof schl.tvl_specializations !== 'undefined' && schl.tvl_specializations.length > 0">
            <ul>
              <li :key="index" v-for="(s, index) in schl.tvl_specializations">{{ s }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h3 class="title is-4">Additional info:</h3>
          <p>Coming soon</p>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button">Search on Google</button>
    </footer>
  </div>
  </b-modal>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: ['loading', 'listData'],
  mounted() {
    if (this.$store.route.query.school_id) {
      this.openModal(this.$store.route.query.school_id)
    }
  },
  data() {
    return {
      isCardModalActive: false
    }
  },
  computed: {
    ...mapState({
      schl: state => state.selected_school[0]
    })
  },
	methods: {
    ...mapActions([ 'findSchoolById' ]),
		region_fixed(reg, prov) {
			return prov.replace(new RegExp(reg, "g"), "")
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
    },
    openModal(school_id) {
      this.isCardModalActive = true
      this.$router.push({ query: { school_id: school_id } }, (route) => {
        this.findSchoolById(route.query.school_id)
      })
    },
    closeModal() {
      this.$router.push('/')
      this.$store.commit("LOAD_SCHOOL", [])
    }
	}
}
</script>

<style>
.school-name {
  cursor: pointer;
}
</style>
