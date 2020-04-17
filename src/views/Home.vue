<template>
  <div class="home">
    <span>Lubie siebie</span>
    <br />
    <router-link :to="{ name: 'home-global' }" class="nav-link" active-class="active">Click</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>