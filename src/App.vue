<template>
  <!--<ul>-->
    <!--<li>-->
      <!--<router-link to="/">Home</router-link>-->
    <!--</li>-->
    <!--<li>-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</li>-->
  <!--</ul>-->
  <div id="nav">
    <img src="https://www.cbs.nl/Content/images/cbs-brand.svg">
    <ul>
      <li>
        <a>cijfers</a>
      </li>
      <li>
        <a>Arbeid en inkomen</a>
      </li>
      <li>
        <a>Economie</a>
      </li>
      <li>
        <a>Maatschappij</a>
      </li>
      <li>
        <a>Regio</a>
      </li>
      <li>
        <a>corporate</a>
      </li>
    </ul>
    <section>
      <img id="searchIcon" src="./assets/search.png">
      <a>English</a>
    </section>
  </div>

  <router-view/>
</template>

<style>
* {
  font-family: 'Soho W01 Medium',sans-serif;
  font-size: 1rem;
}

h1 {
  color: #271d6c;
  margin: 0 0 7px 0;
  font-size: 2.6rem;
}

h2 {
    color: #c90c0f;
    font-size: 1.8rem;
}

h3 {
  color: #271d6c;
  margin-bottom: 8px;
  font-size: 1.25rem;
}

#nav {
  width: 100vw;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
}

#nav img {
  width: 30px;
  height: 45px;
}

#nav section #searchIcon {
  height: 30px;
  padding-top: 10px;
}

#nav section a {
  margin-bottom: 5px;
}

#nav ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}

#nav ul li a {
  font-family: 'Soho W01 Medium',sans-serif;
  padding-right: 15px;
  color: #271d6c;
}

/*h3 titles #c90c0f*/
/*economy accent #53A31F*/
/*body text #091d23*/
/*cbs logo #00A1CD*/
</style>
