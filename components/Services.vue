<template>
  <section id="services" class="mt-20">
    <div class="w-3/4 mx-auto mb-10 text-center">
      <p class="mb-2 clear-both">
        <i class="fa-solid fa-atom text-5xl text-green-400"></i>
      </p>
      <p class="mb-1">
        <span class="font-mono text-xs text-green-400"
          >Modern &amp; Functional</span
        >
      </p>
      <h3 class="font-semibold text-3xl text-zinc-100">
        My extensive software repertoire
      </h3>
    </div>
    <div class="flex flex-row pt-5 pb-5 gap-x-8" id="scrollwheel">


      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i class="fa-regular fa-lightbulb text-6xl text-purple-800 mb-5"></i>
        <h3 class="text-xl font-semibold mb-1">Marketing &amp; Advertising</h3>
        <p class="text-xs text-zinc-700 animate-pulse">
          faucibus mollis risus eget fringilla. Integer
        </p>
      </div>

      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i class="fa-solid fa-fingerprint text-6xl text-red-800 mb-5"></i>
        <h3 class="text-xl font-semibold mb-1">Brand Identity Design</h3>
        <p class="text-xs text-zinc-700 animate-pulse">
          faucibus mollis risus eget fringilla. Integer
        </p>
      </div>
      
      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i class="fa-solid fa-chart-simple text-6xl text-orange-600 mb-5"></i>
        <h3 class="text-xl font-semibold mb-1">SEO, SEM &amp; Analytics</h3>
        <p class="text-sm text-zinc-700 animate-pulse">
          conubia nostra, per inceptos himenaeos
        </p>
      </div>
      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i class="fa-brands fa-react text-6xl text-sky-400 mb-5"></i>
        <h3 class="text-xl font-semibold mb-1">Modern App Development</h3>
        <p class="text-xs text-zinc-700 animate-pulse">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i
          class="fa-brands fa-wordpress-simple text-6xl text-zinc-100 mb-5"
        ></i>
        <h3 class="text-xl font-semibold mb-1">WordPress Development</h3>
        <p class="text-xs text-zinc-700 animate-pulse">
          Mauris eleifend molestie pretium Ut eleifend
        </p>
      </div>
      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i class="fa-brands fa-shopify text-6xl text-lime-500 mb-5"></i>
        <h3 class="text-xl font-semibold mb-1">eCommerce Development</h3>
        <p class="text-sm text-zinc-700 animate-pulse">
          quis. Etiam dignissim scelerisque quam non
        </p>
      </div>
      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i class="fa-brands fa-laravel text-6xl text-red-500 mb-5"></i>
        <h3 class="text-xl font-semibold mb-1">Laravel &amp; PHP Development</h3>
        <p class="text-xs text-zinc-700 animate-pulse">
          adipiscing elit. Nunc dui massa volutpat
        </p>
      </div>
      <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
        <i class="fa-regular fa-paper-plane text-6xl text-zinc-100 mb-5"></i>
        <h3 class="text-xl font-semibold mb-1">Email Marketing &amp; PPC</h3>
        <p class="text-xs text-zinc-700 animate-pulse">
          . Donec accumsan velit et pellentesque volutpat.
        </p>
      </div>
    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Flow+Circular&display=swap');

#services .flex-row div {
  background: rgba(255, 255, 255, 0.02);
  transition: all 400ms;
}

#services .flex-row div:hover {
  background: rgba(255, 255, 255, 0.03);
}

#scrollwheel {
  display: flex;
  overflow-x: scroll;
  scrollbar-color: dark !important;
}

/* width */

#scrollwheel::-webkit-scrollbar {
  height: 5px;
}

/* Track */

#scrollwheel::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.01);
}

#scrollwheel:hover::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
}

/* Handle */

#scrollwheel::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.02);
}

/* Handle on hover */

#scrollwheel:hover::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.04);
}

#services p {
  font-size: 10pt;
  line-height: 1.6;
  font-family: "Flow Circular", cursive !important;
}
</style>
