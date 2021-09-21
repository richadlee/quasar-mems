<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          MEMS App
        </q-toolbar-title>
        <!-- TODO:版本号修改为变量 -->
        <div>MEMS Beta v1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="250"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          overline
          class="text-h5"
        >
          MENU
        </q-item-label>

        <Menu
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from 'src/components/Menu.vue'

const linksList = [
  {
    title: 'Home',
    caption: '主页',
    icon: 'home',
    path: '/'
  },
  {
    title: 'New Record',
    caption: '创建记录',
    icon: 'create',
    path: '/create'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
