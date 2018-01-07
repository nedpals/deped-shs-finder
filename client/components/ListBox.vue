<template>
<div>
    <div class="box">
        <div class="columns is-multiline">
          <div class="column is-12 has-text-centered">
            <h3 class="school-name title is-5" @click="$parent.openModal(school.school_id)">{{ school.school_name }}</h3>
            <p class="subtitle is-6 has-text-grey">
              <strong class="has-text-grey">{{ school.region }}</strong> /
              <strong class="has-text-grey">{{ $parent.region_fixed(school.region, school.province) }}</strong>
              <br />
              {{ school.municipality }}
            </p>
            <div class="tags">
              <span :key="index"
                    class="tag has-text-centered"
                    :class="$parent.shsProgramTagClass(p)"
                    v-for="(p, index) in school.programs">
                    {{ p }}
              </span>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  props: ['schoolData'],
  data() {
    return {
      school: this.schoolData
    }
  }
}
</script>

<style lang="css" scoped>
</style>
