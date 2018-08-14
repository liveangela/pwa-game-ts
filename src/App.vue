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
        :to="list.path"
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
