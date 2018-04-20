<template>
  <v-app id="inspire" :dark="controlsOption.hints">
    <my-header></my-header>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import MyHeader from './children/header'
import MyFooter from './children/footer'
export default {
  components: {
    MyFooter, MyHeader
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['controlsOption'])
  },
  methods: {
  }
}
</script>
