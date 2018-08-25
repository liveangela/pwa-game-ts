<template lang="pug">
  v-container(fluid)
    v-layout(column align-center)
      img.mb-5(src="@/assets/logo.png" alt="Vuetify.js")
      blockquote
        | &#8220;First, solve the problem. Then, write the code.&#8221;
        footer
          small
            em
              | &mdash;John Johnson
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {State} from 'vuex-class'

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string

  @State
  private activeRole!: object

  private mounted() {
    console.log(JSON.stringify(this.activeRole))
  }
}
</script>

<style scoped lang="stylus">
h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li 
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
