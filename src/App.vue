<template>
  <v-app>
    <v-app-bar app dark>
      <v-row justify="center" no-gutters>
        <span v-for="route in routes" :key="route.path" >
          <v-btn :to="route.path" variant="text" class="mx-2" rounded="xl">
            {{ route.name }}
          </v-btn>
        </span>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { routes } from "@/router/index.js"

export default {
  name: 'App',

  data() {
    return {
      routes
    }
  }
};
</script>
