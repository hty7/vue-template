<template>
  <v-app>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-toolbar>
          <v-btn icon @click="toBack">
            <v-icon >arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>设置</v-toolbar-title>
        </v-toolbar>
        <template v-for="(item, index) in items">
          <v-list :key="index" style="margin-bottom: 20px;padding: 0;">
            <template v-for="(el, key) in item">
              <v-list-tile v-if="el.title" @click="dosome" :key="el.title">
                <v-list-tile-action v-show="el.action">
                  <v-icon :color="el.color">{{ el.action }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ el.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon v-if="el.icon && el.title !== '头像'">
                    <v-icon color="grey lighten-3">info</v-icon>
                  </v-btn>
                  <v-avatar size="30" class="indigo" v-else-if="el.icon && el.title === '头像'">
                    <v-icon dark>account_circle</v-icon>
                  </v-avatar>
                  <v-list-tile-title color="grey lighten-3" v-else>{{el.text}}</v-list-tile-title>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider :key="key"></v-divider>
            </template>
          </v-list>
        </template>
        <v-flex xs10 offset-xs1>
          <v-btn block color="info" @click="signOut">退出登陆</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      [
        {title: '头像', icon: true},
        {title: '昵称', icon: false, text: '18819425697'},
        {title: '收货地址', icon: true}
      ],
      [
        {action: 'star', color: 'blue darken-2', title: '我的等级', icon: true},
        {action: 'local_activity', color: 'yellow darken-2', title: '号码资料', icon: true}
      ],
      [
        {title: '当前版本', icon: false, text: 'v1.0.0'},
        {title: '关于我们', icon: true}
      ]
    ]
  }),
  computed: {
  },
  methods: {
    dosome () {},
    toBack () {
      this.$router.go(-1)
    },
    signOut () {
      this.$router.push({path: '/login'})
      this.$toast('退出登陆成功')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
