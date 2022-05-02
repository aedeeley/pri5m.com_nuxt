<template>
  <header>
    <div
      class="gradient-spectrum pt-2 pb-2 text-md text-slate-100 text-center font-light tracking-wider"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
      <i class="fa-solid fa-circle-play text-zinc-300 text-md"></i>
    </div>
    <div class="container max-w-3xl mx-auto pl-10 pr-10">
      <header>
        <div class="flex flex-row mt-8">
          <div class="basis-3/4 nav text-zinc-500 text-sm">
            <a
              href="#"
              class="pr-10 text-zinc-200 hover:text-zinc-100 ease-in duration-300 ease-in duration-300 text-3xl"
              ><i class="fa-solid fa-fill-drip"></i
            ></a>
            <a href="#" class="pr-8 hover:text-zinc-100 ease-in duration-300"
              >About</a
            >
            <a
              href="#"
              class="pr-8 pt-3 pb-3 hover:text-zinc-100 ease-in duration-300"
              >Work</a
            >
            <a
              href="#"
              class="pr-8 pt-3 pb-3 hover:text-zinc-100 ease-in duration-300"
              >Learn</a
            >
            <a
              href="#"
              class="pr-8 pt-3 pb-3 hover:text-zinc-100 ease-in duration-300"
              >Playground</a
            >
            <a
              href="#"
              class="pr-8 pt-3 pb-3 hover:text-zinc-100 ease-in duration-300"
              >Contact</a
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

<style>
* {
  font-family: "Inter", sans-serif;
}

body {
  background-color: #090b0c;
}

.gradient-spectrum {
  background-image: linear-gradient(
    135deg,
    #0b6ec5,
    #5e49af,
    #f35815,
    #fed54a 100%
  );
}

.container.max-w-3xl {
  max-width: 740px;
}

#stats i {
  font-size: 35pt;
}

#stats span {
  font-size: 10pt;
}

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
  font-family: "Flow Circular", cursive;
}

header a.pr-10 {
  vertical-align: middle;
}

#hero .buttons a {
  font-size: 9.5pt;
}

#trusted i {
  transition: all 400ms;
}

#newsletter .w-full {
  background: rgba(0, 0, 0, 0.3);
}

#newsletter input {
  background: rgba(0, 0, 0, 0.6);
}

#trusted img {
  width: 90px;
  height: auto;
  opacity: 0.5;
  transition: all 0.3s;
}

#trusted img:hover {
  opacity: 0.7;
}

#case-study flex {
  max-height: 300px;
  overflow: hidden;
}
</style>
