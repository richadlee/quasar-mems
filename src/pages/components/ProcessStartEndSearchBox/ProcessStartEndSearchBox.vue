<template>
  <div class="q-gutter-md">
    <q-form @submit="onSubmit(type, gouki)" @reset="onReset" class="q-gutter-xm">
      <q-input
        outlined
        label="TYPE"
        v-model="type"
        maxlength="4"
        :rules="[ val => val && val.length === 4 || '请输入正确的型号']"
        style="width: 400px"
        lazy-rules
      />
      <q-input
        outlined
        label="GOUKI"
        v-model="gouki"
        maxlength="6"
        :rules="[ val => val && val.length === 6 || '请输入正确的号机']"
        style="width: 400px"
        clearable
        lazy-rules
      />
      <div>
        <q-btn label="Search" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>

    <q-separator dark />

    <q-table
      :pagination="initialPagination"
      title="ProcessStartEndLogs"
      dense
      :rows="rows"
      :columns="columns"
      row-key="PPSEL_START_END_DATETIME"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import * as ITApi from '../../../api/ITApi'

const columns = [
  { name: 'PPSEL_LINENO', align: 'center', label: 'PPSEL_LINENO', field: 'PPSEL_LINENO' },
  { name: 'PPSEL_PROCESSCODE', align: 'center', label: 'PPSEL_PROCESSCODE', field: 'PPSEL_PROCESSCODE' },
  { name: 'PPSEL_START_END_DATETIME', align: 'center', label: 'PPSEL_START_END_DATETIME', field: 'PPSEL_START_END_DATETIME', sortable: true },
  { name: 'PPSEL_TYPE', align: 'center', label: 'PPSEL_TYPE', field: 'PPSEL_TYPE' },
  { name: 'PPSEL_GOUKINO', align: 'center', label: 'PPSEL_GOUKINO', field: 'PPSEL_GOUKINO' },
  { name: 'PPSEL_START_END_CLASS', align: 'center', label: 'PPSEL_START_END_CLASS', field: 'PPSEL_START_END_CLASS' },
  { name: 'PPSEL_CHECKERNO', align: 'center', label: 'PPSEL_CHECKERNO', field: 'PPSEL_CHECKERNO' },
  { name: 'PPSEL_MODIFYDATETIME', align: 'center', label: 'PPSEL_MODIFYDATETIME', field: 'PPSEL_MODIFYDATETIME' }
]

export default {
  setup () {
    const type = ref('')
    const gouki = ref('')
    const rows = ref([])
    const initialPagination = ref({
      page: 1,
      rowsPerPage: 30
    })

    const onRest = () => {
      type.value = ''
      gouki.value = ''
    }

    const onSubmit = async (type, gouki) => {
      rows.value = await ITApi.getProcessStartEndLogs(type, gouki)
    }

    return {
      type,
      gouki,
      initialPagination,
      onRest,
      onSubmit,
      rows,
      columns
    }
  }

}
</script>

<style>

</style>
