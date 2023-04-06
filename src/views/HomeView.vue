
<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!--<TheWelcome />-->
    <h1>{{ $t("home.header") }}</h1>
    <p>{{ $t("home.created_by", {tool: "Lokalise"}) }}</p>
    <p>{{ $t("home.num_visits", 30) }}</p>
    <p>{{ $d(new Date(), "longFormat") }}</p>
  </main>
</template>

<script>
  //import { useI18n } from 'vue-i18n'
  //export default {
  //  setup() {
  //    const { translation } = useI18n()
  //    return { translation }
  //  }
  //}
</script>
