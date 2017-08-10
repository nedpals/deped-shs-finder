<template>
<div>
	<div v-if="listData" class="dib b--navy ba bb-0 br3">
		<div v-bind:key="school.school_id" class="fl w-100 pv1 ph2-ns bb" v-for="school in listData">
			<div class="fl w-70 pa3">
				<h3 class="f3 measure-narrow dark-blue ma0 mb2">{{ school.school_name }}</h3>
				<p class="f4 navy mv1">{{ school.region }} / {{ region_fixed(school.region, school.province) }} / {{ school.municipality }}</p>
				<ul class="pl0 ma0 list">
					<li class="dib pa2 br2 bg-navy white mr2 f5" v-for="p in school.programs">{{ p }}</li>
				</ul>
			</div>
			<div v-show="typeof school.tvl_specializations !== 'undefined' && school.tvl_specializations.length > 0" class="fl w-30 bg-blue white br3 pa3">
				<ul class="pl0 ma0 list">
					<li class="f5 lh-copy" v-for="s in school.tvl_specializations">{{ s }}</li>
				</ul>
			</div>
		</div>
	</div>
	<div v-if="loading">
		<h1 class="tc">LOADING!!!</h1>
	</div>
</div>
</template>

<script>
export default {
	props: ['loading', 'listData'],
	methods: {
		region_fixed(reg, prov) {
			return prov.replace(new RegExp(reg, "g"), "")
		}
	}
}
</script>