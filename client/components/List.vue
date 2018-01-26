<template>
<div>
  <b-loading :active.sync="loading" :canCancel="true"></b-loading>
  <div v-if="listData" class="columns is-multiline">
    <div class="column is-4" :key="school.school_id"  v-for="school in listData">
        <list-box :schools-data="school"></list-box>
    </div>
  </div>
  <b-modal v-if="$store.state.selectedSchool" :active.sync="isCardModalActive" :width="640" scroll="keep" @close="closeModal" has-modal-card>
    <school-modal :school-id="schoolIdSelected"
                  :colorize-tags="shsProgramTagClass">
    </school-modal>
  </b-modal>
</div>
</template>

<script>
import ListBox from 'components/ListBox'
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
      isCardModalActive: false,
      schoolIdSelected: this.$route.query.school_id
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
      this.schoolIdSelected = school_id
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

<style lang="css" scoped>

</style>
