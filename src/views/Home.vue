<template lang="pug">
  v-container(fluid fill-height)
    v-layout(justify-center align-center)
      role-info
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import RoleInfo from '@/components/RoleInfo.vue'

@Component({
  components: {
    RoleInfo,
  },
})
export default class Home extends Vue {}
</script>
