<template>
  <div class="q-pa-md col q-gutter-md">
    <q-badge outline align="middle" color="primary">
      对应进度: {{ count }}
    </q-badge>
    <q-table
      title="PCU ASSY PC问题点记录"
      :rows="rows"
      :columns="columns"
      row-key="ID"
      :pagination="initialPagination"
      separator="vertical"
      :filter="filter"
      style="max-width: 1900px"
    >
      <template v-slot:top-right>
        <div class="q-gutter-xs">
          <q-btn color="white" icon="manage_search" text-color="primary" @click="getNoCheck" label="只看未确认记录"/>
          <q-btn color="white" icon="manage_search" text-color="primary" @click="getNoFixs" label="只看未对应记录"/>
          <q-btn color="white" icon="refresh" text-color="primary" @click="getRecordLists" label="查看全部记录"/>
          <q-input
            dense
            debounce="300"
            color="primary"
            v-model="filter"
            placeholder="Search In Table"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="distinction" :props="props">
            {{ props.row.distinction }}
            <q-popup-edit v-model="props.row.distinction" buttons v-slot="scope" @save="(v, iv) => {recordApi.distinctionPatch(v, iv, props.row.id)}">
              <q-select v-model="scope.value" dense autofocus keyup.enter="scope.set" :options = pcs />
            </q-popup-edit>
          </q-td>
          <q-td key="content" :props="props" style="text-align: left">
            {{ props.row.content }}
            <q-popup-edit v-model="props.row.content" buttons v-slot="scope" @save="(v, iv) => {recordApi.contentPatch(v, iv, props.row.id)}">
              <q-input type="textarea" v-model="scope.value" dense autofocus keyup.enter="scope.set"/>
            </q-popup-edit>
          </q-td>
          <q-td key="occurAt" :props="props">
            {{ props.row.occurAt }}
            <q-popup-edit v-model="props.row.occurAt" buttons v-slot="scope" @save="(v, iv) => {recordApi.occurAtPatch(v, iv, props.row.id)}">
              <q-input type="date" v-model="scope.value" dense autofocus keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="priority" :props="props" >
            <q-rating
              style="width: 65px"
              v-model="props.row.priority"
              size="1.5em"
              color="red"
              icon="error_outline"
              icon-selected="error"
              :max="props.row.priority"
            />
            <q-popup-edit v-model="props.row.priority" buttons v-slot="scope" @save="(v, iv) => {recordApi.priorityPatch(v, iv, props.row.id)}">
              <div class="text-center">
                <q-rating
                  v-model="scope.value"
                  size="2.5em"
                  color="red"
                  icon="error_outline"
                  icon-selected="error"
                  max="3"
                />
              </div>
            </q-popup-edit>
          </q-td>
          <q-td key="fixBefore" :props="props">
            {{ props.row.fixBefore }}
            <q-popup-edit v-model="props.row.fixBefore" buttons v-slot="scope" @save="(v, iv) => {recordApi.fixBeforePatch(v, iv, props.row.id)}">
              <q-input type="date" v-model="scope.value" dense autofocus keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="progress" :props="props">
            {{ props.row.progress }}
            <q-popup-edit v-model="props.row.progress" buttons v-slot="scope" @save="(v, iv) => {recordApi.progressPatch(v, iv, props.row.id)}">
              <q-input v-model="scope.value" dense autofocus keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="handler" :props="props">
            {{ props.row.handler }}
            <q-popup-edit v-model="props.row.handler" buttons v-slot="scope" @save="(v, iv) => {recordApi.handlerPatch(v, iv, props.row.id)}">
              <q-input v-model="scope.value" dense autofocus keyup.enter="scope.set"/>
            </q-popup-edit>
          </q-td>
          <q-td key="check" :props="props">
            <q-badge color="positive" v-if="props.row.check === 'OK'">
              <q-icon name="done" />
              {{ props.row.check }}
            </q-badge>
            <div v-else-if="props.row.check === ''">
            </div>
            <q-badge color="warning" v-else>
              {{ props.row.check }}
            </q-badge>
            <q-popup-edit v-model="props.row.check" buttons v-slot="scope" @save="(v, iv) => {recordApi.checkPatch(v, iv, props.row.id)}">
              <q-input v-model="scope.value" dense autofocus keyup.enter="scope.set"/>
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { columns } from './Constatns'
import { useStore } from 'vuex'
import * as recordApi from '../../api/RecordApi'

export default {
  name: 'home',
  setup () {
    const initialPagination = ref({
      page: 1,
      rowsPerPage: 10
    })
    const rows = ref([])
    const filter = ref('')
    const $store = useStore()
    const count = ref('')
    const pcs = $store.state.pcrecord.pcs

    const getRecordLists = async () => {
      rows.value = await recordApi.getAllRecords()
      const checkedCount = await recordApi.getCheckedCount()
      const allCount = await recordApi.getAllCount()
      count.value = checkedCount.count + '/' + allCount.count
    }

    const getPriorityLists = async () => {
      rows.value = await recordApi.getPriorityRecords()
      const checkedCount = await recordApi.getCheckedCount()
      const allCount = await recordApi.getAllCount()
      count.value = checkedCount.count + '/' + allCount.count
    }
    const getNoFixs = async () => {
      rows.value = await recordApi.getNoFixRecords()
      console.log(rows.value)
    }
    const getNoCheck = async () => {
      rows.value = await recordApi.getNoCheckRecords()
      console.log(rows.value)
    }
    onMounted(getPriorityLists)
    return {
      initialPagination,
      columns,
      rows,
      filter,
      recordApi,
      count,
      getRecordLists,
      getNoFixs,
      getNoCheck,
      pcs
    }
  }
}
</script>
