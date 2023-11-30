<template>
  <div id="wrap">
    <header>
      <section id="header_top">
        <h1 id="logo"><img src="./images/apeach.png" alt="logo"></h1>
        <ul id="login">
          <li><a href="#">로그인</a></li>
          <li><a href="#">회원가입</a></li>
          <li><a href="#">my</a></li>
          <li><a href="#">고객센터</a></li>
        </ul>
      </section>
      <section id="header_bottom">
        <nav>
          <ul>
            <li class="mainnav"><router-link to="/">Home</router-link>
              <ul class="submenu" @mouseover="mouseOver">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/about">About</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/welcome">welcome</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/dataBinding/String">String</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/dataBinding/html">html</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/dataBinding/input">input</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/dataBinding/selcet">selcet</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/dataBinding/attribute">Attribute</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/event/List">List</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/event/Click">Click</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/event/Change">Change</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
            <li class="mainnav"><router-link to="/event/key">key</router-link>
              <ul class="submenu">
                <li><a href="#">목록1</a></li>
                <li><a href="#">목록2</a></li>
                <li><a href="#">목록3</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  </div><!-- wrap end -->
  <router-view />
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

router-link{
  cursor: pointer;
}
*{
  margin: 0;
  padding: 0;
}
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
}
a{
  text-decoration: none;
  color: black;
}
ol,ul,li,td,tr,th{
  list-style: none;
}
#wrap{
  width: 100%;
}
header{
  width: 100%;
  height: 130px;
  background: rgb(190, 238, 190);
  font-weight: bold;
  font-size: 18px;
}
#logo{
  width: 100px;
  height: 100px;
  float: left;
}
#logo img{
  width: 100%;
  height: 100%;
}
#header_top{
  width: 100%;
  height: 40%;
}
#header_top ul{
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
  float: right;
  width: 400px;
  padding: 10px;
  margin: 10px 10px 0 0;
}
nav {
  margin-top: 40px;
  width: 100%;
}
nav ul{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router- link-exact-active {
  color: #42b983;
}

#login{
  width: 400px;
  float: right;
}

.submenu{
  flex-direction: column;
}
.submenu li{
  padding: 10px 0;
  display: none;
}
</style>
