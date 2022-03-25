<script setup>
</script>

<template>
  <div>
    <!-- --------------- SIGN BOX --------------- -->
    <div class="sign_box">
      <form @submit.prevent="send">
        <RouterLink tag="div" to="/" class="sign_box_exit_icon">
          <i class="fa-solid fa-xmark"></i>
        </RouterLink>
        <h1 class="sign_box_title">
          {{ user.show == true ? "Giriş" : "Qeydiyyat" }}
        </h1>
        <div class="sign_box_email">
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="nepdud@gmail.com"
            v-model="user.email"
          />
        </div>
        <div class="sign_box_email">
          <label for="password">Şifrə</label>
          <input
            id="password"
            type="password"
            placeholder="* * * * * *"
            v-model="user.password"
          />
        </div>
        <div class="sign_box_flex">
          <div class="sign_box_flex_left-center">
            <input id="check" type="checkbox" />
            <label for="check">Yadda saxla</label>
          </div>
          <div class="sign_box_flex_left-center">
            <input id="checkpass" type="checkbox" />
            <label class="label-color" for="checkpass">Şifrəni görsət</label>
          </div>
          <div class="sign_box_flex_right">
            <a href="" @click.prevent="user.show = !user.show">{{
              user.show == true ? "Qeydiyyat" : "Giriş"
            }}</a>
          </div>
        </div>
        <button class="general-btn">
          {{ user.show == true ? "Giriş" : "Qeydiyyat" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: null,
        show: false,
      },
    };
  },
  methods: {
    send() {
      this.$store.dispatch("sendData", this.user);
    },
  },
};
</script>

<style scoped>
/*--------------- SIGN BOX STYLE CSS ---------------*/
.sign_box {
  width: 440px;
  height: 440px;
  padding: 35px;

  border-radius: 5px;
  filter: drop-shadow(0px 8px 10px rgba(0, 1, 1, 0.26));
  background-color: #f1f7fc;

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;

  transform: translate(-50%, -50%);
}

.sign_box .sign_box_title {
  color: #4f4f4f;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}

.sign_box .sign_box_email {
  margin-top: 30px;
}

.sign_box .sign_box_email label {
  color: #4f4f4f;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sign_box .sign_box_email input {
  display: block;
  width: 100%;
  padding: 12px 0 12px 30px;
  margin-top: 10px;

  outline: none;
  border: none;
  box-shadow: 0 4px 42px rgb(0 0 0 / 4%);
  border: 1px solid #a7a6a6;
  border-radius: 3px;
}

.sign_box .sign_box_flex {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sign_box .sign_box_flex .sign_box_flex_left-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sign_box .sign_box_flex .sign_box_flex_left-center input {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.sign_box .sign_box_flex .sign_box_flex_left-center label {
  margin-left: 10px;

  color: #8b8b8b;
  font-size: 14px;
  font-weight: 700;

  transition: all 0.5s ease 0s;
  cursor: pointer;
}

.sign_box .sign_box_flex .sign_box_flex_left-center label:hover {
  color: #808080;
}

.sign_box .sign_box_flex .sign_box_flex_left-center .label-color {
  color: #9133af;
}

.sign_box .sign_box_flex .sign_box_flex_left-center .label-color:hover {
  color: #612475;
}

.sign_box .sign_box_flex .sign_box_flex_right a {
  color: #04a9f4;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  transition: all 0.5s ease 0s;
}

.sign_box .sign_box_flex .sign_box_flex_right a:hover {
  text-shadow: 0 0 10px #04a9f4;
}

.sign_box .general-btn {
  width: 100%;
  margin-top: 30px;
  padding: 20px 0;
  box-shadow: inset 0 -5px 0 rgba(0, 0, 0, 0.12);
}

.sign_box .general-btn:hover {
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.12), 0 3px 10px 0 #1fb3d1;
}

.sign_box .sign_box_exit_icon {
  font-size: 25px;
  color: #ff4f08;

  position: absolute;
  top: 5px;
  right: 10px;

  cursor: pointer;
  transition: all 0.5s ease 0s;
}

.sign_box .sign_box_exit_icon:hover {
  text-shadow: 0 0 15px #ff4f08;
}

.general-btn {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  background-image: linear-gradient(0deg, #1eacc7 0%, #4ce2ff 100%);
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.12);

  transition: all 0.5s ease 0s;
}

.general-btn:hover {
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.12), 0 0 10px 2px #1fb3d1;
}
</style>