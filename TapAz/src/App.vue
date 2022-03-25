<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <!-- --------------- HEADER --------------- -->
    <header>
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-md-5 header-top_left">
              <a href="https://turbo.az/" target="_blank">Turbo.az</a>
              <a href="https://bina.az/" target="_blank">Bina.az</a>
              <a href="https://boss.az/" target="_blank">Boss.az</a>
            </div>
            <div class="col-md-7 header-top_right">
              Dəstək:
              <a class="one-a" href="#">(70) 200-63-03</a>
              <a href="#">Yardım</a>
              <a href="#">RU</a>
              <a class="four-a" href="#">
                <i class="fa-solid fa-heart"></i>Seçilmişlər
              </a>
              <RouterLink tag="a" to="/sign" class="four-a m-0" @click="send2">
                <i class="fa-solid fa-circle-user"></i>Giriş
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <div class="nav-flex">
            <RouterLink tag="a" to="/">tap.az</RouterLink>
            <div class="nav-flex_category">
              <i class="fa-solid fa-bars-staggered"></i>
              <a>Kataloq</a>
            </div>
            <div class="nav-flex_search">
              <input type="text" placeholder="Əşya və ya xidmət axtarışı" />
              <div class="nav-flex_button">
                <i class="fa-solid fa-magnifying-glass"></i>
                <button>Tap</button>
              </div>
            </div>
            <RouterLink to="/add" class="nav-flex_add">
              <i class="fa-solid fa-plus"></i>
              <button>Yeni elan</button>
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script>
export default {};
</script>

<style>
/*--------------- GENERAL STYLE CSS ---------------*/
* {
  font-family: Helvetica, Arial, sans-serif;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 15px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

body {
  background-color: #f8f9fd;
}

.container {
  max-width: 950px;
}
/*--------------- HEADER STYLE CSS ---------------*/
.header-top {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-top a {
  margin-right: 25px;

  color: #8d94ad;

  transition: all 0.5s ease 0s;
}

.header-top .header-top_left {
  display: flex;
  justify-content: start;
  align-items: center;
}

.header-top a.one-a {
  color: black;
}

.header-top a.four-a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-top a.four-a i {
  margin-right: 7px;

  font-size: 20px;
}

.header-top a:hover {
  color: #ff4f08;
}

.header-top a:active {
  color: #d13d03;
}

.header-top .header-top_right {
  display: flex;
  justify-content: end;
  align-items: center;
}

nav {
  padding: 15px 0;

  background-color: #ff4f08;
}

nav .nav-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .nav-flex a {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
}

nav .nav-flex .nav-flex_category {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .nav-flex .nav-flex_category i {
  margin-right: 5px;

  color: #fff;
  font-size: 22px;

  cursor: pointer;
}

nav .nav-flex .nav-flex_category a {
  margin: 0;
  padding: 0;

  color: #fff;
  font-size: 16px;

  cursor: pointer;
}

nav .nav-flex .nav-flex_search {
  position: relative;
}

nav .nav-flex .nav-flex_search {
  width: 600px;
}

nav .nav-flex .nav-flex_search input {
  width: 100%;
  padding: 12px;

  border-radius: 7px;
}

nav .nav-flex .nav-flex_search input::placeholder {
  color: #8d94ad;
}

nav .nav-flex .nav-flex_search .nav-flex_button {
  display: flex;
  align-items: center;
  width: 61px;
  height: 34px;

  color: #fff;

  border-radius: 7px;
  background-color: #fe5735;
  cursor: pointer;

  position: absolute;
  top: 3px;
  right: 4px;
}

nav .nav-flex .nav-flex_search .nav-flex_button i {
  margin: 0 7px;
}

nav .nav-flex .nav-flex_search .nav-flex_button button {
  color: #fff;
  background-color: #fe5735;
}

nav .nav-flex .nav-flex_add {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;

  font-size: 15px;

  border-radius: 7px;
  background-color: #7ed321;

  cursor: pointer;
}

nav .nav-flex .nav-flex_add i {
  margin-right: 5px;

  color: #fff;
}

nav .nav-flex .nav-flex_add button {
  color: #fff;
  background-color: #7ed321;
}
</style>
