<template>
  <div id="app">
    <!-- Navigation links -->
    <router-link to="/aboutus">About Us</router-link>
    
    <!-- Router view to render matched components -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
