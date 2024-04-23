<template>
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex justify-center">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About Us</nuxt-link></li>
      <li><nuxt-link to="/services">Services</nuxt-link></li>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  // Add your script here
}
</script>

<template>
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex justify-center">
      <li><nuxt-link class="px-4 py-2" to="/">Home</nuxt-link></li>
      <li><nuxt-link class="px-4 py-2" to="/about">About Us</nuxt-link></li>
      <li><nuxt-link class="px-4 py-2" to="/services">Services</nuxt-link></li>
      <li><nuxt-link class="px-4 py-2" to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link class="px-4 py-2" to="/contact">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>
