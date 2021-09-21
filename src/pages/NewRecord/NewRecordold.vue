<template>
  <div class="q-pa-md">
    <record-form/>
  </div>
</template>

<script>
import { ref } from 'vue'
import RecordForm from '../components/RecordForm/RecordForm.vue'

export default {
  components: {
    RecordForm
  },
  setup () {
    return {
      step: ref(1)
    }
  }
}
</script>

<style>

</style>
