<template>
<div>
  <b-loading :active.sync="loading" :canCancel="true"></b-loading>
  <div v-if="listData" class="columns is-multiline">
    <div class="column is-4" v-bind:key="school.school_id"  v-for="school in listData">
        <list-box :school-data="school"></list-box>
    </div>
  </div>
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
        this.findSchoolById(route.query.school_id)
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
