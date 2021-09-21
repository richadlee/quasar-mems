<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{formTitle}}</div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section style="max-width: 1080px" class="row q-gutter-md">
      <q-select
        v-model="line"
        :options="lineOptions"
        option-value="id"
        option-label="name"
        clearable
        emit-value
        map-options
        style="width:210px "
        outlined
        dense
        label="生产线 *"
      />
      <q-select
        v-model="process"
        :options="processOptions"
        option-value="id"
        option-label="name"
        clearable
        emit-value
        map-options
        style="width:210px "
        outlined
        dense
        label="工程 *"
      />
      <q-select
        v-model="event"
        :options="eventOptions"
        option-value="id"
        option-label="name"
        clearable
        emit-value
        map-options
        style="width:210px "
        outlined
        dense
        label="发生阶段 *"
      />
      <q-select
        v-model="progress"
        :options="progressOptions"
        option-value="id"
        option-label="name"
        clearable
        emit-value
        map-options
        style="width:210px "
        outlined
        dense
        label="进度 *"
      />
      <q-input
        v-model="device"
        counter
        maxlength="15"
        clearable
        style="width:210px "
        outlined
        dense
        label="设备"
      />
      <q-input
        v-model="occurDate"
        clearable
        style="width:210px "
        type="date"
        outlined
        dense
        hint="发生日期 *"
      />
      <q-input
        v-model="occurTime"
        clearable
        style="width:210px "
        type="time"
        outlined
        dense
        hint="发生时间 *"
      />
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="q-gutter-md row" style="max-width: 1080px" >
      <q-input
        v-model="title"
        counter
        maxlength="30"
        clearable
        style="width:662px "
        outlined
        label="标题 *"
      />
      <q-input
        v-model="symptom"
        type="textarea"
        style="width: 360px"
        clearable
        outlined
        dense
        label="现象 *"
      />
      <q-input
        v-model="symptom"
        type="textarea"
        style="width: 360px"
        clearable
        outlined
        dense
        label="原因 *"
      />
      <q-input
        v-model="symptom"
        type="textarea"
        style="width: 360px"
        clearable
        outlined
        dense
        label="对应"
      />
      <q-input
        v-model="symptom"
        type="textarea"
        style="width: 360px"
        clearable
        outlined
        dense
        label="对策"
      />
      <q-input
        v-model.number="downtime"
        type="number"
        outlined
        label="停机时间(分钟)"
        style="width: 210px"
      />
      <q-input
        v-model.number="frequency"
        type="number"
        outlined
        label="频度(回)"
        style="width: 210px"
      />
      <q-input
        v-model="handler"
        clearable
        style="width:210px "
        outlined
        label="担当 *"
      />
      <q-input
        v-model="fixBefore"
        type="date"
        clearable
        style="width:210px "
        outlined
        hint="计划 *"
      />
      <q-input
        v-model="note"
        clearable
        style="width:450px "
        outlined
        counter
        maxlength="50"
        label="备注 *"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const line = ref(null)
    const process = ref(null)
    const progress = ref(null)
    const event = ref(null)
    const device = ref(null)
    const occurDate = ref(null)
    const occurTime = ref(null)
    const title = ref(null)
    const symptom = ref(null)
    const cause = ref(null)
    const handled = ref(null)
    const prevention = ref(null)
    const downtime = ref(null)
    const frequency = ref(null)
    const fixBefore = ref(null)
    const handler = ref(null)
    const note = ref(null)

    const formTitle = ref('Hello')
    return {
      formTitle,
      line,
      process,
      event,
      device,
      occurDate,
      occurTime,
      title,
      symptom,
      progress,
      cause,
      handled,
      prevention,
      downtime,
      frequency,
      fixBefore,
      handler,
      note
    }
  }
}
</script>

<style>

</style>
