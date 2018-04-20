<template>
  <v-toolbar app fixed dark clipped-left color="primary">
    <v-avatar class="blue lighten-3" size="30" @click="toSetting">
      <v-icon dark>account_circle</v-icon>
    </v-avatar>
    <v-toolbar-title style="font-size: 15px">1881425697</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-bottom-sheet v-model="sheet">
      <v-btn slot="activator" icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-subheader>Setting</v-subheader>
        <v-list-tile v-for="item in items" :key="item.title" @click="mounted(item.mode)">
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <v-icon color="grey lighten-3">info</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    items: [
      { title: '退出登陆', mode: 'signOut' },
      { title: 'Google+' }
    ]
  }),
  methods: {
    toSetting () {
      this.$router.push({path: '/setting'})
    },
    mounted (el) {
      switch (el) {
        case 'signOut':
          return this.signOut()
        default:
          return ''
      }
    },
    signOut () {
      this.$router.push({path: '/login'})
      this.$toast('退出登陆成功')
    }
  }
}
</script>
