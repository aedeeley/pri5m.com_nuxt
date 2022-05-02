<template>
  <main>
    <Header />
    <div class="container max-w-3xl mx-auto pl-10 pr-10">
      <Hero />
      <Services />
      <Trusted />

      <hr class="mt-20 mb-20 border-4 border-zinc-900" />

      <CaseStudy />
      <HomeBlog />
      <Newsletter />
    </div>
    <Footer />
    <Scripts />
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
