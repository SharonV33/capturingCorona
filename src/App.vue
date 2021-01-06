<template>
  <section>
    <section id="nav">
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
    </section>
    <section id="search">
      <form>
        <input type="text" placeholder="stel je vraag">
        <fieldset>
          <button>regionaal</button>
          <button>landelijk</button>
        </fieldset>
      </form>
    </section>
    <section id="category">
      <div id="economy">
        <img src="./assets/economy.svg">
      </div>
      <div id="social">
        <img src="./assets/social.svg">
      </div>
      <div id="medical">
        <img src="./assets/medical.svg">
      </div>
      <div id="product">
        <img src="./assets/product.svg">
      </div>
      <div id="government">
        <img src="./assets/government.svg">
      </div>
      <div id="transport">
        <img src="./assets/transport.svg">
      </div>
      <div id="work">
        <img src="./assets/work.svg">
      </div>
    </section>
  </section>


</template>

<style>
* {
  font-family: 'Soho W01 Medium',sans-serif;
  font-size: 1rem;
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
}
#search form {
  display: grid;
  grid-template-columns: 65% 35%;
  align-items: center;
  padding-top: 0.5rem;
}

#search form input {
  height: 2rem;
  width: 60%;
  color: #091d23;
  border: 1px solid darkgray;
  justify-self: end;
  border-radius: 15px;
  padding-left: 1rem;
}

#search form fieldset {
  border: none;
}

#search form fieldset button {
  height: 2rem;
  width: 6rem;
  background-color: #CCCCCC;
  color: #ffffff;
  border: 1px solid darkgray;
}

#search form fieldset :first-child {
  background-color: #86BD40;
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
  border: 1px solid darkgray;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

#category div img {
  width: 2em;
}

#category #economy {
  background-color: #53A31F;
}

#category #social {
  background-color: #F29100;
}

#category #medical {
  background-color: #E94B0B;
}

#category #product {
  background-color: #B00F81;
}

#category #government {
  background-color: #0F2E91;
}

#category #transport {
  background-color: #0058B9;
}

#category #work {
  background-color: #53A31F;
}
/*h3 titles #c90c0f*/
/*economy accent #53A31F*/
/*body text #091d23*/
/*cbs logo #00A1CD*/
</style>
