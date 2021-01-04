<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
      <router-link to="/about">About</router-link>
      </li>
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
        corporate
      </li>
    </ul>
  </div>

  <router-view/>
</template>

<style>
* {
  font-family: 'Soho W01 Medium',sans-serif;
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

#nav ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 40vw;
}

#nav ul li a {
  font-size: .9rem;
  padding-right: 15px;
}

/*h3 titles #c90c0f*/
/*economy accent #53A31F*/
/*body text #091d23*/
/*cbs logo #00A1CD*/
</style>
