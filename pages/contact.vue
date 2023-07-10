<template>
  <main>
    <Header />
    <div class="container max-w-5xl mx-auto pl-10 pr-10 py-10">
      <h1 class="text-7xl font-semibold mb-1 leading-none"><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-purple-600 to-orange-600">C0NTACT</span></h1>
      <Newsletter />
    </div>
    <Footer />
    <Scripts />
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ContactPage",
});
</script>
