<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Soho W01 Medium',sans-serif;
}

h1 {
  color: #271d6c;
  margin: 0 0 7px 0;
  font-size: 2.6rem;
}

h2, h3 {
  color: #271d6c;
  margin-bottom: 8px;
  font-size: 1.25rem;
}

</style>
