<template lang="pug">
  h2 {{type}}
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class Error extends Vue {
  @Prop({default: 404}) private type!: number
}
</script>

