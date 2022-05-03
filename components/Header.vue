<template>
  <header>
    <TopBar />
    <div class="container max-w-3xl mx-auto pl-10 pr-10">
      <header>
        <div class="flex flex-row mt-8">
          <div class="basis-3/4 nav text-zinc-500 text-sm">
            <NuxtLink
              to="/"
              class="pr-10 text-zinc-200 hover:text-zinc-100 ease-in duration-300 ease-in duration-300 text-3xl"
              ><i class="fa-solid fa-fill-drip"></i
            ></NuxtLink>
            <NuxtLink
              to="/about"
              class="pr-8 hover:text-zinc-100 ease-in duration-300"
              >About</NuxtLink
            >
            <NuxtLink
              to="/work"
              class="pr-8 hover:text-zinc-100 ease-in duration-300"
              >Work</NuxtLink
            >

            <NuxtLink
              to="/learn"
              class="pr-8 hover:text-zinc-100 ease-in duration-300"
              >Learn</NuxtLink
            >

            <NuxtLink
              to="/playground"
              class="pr-8 hover:text-zinc-100 ease-in duration-300"
              >Playground</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="pr-8 hover:text-zinc-100 ease-in duration-300"
              >Contact</NuxtLink
            >
          </div>
          <div class="basis-1/4 text-lg text-right mt-2">
            <a href="#" class="text-slate-200"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a
              href="#"
              class="pl-3 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a href="#" class="pl-3 text-blue-600"
              ><i class="fa-brands fa-facebook"></i
            ></a>
          </div>
        </div>
      </header>
    </div>
  </header>
</template>

<style></style>
