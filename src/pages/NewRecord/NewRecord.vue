<template>
  <div class="q-pa-md">
    <PCRecordForm/>
  </div>
</template>

<script>
import { ref } from 'vue'
import PCRecordForm from '../components/PCRecordForm/PCRecordForm.vue'

export default {
  components: {
    PCRecordForm
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
