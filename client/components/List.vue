<template>
<div>
  <div v-if="listData" class="columns is-multiline">
    <div class="column is-4" v-bind:key="school.school_id"  v-for="school in listData">
      <div class="box">
        <div class="columns is-multiline">
          <div class="column is-12 has-text-centered">
            <h3 class="title is-5"><a href="#" @click="openModal(school.school_id)">{{ school.school_name }}</a></h3>
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
          <!-- <div v-show="typeof school.tvl_specializations !== 'undefined' && school.tvl_specializations.length > 0" class="fl w-30 bg-blue white br3 pa3">
            <ul class="pl0 ma0 list">
              <li class="f5 lh-copy" v-for="s in school.tvl_specializations">{{ s }}</li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <b-loading :active.sync="loading" :canCancel="true"></b-loading>

  <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep" @close="closeModal">
      <div class="card">
          <div class="card-image">
              <figure class="image is-4by3">
                  <img src="static/img/placeholder-1280x960.png" alt="Image">
              </figure>
          </div>
          <div class="card-content">
              <div class="media">
                  <div class="media-left">
                      <figure class="image is-48x48">
                          <img src="static/img/placeholder-1280x960.png" alt="Image">
                      </figure>
                  </div>
                  <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                  </div>
              </div>

              <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
              </div>
          </div>
      </div>
  </b-modal>
</div>
</template>

<script>
export default {
  props: ['loading', 'listData'],
  data() {
    return {
      isCardModalActive: false
    }
  },
	methods: {
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
      this.$router.push({ query: { school_id: school_id } })
    },
    closeModal() {
      this.$router.push('/')
    }
	}
}
</script>
