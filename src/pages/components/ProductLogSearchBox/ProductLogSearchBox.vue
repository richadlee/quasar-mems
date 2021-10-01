<template>
  <div class="q-gutter-md">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-xm">
      <q-input
        outlined
        label="TYPE"
        v-model="type"
        maxlength="4"
        :rules="[ val => val && val.length === 4 || '请输入正确的型号']"
        style="width: 400px"
      />
      <q-input
        outlined
        label="GOUKI"
        v-model="gouki"
        maxlength="6"
        :rules="[ val => val && val.length === 6 || '请输入正确的号机']"
        style="width: 400px"
        clearable
      />
      <div>
        <q-btn label="Search" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>

    <q-separator dark />

    <q-table
      :pagination="initialPagination"
      title="ProductLogs"
      dense
      :rows="rows"
      :columns="columns"
      row-key="PL_INSPECTDATETIME"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import * as ITApi from '../../../api/ITApi'

const columns = [
  { name: 'PL_LINENO', align: 'center', label: 'PL_LINENO', field: 'PL_LINENO' },
  { name: 'PL_PROCESSCODE', align: 'center', label: 'PL_PROCESSCODE', field: 'PL_PROCESSCODE' },
  { name: 'PL_INSPECTDATETIME', align: 'center', label: 'PL_INSPECTDATETIME', field: 'PL_INSPECTDATETIME', sortable: true },
  { name: 'PL_TYPE', align: 'center', label: 'PL_TPYE', field: 'PL_TYPE' },
  { name: 'PL_GOUKINO', align: 'center', label: 'PL_GOUKINO', field: 'PL_GOUKINO' },
  { name: 'PL_INSPECTRESULT', align: 'center', label: 'PL_INSPECTRESULT', field: 'PL_INSPECTRESULT' },
  { name: 'PL_CHECKERNO', align: 'center', label: 'PL_CHECKERNO', field: 'PL_CHECKERNO' },
  { name: 'PL_MODIFYDATETIME', align: 'center', label: 'PL_MODIFYDATETIME', field: 'PL_MODIFYDATETIME' }
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
      rows.value = await ITApi.getProductLogs(type, gouki)
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
