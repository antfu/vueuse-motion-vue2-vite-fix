<template>
  <section
    class="container flex flex-col items-center px-5 py-12 mx-auto text-gray-600 body-font md:flex-row"
  >
    <div
      class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
    >
      <p class="text-3xl mb-5">Vite ⚡ - Vue 2 starter template</p>
      <p
        v-motion
        :initial="{ x: 100 }"
        :enter="{ x: 0 }"
        class="mb-8 leading-relaxed dark:text-gray-300"
      >
        This example project shows how to speed up your Vue 2 application with
        the next generation frontend tooling Vite.
      </p>
    </div>
  </section>
</template>
