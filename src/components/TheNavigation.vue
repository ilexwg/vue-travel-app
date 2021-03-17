<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheNavigation'
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
}

#nav a {
  padding: 0 10px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.travel-app-exact-active {
  color: #099;
}
</style>
