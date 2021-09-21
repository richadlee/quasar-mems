<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{formTitle}}</div>
    </q-card-section>
    <q-separator></q-separator>
    <q-form
      @reset="onReset"
      @submit="onSubmit"
      ref="form"
      >
      <q-card-section class="row q-gutter-md" style="max-width: 1080px">
        <q-select
          v-model="pcSelected"
          :options="pcs"
          clearable
          emit-value
          map-options
          style="width:180px "
          outlined
          label="区分 *"
          lazy-rules
          :rules="[val => val !== null && val !== '' || '请选择']"
        />
        <q-input type="date" hint="发生时间 *" style="width:180px " v-model="occurAt" outlined :rules="[val => val !== null && val !== '' || '请选择']"/>
        <q-input type="date" hint="计划对应时间" style="width:180px " v-model="fixBefore" outlined/>
        <q-input label="担当" style="width:180px " v-model="handler" outlined/>
        <q-input label="进度" style="width:180px " v-model="progress" outlined/>
        <q-input label="确认结果" style="width:180px " v-model="check" outlined/>
        <div style="width: 100%">
          <q-input
            label="问题点 *"
            v-model="content"
            style="width: 100%"
            clearable
            outlined
            lazy-rules
            :rules="[val => val !== null && val !== '' || '请输入问题点']"
           />
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script>
import { ref } from 'vue'
import { createNewRecord } from '../../../api/RecordApi'
import { useStore } from 'vuex'

export default {
  setup () {
    const formTitle = ref('New Record')
    const pcSelected = ref('')
    const occurAt = ref(new Date().toISOString().split('T')[0])
    const fixBefore = ref('')
    const handler = ref('')
    const progress = ref('')
    const check = ref('')
    const content = ref('')
    const form = ref(null)

    const $store = useStore()
    const pcs = $store.state.pcrecord.pcs

    const onReset = () => {
      pcSelected.value = ''
      fixBefore.value = ''
      handler.value = ''
      progress.value = ''
      check.value = ''
      content.value = ''
      occurAt.value = ''
    }
    const postNewRecord = async (data) => {
      const status = await createNewRecord(data)
      if (status === 200) {
        console.log(status)
        form.value.reset()
      }
    }
    const onSubmit = () => {
      const data = {
        distinction: pcSelected.value,
        content: content.value,
        fixBefore: fixBefore.value,
        occurAt: occurAt.value,
        progress: progress.value,
        handler: handler.value,
        check: check.value
      }
      postNewRecord(data)
    }
    return {
      formTitle,
      pcSelected,
      pcs,
      fixBefore,
      occurAt,
      handler,
      progress,
      check,
      content,
      form,
      onReset,
      onSubmit
    }
  }
}

</script>

<style>

</style>
