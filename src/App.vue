<template>
<v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>

<style lang="scss">
@import '../src/scss/global.scss';

html{
  width: 100%;
}

</style>



