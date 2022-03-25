<script setup>
</script>

<template>
  <div>
    <!-- --------------- ADD --------------- -->
    <section class="add">
      <div class="container">
        <h1 class="add-title">Yeni elan</h1>
        <form action="" @submit.prevent="send">
          <div class="add-box">
            <div class="add-box_one">
              <label for="list">Kateqoriya</label>
              <select id="list">
                <option disabled selected>Siyahıdan seçin</option>
                <option>Telefon</option>
                <option>Avtomobil</option>
                <option>Noutbuk</option>
              </select>
            </div>
            <div class="add-box_one">
              <label for="list2">Şəhər</label>
              <select id="list2">
                <option>Bakı</option>
                <option>Sumqayıt</option>
                <option>Gəncə</option>
              </select>
            </div>
            <div class="add-box_one">
              <label for="list3">Məhsulun adı</label>
              <input id="list3" type="text" v-model="products.productName" />
            </div>
            <div class="add-box_one">
              <label for="list4">Qiymət, AZN</label>
              <input id="list4" type="number" v-model="products.productPrice" />
            </div>
            <div class="add-box_one">
              <label for="list5">Məhsulun şəkili</label>
              <input id="list5" type="file" />
            </div>
            <div class="add-box_one">
              <label for="list6">Məzmun</label>
              <textarea id="list6"></textarea>
            </div>
            <div class="add-box_one">
              <label for="list7">Adınız</label>
              <input id="list7" type="text" v-model="products.userName" />
            </div>
            <div class="add-box_one">
              <label for="list8">E-mail</label>
              <input id="list8" type="email" v-model="products.userEmail" />
            </div>
            <div class="add-box_one">
              <label for="list9">Mobil nömrə</label>
              <input id="list9" type="tell" v-model="products.userNumber" />
            </div>
            <button class="add-btn">Əlavə et</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        productName: "",
        productPrice: null,
        productİmage: null,
        productAbout: "",
        userName: "",
        userEmail: "",
        userNumber: "",
      },
    };
  },
  methods: {
    send() {
      this.$store.dispatch("sendDataTwo", this.products);
    },
  },
};
</script>

<style scoped>
/*--------------- ADD STYLE CSS ---------------*/
.add {
  padding: 20px 0;
}

.add .add-title {
  font-size: 26px;
  font-weight: 700;
}

.add .add-box {
  margin-top: 20px;
  padding: 15px 0;
  width: 950px;
  height: 600px;

  background-color: #e0e0e0;
}

.add .add-box .add-box_one {
  padding-left: 20px;
  margin-bottom: 10px;
  width: 570px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add .add-box .add-box_one label {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.add .add-box .add-box_one select,
.add .add-box .add-box_one input {
  padding: 5px;
  width: 350px;

  border: 1px solid #999;
  justify-content: end;
}

.add .add-box .add-box_one textarea {
  padding: 5px;
  width: 350px;
  height: 100px;

  border: 1px solid #999;
  justify-content: end;
}

.add .add-btn {
  margin: 50px 30%;
  padding: 5px;
  width: 90px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff8f2;
  font-size: 16px;

  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #ff6617;

  transition: all 0.5s ease 0s;
}

.add .add-btn:hover {
  background-color: #da5513;
}
</style>