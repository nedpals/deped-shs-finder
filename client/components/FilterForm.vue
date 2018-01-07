<template>
<div>
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
                  <b-checkbox-button v-for="(p, index) in programs" type="is-fullwidth" :key="index" :native-value="p">
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
</template>

<script>
export default {
  props: ['programsList'],
  data () {
    return {
        programs: this.programsList
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
