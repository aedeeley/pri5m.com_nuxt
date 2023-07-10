<template>
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
</template>

<style>

#trusted i {
    transition: all 400ms;
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

</style>
