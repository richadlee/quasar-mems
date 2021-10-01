<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 1200px">
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="ProductLogs" label="通过履历" />
          <q-tab name="ProcessStartEndLogs" label="工程开始/结束履历" />
          <q-tab name="EquipOperationLogs" label="设备操作履历" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="ProductLogs">
            <div class="text-h6 q-mb-lg">通过履历查询</div>
            <ProductLogSearchBox/>
          </q-tab-panel>

          <q-tab-panel name="ProcessStartEndLogs">
            <div class="text-h6 q-mb-lg">工程开始/结束履历查询</div>
            <ProcessStartEndSearchBox/>
          </q-tab-panel>

          <q-tab-panel name="EquipOperationLogs">
            <div class="text-h6 q-mb-lg">设备操作履历查询</div>
            <EquipOperationLogsSearchBox/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ProductLogSearchBox from '../components/ProductLogSearchBox/ProductLogSearchBox.vue'
import ProcessStartEndSearchBox from '../components/ProcessStartEndSearchBox/ProcessStartEndSearchBox.vue'
import EquipOperationLogsSearchBox from '../components/EquipOperationLogsSearchBox/EquipOperationLogsSearchBox.vue'

export default {
  components: {
    ProductLogSearchBox,
    ProcessStartEndSearchBox,
    EquipOperationLogsSearchBox
  },
  setup () {
    const tab = ref('ProductLogs')
    return {
      tab
    }
  }
}
</script>

<style>

</style>
