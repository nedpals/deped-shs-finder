<template>
<div>
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
      <b-message>
        Help us improve this site by contributing <a href="https://github.com/nedpals/k12-shs">here</a>.
      </b-message>
      <div class="columns">
        <div class="column is-12">
          <h1 class="title">{{ schl.school_name }}</h1>
          <p class="subtitle is-6 has-text-grey">
            <strong class="has-text-grey">{{ schl.region }}</strong> /
            <strong class="has-text-grey">{{ $parent.region_fixed(schl.region, schl.province) }}</strong>
            <br />
            {{ schl.municipality }}
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <h3 class="title is-4">Strands offered</h3>
          <div class="tags">
            <span class="tag has-text-centered is-medium" :key="p" :class="$parent.shsProgramTagClass(p)" v-for="p in schl.programs">{{ p }}</span>
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
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      schl: state => state.selected_school[0]
    })
  }
}
</script>

<style>

</style>
