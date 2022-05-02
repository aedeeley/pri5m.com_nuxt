<template>
  <main>
    <Header />
    <div class="container max-w-3xl mx-auto pl-10 pr-10">
      <section id="hero">
        <div class="flex flex-row pt-20 pb-20">
          <div class="basis-8/12 text-zinc-200">
            <h1 class="text-5xl font-semibold mb-1">Alex Deeley</h1>
            <p class="mb-4">
              Full-Stack Developer at
              <span class="font-semibold">Digital Panda</span>
            </p>
            <p class="text-zinc-500">
              Obsessed with fast, compliant and reactive website &amp; app
              development since 2001. Also produces <a href="#">music</a> and
              <a href="#">artworks</a>.
            </p>
            <p class="mt-10 buttons">
              <a
                href="#"
                class="rounded-full font-medium bg-gradient-to-r from-indigo-500 to-blue-400 p-3 pl-6 pr-6 mr-2 tracking-wider"
                >View my work</a
              >
              <a
                href="#"
                class="rounded-full font-medium bg-gradient-to-b from-zinc-900 to-zinc-800 p-3 pl-6 pr-6 tracking-wider"
                >Visit playground</a
              >
            </p>
          </div>
          <div class="basis-1/12">&nbsp;</div>
          <div class="basis-3/12">
            <img
              class="float-right mt-7"
              src="~assets/img/avatar.png"
              alt="It 's me, Alex Deeley"
            />
          </div>
        </div>
      </section>

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
            <i class="fa-brands fa-react text-6xl text-sky-400 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">React</h3>
            <p class="text-xs text-zinc-700">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-laravel text-6xl text-red-500 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Laravel</h3>
            <p class="text-xs text-zinc-700">
              adipiscing elit. Nunc dui massa volutpat
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-node-js text-6xl text-lime-500 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Node.js</h3>
            <p class="text-xs text-zinc-700">
              non velit vel, tempor dignissim ipsum
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i
              class="fa-brands fa-wordpress-simple text-6xl text-zinc-100 mb-5"
            ></i>
            <h3 class="text-xl font-semibold mb-1">WordPress</h3>
            <p class="text-xs text-zinc-700">
              Mauris eleifend molestie pretium Ut eleifend
            </p>
          </div>

          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-vuejs text-6xl text-green-500 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Vue.js</h3>
            <p class="text-xs text-zinc-700">
              pretium sem quis blandit. Sed molestie lacus
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-bootstrap text-6xl text-violet-500 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Bootstrap</h3>
            <p class="text-xs text-zinc-700">
              molestie nibh vitae mollis libero Sed ac
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i
              class="fa-brands fa-phoenix-framework text-6xl text-orange-600 mb-5"
            ></i>
            <h3 class="text-xl font-semibold mb-1">Phoenix</h3>
            <p class="text-xs text-zinc-700">
              viverra, posuere libero nec, pretium augue
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-github text-6xl text-zinc-100 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Github</h3>
            <p class="text-xs text-zinc-700">
              Donec fringilla ante sit amet sapien
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-php text-6xl text-violet-400 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">PHP</h3>
            <p class="text-xs text-zinc-700">Class aptent taciti sociosqu ad</p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-git-alt text-6xl text-orange-600 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Git</h3>
            <p class="text-sm text-zinc-700">
              conubia nostra, per inceptos himenaeos
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-erlang text-6xl text-red-800 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Erlang</h3>
            <p class="text-xs text-zinc-700">
              faucibus mollis risus eget fringilla. Integer
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-symfony text-6xl text-zinc-100 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Symfony</h3>
            <p class="text-xs text-zinc-700">
              vestibulum mi id velit mollis faucibus. Quisque
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-drupal text-6xl text-sky-300 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Drupal</h3>
            <p class="text-sm text-zinc-700">
              placerat tortor sit amet malesuada tempus.
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-solid fa-c text-6xl text-blue-500 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Contentful</h3>
            <p class="text-sm text-zinc-700">
              Nunc placerat est metus, ornare porta quam tempor
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-magento text-6xl text-orange-500 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Magento</h3>
            <p class="text-sm text-zinc-700">
              quis. Etiam dignissim scelerisque quam non
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-solid fa-database text-6xl text-zinc-100 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Database</h3>
            <p class="text-xs text-zinc-700">
              . Donec accumsan velit et pellentesque volutpat.
            </p>
          </div>
          <div class="flex-none w-56 text-zinc-200 rounded-lg p-8">
            <i class="fa-brands fa-angular text-6xl text-red-700 mb-5"></i>
            <h3 class="text-xl font-semibold mb-1">Angular</h3>
            <p class="text-sm text-zinc-700">
              Cras accumsan sagittis nibh, eu consectetur
            </p>
          </div>
        </div>
      </section>

      <section id="trusted">
        <h4 class="text-sm text-zinc-500 text-center mt-10 tracking-widest">
          Trusted by
        </h4>
        <br />
        <div class="flex flex-row mb-10 gap-x-5 text-zinc-500">
          <div class="basis-1/6 text-5xl text-center">
            <img src="~assets/img/salesforce.svg" alt="Salesforce" />
          </div>
          <div class="basis-1/6 text-5xl text-center">
            <img src="~assets/img/stripe.svg" alt="stripe" />
          </div>
          <div class="basis-1/6 text-5xl text-center">
            <img src="~assets/img/vans.svg" alt="Vans" />
          </div>
          <div class="basis-1/6 text-5xl text-center">
            <img src="~assets/img/adidas.svg" alt="Adidas" />
          </div>
          <div class="basis-1/6 text-5xl text-center">
            <img src="~assets/img/hulu.svg" alt="Hulu" />
          </div>
          <div class="basis-1/6 text-5xl text-center">
            <img src="~assets/img/cisco.svg" alt="Cisco" />
          </div>
        </div>
      </section>

      <hr class="mt-20 mb-20 border-4 border-zinc-900" />

      <section id="case-study" class="mt-20 mb-20">
        <div class="flex flex-row mb-5">
          <div class="basis rounded-lg overflow-hidden relative">
            <a href="#"
              ><img
                src="~assets/img/home-aroma.jpg"
                alt="Aroma Annapolis"
                class="opacity-90 hover:opacity-100"
            /></a>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="basis w-fit rounded-lg overflow-hidden relative mr-5">
            <a href="#"
              ><img
                src="~assets/img/home-cla.jpg"
                alt="Clean Label Alliance"
                class="opacity-90 hover:opacity-100"
            /></a>
          </div>
          <div class="basis w-fit rounded-lg overflow-hidden relative">
            <a href="#"
              ><img
                src="~assets/img/home-misty.jpg"
                alt="Misty Robotics"
                class="opacity-90 hover:opacity-100"
            /></a>
          </div>
        </div>
      </section>

      <section id="blog ">
        <div class="flex flex-row pt-10 pb-10 text-zinc-200">
          <div class="basis text-zinc-200 w-full">
            <h1 class="text-4xl font-bold mb-3">From the Blog</h1>
            <p class="mb-8 text-zinc-500">
              Learn to build &amp; deploy modern web applications to help build
              a faster, more efficient internet.
            </p>

            <table class="table-auto w-full">
              <tbody>
                <tr class="border-b-2 border-b-slate-900">
                  <td class="pt-3 pb-3 text-zinc-600">01</td>
                  <td class="pt-3 pb-3 font-semibold">
                    <a href="# " class="hover:underline"
                      >Modern Javascript Frameworks Guide</a
                    >
                  </td>
                  <td class="pt-3 pb-3 text-zinc-600 text-right">
                    Jan 2, 2022
                    <i
                      class="fa-solid fa-circle-play text-zinc-300 text-sm ml-2"
                    ></i>
                  </td>
                </tr>
                <tr class="border-b-2 border-b-slate-900">
                  <td class="pt-3 pb-3 text-zinc-600">02</td>
                  <td class="pt-3 pb-3 font-semibold">
                    <a href="# " class="hover:underline"
                      >The Future of the Web as we know it</a
                    >
                  </td>
                  <td class="pt-3 pb-3 text-zinc-600 text-right">
                    Dec 24, 2021
                    <i
                      class="fa-solid fa-circle-play text-zinc-300 text-sm ml-2"
                    ></i>
                  </td>
                </tr>
                <tr class="border-b-2 border-b-slate-900">
                  <td class="pt-3 pb-3 text-zinc-600">03</td>
                  <td class="pt-3 pb-3 font-semibold">
                    <a href="# " class="hover:underline"
                      >React, Angular or Vue? Which is Right for You</a
                    >
                  </td>
                  <td class="pt-3 pb-3 text-zinc-600 text-right">
                    Dec 15, 2021
                    <i
                      class="fa-solid fa-circle-play text-zinc-300 text-sm ml-2"
                    ></i>
                  </td>
                </tr>

                <tr class="border-b-2 border-b-slate-900">
                  <td class="pt-3 pb-3 text-zinc-600">04</td>
                  <td class="pt-3 pb-3 font-semibold">
                    <a href="# " class="hover:underline"
                      >API Development for Beginners</a
                    >
                  </td>
                  <td class="pt-3 pb-3 text-zinc-600 text-right">
                    Dec 7, 2021
                    <i
                      class="fa-solid fa-circle-play text-zinc-300 text-sm ml-2"
                    ></i>
                  </td>
                </tr>
                <tr class="border-b-2 border-b-slate-900">
                  <td class="pt-3 pb-3 text-zinc-600">05</td>
                  <td class="pt-3 pb-3 font-semibold">
                    <a href="# " class="hover:underline"
                      >OS X, Windows or Linux for Developers</a
                    >
                  </td>
                  <td class="pt-3 pb-3 text-zinc-600 text-right">
                    Nov 29, 2021
                    <i
                      class="fa-solid fa-circle-play text-zinc-300 text-sm ml-2"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <form id="newsletter">
        <div class="w-full p-10 rounded-lg mt-5">
          <h3 class="mb-2 text-xl font-bold text-slate-200">
            Subscribe to the newsletter
          </h3>
          <span class="text-slate-500"
            >Get the latest &amp; greatest news about tech, design and
            development.</span
          >
          <input
            type="text "
            id="newsletter "
            name="newsletter "
            class="mt-3 w-full p-2"
            placeholder="join@newsletter.com "
          />
        </div>
      </form>
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
