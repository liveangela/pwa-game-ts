<template lang="pug">
  v-slide-y-transition
    v-container(fluid fill-height)
      v-layout(justify-center align-center)
        v-flex(xs8)
          v-form(v-model="isFormValid" ref="form" lazy-validation)
            v-text-field(
              v-model="formData.name"
              :rules="formRules.name"
              counter="16"
              hint="input your name"
              label="Name"
              required
            )
            v-layout(row justify-space-between mt-4)
              v-flex.text-xs-center(xs5)
                v-btn(
                  :disabled="!isFormValid"
                  :loading="isDialogShown"
                  @click="submit"
                ) Create
              v-flex.text-xs-center(xs5)
                v-btn(@click="clear") Clear
      fullscreen-loader(:isDialogShown="isDialogShown")
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Action} from 'vuex-class'
import FullscreenLoader from '@/components/FullscreenLoader.vue'

@Component({
  components: {
    FullscreenLoader,
  },
})
export default class CreateRole extends Vue {
  @Action
  private setActiveRole!: (role: object) => void

  private isFormValid = true
  private isDialogShown = false
  private formData = {
    name: '',
  }
  private formRules = {
    name: [
      (v: string) => !!v || 'Name is required',
      (v: string) => (v && v.length <= 16) || 'Max 16 chars',
    ],
  }

  get form() {
    return this.$refs.form as any
  }

  private submit() {
    if (this.form.validate()) {
      this.isDialogShown = true
      this.$accesslayer.createRole(this.formData).then((data: object) => {
        this.isDialogShown = false
        this.setActiveRole(data)
        this.$router.push('/')
      })
    }
  }

  private clear() {
    this.form.reset()
  }
}
</script>

