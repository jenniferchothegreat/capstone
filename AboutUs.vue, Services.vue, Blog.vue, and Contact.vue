<template>
  <div>
    <h1 class="text-3xl font-bold text-center">{{ pageTitle }}</h1>
    <!-- Add your content here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'About Us', // Change this for each page
    }
  }
}
</script>

<template>
  <div class="bg-gray-100 p-8">
    <h1 class="text-4xl font-bold text-center mb-8">{{ pageTitle }}</h1>
    <p class="text-lg text-gray-800 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo ac massa congue convallis. Mauris efficitur semper elit, nec ultrices turpis commodo a. Donec sed tempor ante. In hac habitasse platea dictumst.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '', // Update this for each page
    }
  }
}
</script>
