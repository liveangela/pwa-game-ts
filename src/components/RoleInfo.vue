<template lang="pug">
  v-flex(xs11)
    v-card
      v-card-title
        h4 {{activeRole.name}}
      v-divider
      v-list(dense)
        template(v-for="info in infoList")
          v-list-tile(:key="info.key")
            v-list-tile-content {{info.key}}:
            v-list-tile-content.align-end {{info.val}}
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {State} from 'vuex-class'

@Component
export default class RoleInfo extends Vue {
  @State
  private activeRole!: any

  private infoList: Array<{key: string, val: any}> = []

  private mounted() {
    const {activeRole, infoList} = this
    Object.keys(activeRole).forEach((key) => {
      if (key !== 'name') {        
        infoList.push({
          key,
          val: activeRole[key],
        })
      }
    })
  }
}
</script>

