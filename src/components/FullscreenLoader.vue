<template lang="pug">
  v-dialog(
        v-model="isDialogShown"
        width="60%"
        hide-overlay
        persistent
      )
        v-card(color="primary" dark)
          v-card-text
            | {{loadingText}}
            v-progress-linear(
              class="mb-0"
              color="white"
              indeterminate
            )
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class FullscreenLoader extends Vue {
  @Prop()
  private isDialogShown!: boolean
  @Prop({default: 'loading...'})
  private loadingText!: string
}
</script>

