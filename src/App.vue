<template lang="pug">
  v-app
    v-content
      v-container(fluid)
        router-view
    v-bottom-nav(
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      app
    )
      v-btn(
        v-for="(list, i) in bottomList"
        :key="i"
        dark
      )
        span {{list.text}}
        v-icon {{list.icon}}
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private bottomNav = 0
  private bottomList = [
    {text: 'Video', icon: 'ondemand_video', color: 'blue-grey'},
    {text: 'Music', icon: 'music_note', color: 'teal'},
    {text: 'Book', icon: 'book', color: 'brown'},
    {text: 'Image', icon: 'image', color: 'indigo'},
    {text: 'Web', icon: 'web', color: 'deep-purple'},
  ]

  get color() {
    const {bottomNav, bottomList} = this
    return bottomList[bottomNav].color
  }
}
</script>
