<template>
  <q-expansion-item
    popup
    icon="search"
    label="条件搜索"
    caption="点击进入条件搜索"
  >
    <q-card>
      <q-separator />
      <q-card-section>
        <div class="row q-gutter-md" style="max-width: 1070px">
          <!-- 下拉条件选择搜索 -->
          <q-select
            v-for="item in stringSelectors"
            v-model="item.model.value"
            dense
            clearable
            use-input
            outlined
            fill-input
            hide-selected
            input-debounce="0"
            :label="item.label"
            :options="item.options.value"
            @filter="((val, update, abort) => {filterFn(val, update, abort, item.options, item.stringOptions)})"
            :key="item.model"
            style="width: 200px"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <!-- 日期范围搜索 -->
          <q-input clearable outlined dense v-model="dateHappenFrom" mask="date" label="发生日期(从)" style="width: 200px">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="dateHappenFrom">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input clearable outlined dense v-model="dateHappenTo" mask="date" label="发生日期(到)" style="width: 200px">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="dateHappenTo">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>
      <!-- 输入搜索 -->
      <q-card-section class="q-pt-none">
        <div class="row q-gutter-md" style="max-width: 865px">
          <q-select
            rounded
            dense
            outlined
            clearable
            style="width: 180px"
            label="分类"
            v-model="inputSearchType"
            :options="inputSearchOptions"
          />
          <q-input
            dense
            outlined
            clearable
            class="col"
            label="输入搜索"
            v-model="inputString"
            :disable="!inputSearchType"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-separator />
      <!-- 按钮 -->
      <q-card-section>
        <div>
          <q-btn label="搜索" type="submit" color="primary" icon="search"/>
          <q-btn label="重置" type="reset" color="primary" class="q-ml-md" icon="refresh" outline/>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { ref } from 'vue'
// Test Data
const stringLineOptions = ['GEN4-PCU-ASSY', 'GEN4-PCU-IPM']
const stringProcessOptions = ['LabelSticky', 'IPM Set']
const stringEventOptions = ['立上', '量产']
const stringProgressOptions = ['原因排查', '对应中', '完了']
const inputSearchOptions = ['ID', '标题', '现象', '原因', '对应', '对策', '担当']

export default {
  setup () {
    const line = ref(null)
    const lineOptions = ref(stringLineOptions)
    const process = ref(null)
    const processOptions = ref(stringProcessOptions)
    const event = ref(null)
    const eventOptions = ref(stringEventOptions)
    const progress = ref(null)
    const progressOptions = ref(stringProgressOptions)
    const dateHappenFrom = ref(null)
    const dateHappenTo = ref(null)
    const inputSearchType = ref(null)
    const inputString = ref(null)

    const filterFn = (val, update, abort, options, stringOptions) => {
      update(() => {
        const needle = val.toLowerCase()
        options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
    const stringSelectors = [
      { model: line, label: '生产线', options: lineOptions, stringOptions: stringLineOptions },
      { model: process, label: '工程', options: processOptions, stringOptions: stringProcessOptions },
      { model: event, label: '发生阶段', options: eventOptions, stringOptions: stringEventOptions },
      { model: progress, label: '进度', options: progressOptions, stringOptions: stringProgressOptions }
    ]
    return {
      stringSelectors,
      filterFn,
      dateHappenFrom,
      dateHappenTo,
      inputSearchType,
      inputSearchOptions,
      inputString
    }
  }
}
</script>

<style></style>
