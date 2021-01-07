<template>
  <div>
    <router-view/>
  </div>

</template>

<style>
* {
  font-family: 'Soho W01 Medium',sans-serif;
  font-size: 1rem;
  margin-left: 0!important;
}

h1 {
  color: #271d6c;
  font-size: 2.6rem;
  margin: 0 0 7px 0;
}

h2 {
    color: #c90c0f;
    font-size: 1.8rem;
}

h3 {
  color: #271d6c;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}


#nav {
  width: 100vw;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
}

#nav img {
  width: 1.5rem;
  height: 3rem;
}

#nav section #searchIcon {
  height: 1.5rem;
  padding-top: 0.5rem;
}

#nav section a {
  margin-bottom: 0.5rem;
}

#nav ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}

#nav ul li a {
  font-family: 'Soho W01 Medium',sans-serif;
  color: #271d6c;
  padding-right: 2rem;
}

#search {
  width: 100vw;
  height: 4rem;
  background-color: #F4F4F4;
  display: flex;
  justify-content: center;
}

#search form {
  align-items: center;
  padding-top: 0.5rem;
}

#search form input {
  height: 2rem;
  width: 40vw;
  color: #091d23;
  border: 1px solid darkgray;
  justify-self: end;
  border-radius: 15px;
  padding-left: 1rem;
}

#category {
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5vw;
  height: 100vh;
  padding-top: 1rem;
}

#category div {
  opacity: 0.65;
  border: 1px solid darkgray;
  border-radius: 10px;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

#category div:hover {
  opacity: 1;
}

#category div img {
  width: 2rem;
}

#category .economy {
  background-color: #53A31F;
}

#category .social {
  background-color: #F29100;
}

#category .medical {
  background-color: #E94B0B;
}

#category .product {
  background-color: #B00F81;
}

#category .government {
  background-color: #0F2E91;
}

#category .transport {
  background-color: #0058B9;
}

#category .work {
  background-color: #21A1CD;
}
/*h3 titles #c90c0f*/
/*body text #091d23*/
/*cbs logo #00A1CD*/
</style>
