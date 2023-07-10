<template>
  <header>
    <TopBar />
    <div class="container max-w-5xl mx-auto pl-10 pr-10">
        <div class="flex flex-row mt-8 text-sm font-medium">
          <div class="basis-3/4 nav text-zinc-500">
            <NuxtLink
              to="/"
              class="pr-10 text-zinc-200 hover:text-zinc-100 ease-in duration-300 ease-in duration-300 text-4xl"
              ><img
          class="float-left mt-2 pri5m-logo"
          src="~assets/img/logo-emblem.png"
          alt="PRI5M logo"
        /></NuxtLink>
            <NuxtLink
              to="/about"
              class="pr-8 hover:text-zinc-100 duration-200"
              >About</NuxtLink
            >
            <NuxtLink
              to="/work"
              class="pr-8 hover:text-zinc-100 duration-200"
              >Our Work</NuxtLink
            >

            <NuxtLink
              to="/services"
              class="pr-8 hover:text-zinc-100 duration-200"
              >Our Services</NuxtLink
            >

            <NuxtLink
              to="/playground"
              class="pr-8 hover:text-zinc-100 duration-200"
              >Playground</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="pr-8 hover:text-zinc-100 duration-200"
              >Contact</NuxtLink
            >
          </div>
          <div class="basis-1/4 text-xl text-right mt-2">
            <a href="#" class="text-slate-200/75 hover:text-slate-200 duration-300"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a
              href="#"
              class="pl-3 text-pink-600/75 hover:text-pink-600 duration-300"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a href="#" class="pl-3 text-blue-600/75 hover:text-blue-600 duration-300"
              ><i class="fa-brands fa-facebook"></i
            ></a>
          </div>
        </div>
    </div>
  </header>
  </div>
</template>

<style></style>
