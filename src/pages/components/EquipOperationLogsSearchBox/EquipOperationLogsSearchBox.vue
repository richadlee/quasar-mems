<template>
  <div class="q-gutter-md">
    <q-form @submit="onSubmit(line)" @reset="onReset" class="q-gutter-xm">
      <q-input
        outlined
        label="LINE"
        v-model="line"
        maxlength="2"
        :rules="[ val => val && val.length === 2 || '请输入正确的产线代号']"
        style="width: 400px"
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
      title="EquipOperationLogs"
      dense
      :rows="rows"
      :columns="columns"
      row-key="EOL_OPERATION_DATETIME"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import * as ITApi from '../../../api/ITApi'

const columns = [
  { name: 'EOL_LINENO', align: 'center', label: 'EOL_LINENO', field: 'EOL_LINENO' },
  { name: 'EOL_PROCESSCODE', align: 'center', label: 'EOL_PROCESSCODE', field: 'EOL_PROCESSCODE' },
  { name: 'EOL_CHECKERNO', align: 'center', label: 'EOL_CHECKERNO', field: 'EOL_CHECKERNO' },
  { name: 'EOL_OPERATION_DATETIME', align: 'center', label: 'EOL_OPERATION_DATETIME', field: 'EOL_OPERATION_DATETIME' },
  { name: 'EOL_OPERATION_CLASS', align: 'center', label: 'EOL_OPERATION_CLASS', field: 'EOL_OPERATION_CLASS' },
  { name: 'EOL_MODIFYDATETIM', align: 'center', label: 'EOL_MODIFYDATETIM', field: 'EOL_MODIFYDATETIM' }
]

export default {
  setup () {
    const line = ref('')
    const rows = ref([])
    const initialPagination = ref({
      page: 1,
      rowsPerPage: 30
    })

    const onRest = () => {
      line.value = ''
    }

    const onSubmit = async (line) => {
      rows.value = await ITApi.getEquipOperationLogs(line)
    }

    return {
      line,
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
