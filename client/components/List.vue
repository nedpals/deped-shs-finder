<template>
<div>
	<div class="dib pv2 pv2-ns ba bb-0 br2">
		<div v-bind:key="school.school_id" class="fl w-100 ph3 ph4-ns bb" v-for="school in listData">
			<div class="fl w-70 pa1">
				<h3>{{ school.school_name }}</h3>
				<p>{{ school.region }} / {{ school.province }} / {{ school.municipality }}</p>
				<ul class="pl0 list">
					<li class="dib mr2 f5 lh-copy" v-for="p in school.programs.split(', ')">{{ p }}</li>
				</ul>
			</div>
			<div class="fl w-30 pa1">
				<ul class="pl0 list">
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
	computed: {
		// region_fixed(prov, reg) {
		// 	var region = reg.split('');
		// 	var province = prov.split('');

		// }
		// tracks(t) {
		// 	return t.split(', ')
		// }
	}
}
</script>