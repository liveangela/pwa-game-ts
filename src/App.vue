<template lang="pug">
  v-app.wrapper
    v-content
      router-view
    v-bottom-nav(
      :active.sync="bottomNav"
      :color="color"
      :value="isBottomNavShown"
      app
    )
      v-btn(
        v-for="(list, i) in bottomList"
        :key="i"
        :to="list.path"
        dark
      )
        span {{list.text}}
        v-icon {{list.icon}}
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {State} from 'vuex-class'

@Component
export default class App extends Vue {
  @State
  private isBottomNavShown!: boolean

  private bottomNav = 0
  private bottomList = [
    {text: 'Video', icon: 'ondemand_video', color: 'blue-grey', path: '/'},
    {text: 'Music', icon: 'music_note', color: 'teal', path: '/about'},
    {text: 'Book', icon: 'book', color: 'brown', path: '/book'},
    {text: 'Image', icon: 'image', color: 'indigo', path: '/image'},
    {text: 'Web', icon: 'web', color: 'deep-purple', path: '/web'},
  ]

  get color() {
    const {bottomNav, bottomList} = this
    return bottomList[bottomNav].color
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  max-width 1024px
  margin 0 auto
</style>