<template>
  <main>
    <Header />
    <div class="container max-w-3xl mx-auto pl-10 pr-10">
      <Newsletter />
    </div>
    <Footer />
    <Scripts />
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutPage",
});
</script>
