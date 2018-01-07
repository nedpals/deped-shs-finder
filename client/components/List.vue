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
              <span :key="index" class="tag has-text-centered" :class="shsProgramTagClass(p)" v-for="(p, index) in school.programs">{{ p }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <b-loading :active.sync="loading" :canCancel="true"></b-loading>

  <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep" @close="closeModal" has-modal-card>
    <school-modal></school-modal>
  </b-modal>
</div>
</template>

<script>
const ListBox = () => import(/* webpackChunkName: "school-list-box" */ 'components/ListBox')
const SchoolModal = () => import(/* webpackChunkName: "school-modal" */ 'components/SchoolModal')

import { mapActions } from 'vuex'

export default {
  props: ['loading', 'listData'],
  components: {
    SchoolModal,
    ListBox
  },
  data() {
    return {
      isCardModalActive: false
    }
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
        const checkSchoolId = route.query.school_id !== this.$store.state.selected_school[0].school_id
        if (checkSchoolId || route.query.school_id) {
          this.findSchoolById(route.query.school_id)
        }
      })
    },
    closeModal() {
      this.$router.push('/')
    }
	}
}
</script>

<style>
.school-name {
  cursor: pointer;
}
</style>
