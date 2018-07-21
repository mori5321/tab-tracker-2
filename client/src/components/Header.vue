<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span
        @click="navigateTo('/')"
        class="main-title">
        TabTracker
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>
        Browser
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo('login')">
          Login
      </v-btn>

      <v-btn flat dark
        @click="navigateTo('register')">
          SignUp
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.main-title {
  cursor: pointer;
}

.main-title:hover {
  color: #348DAA;
}

</style>
