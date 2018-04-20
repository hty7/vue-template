<template>
  <v-footer app fixed>
    <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
      <v-btn v-for="v in routers" :key="v.path" flat color="indigo" :to="v.path">
        <span>{{v.title}}</span>
        <v-icon>{{v.icon}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    e1: 'home'
  }),
  computed: {
    routers () {
      return this.$t('routers')
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
