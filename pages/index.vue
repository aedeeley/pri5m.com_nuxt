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
  </main>
</template>

<script>
export default {
  mounted: function () {
    this.$nextTick(function () {
      const element = document.querySelector("#scrollwheel");

      element.addEventListener("wheel", (event) => {
        event.preventDefault();

        element.scrollBy({
          left: event.deltaY < 0 ? -60 : 60,
        });
      });

      const scrollWheel = document.getElementById("scrollwheel");
      const flavoursScrollWidth = scrollWheel.scrollWidth;

      window.addEventListener("load", () => {
        self.setInterval(() => {
          if (scrollWheel.scrollLeft !== flavoursScrollWidth) {
            scrollWheel.scrollTo(scrollWheel.scrollLeft + 1, 0);
          }
        }, 40);
      });
    });
  },
};
</script>
