<script setup>
import { mapGetters } from "vuex";
</script>

<template>
  <div>
    <!-- --------------- CATEGORIES --------------- -->
    <section class="categories">
      <div class="container">
        <div class="card-flex">
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/house.svg" alt="" />
            </div>
            <span class="categories_span">Ev və bağ üçün</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/car.svg" alt="" />
            </div>
            <span class="categories_span">Nəqliyyat</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/home.svg" alt="" />
            </div>
            <span class="categories_span">Daşınmaz əmlak</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/phone.svg" alt="" />
            </div>
            <span class="categories_span">Elektronika</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/dress.svg" alt="" />
            </div>
            <span class="categories_span">Şəxsi əşyalar</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/services.svg" alt="" />
            </div>
            <span class="categories_span">Xidmətlər və biznes</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/hobby.svg" alt="" />
            </div>
            <span class="categories_span">Hobbi və asudə</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/kids.svg" alt="" />
            </div>
            <span class="categories_span">Uşaq aləmi</span>
          </div>
        </div>
        <div class="card-flex2">
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/animals.svg" alt="" />
            </div>
            <span class="categories_span">Ev və bağ üçün</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/work.svg" alt="" />
            </div>
            <span class="categories_span">Ev və bağ üçün</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/all.svg" alt="" />
            </div>
            <span class="categories_span">Ev və bağ üçün</span>
          </div>
          <div class="categories-card">
            <div class="categories_circle">
              <img src="../img/categories/shop.svg" alt="" />
            </div>
            <span class="categories_span">Ev və bağ üçün</span>
          </div>
        </div>
      </div>
    </section>
    <!-- --------------- PRODUCTS --------------- -->
    <section class="products">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/apple.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">2 400</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">
                Apple iPhone 12 Pro Max Gold 128GB/6GB
              </div>
              <div class="product_created">Bakı, bugün, 14:20</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/kia.jpg" alt="" />
              </div>
              <div class="product_price">
                <span class="product_price_val">50</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Avtomobil icarəsi</div>
              <div class="product_created">Bakı, bugün, 13:21</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/keys.jpg" alt="" />
                <div class="product_image_paid">
                  <div class="paid-icon">
                    <img src="../img/products/icon.svg" alt="" />
                  </div>
                  <div class="paid-vip">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">39</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Apple AirPods Pro (copy)</div>
              <div class="product_created">Bakı, bugün, 13:08</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/nouthp.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid">
                  <div class="paid-icon">
                    <img src="../img/products/icon.svg" alt="" />
                  </div>
                  <div class="paid-vip">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">2 490</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Noutbuk "HP Omen 15"</div>
              <div class="product_created">Bakı, bugün, 14:58</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/pcbaron.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid_single">
                  <div class="paid-vip_single">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">4 169</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Red Baron PC</div>
              <div class="product_created">Bakı, dünən, 16:09</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/bmwoil.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid_single">
                  <div class="paid-vip_single">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">22</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">
                Mühərrik yağı "BMW Group Twin Turba 5w30"
              </div>
              <div class="product_created">Bakı, 28 fevral 2022</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/inio.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid">
                  <div class="paid-icon">
                    <img src="../img/products/icon.svg" alt="" />
                  </div>
                  <div class="paid-vip">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">129</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">INOI 288S</div>
              <div class="product_created">Bakı, bugün, 21:45</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/grandeur.jpg" alt="" />
              </div>
              <div class="product_price">
                <span class="product_price_val">26 900</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Hyundai Grandeur, 2012 il</div>
              <div class="product_created">Bakı, 26 fevral 2022</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/niva.jpg" alt="" />
              </div>
              <div class="product_price">
                <span class="product_price_val">18 000</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">LADA (VAZ) Niva, 2020 il</div>
              <div class="product_created">Sumqayıt, bugün, 00:38</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/s21.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid_single">
                  <div class="paid-vip_single">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">1 550</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">
                Samsung Galaxy S21 Ultra 5G Phantom Silver...
              </div>
              <div class="product_created">Bakı, 17 mart 2022</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/sofa.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid">
                  <div class="paid-icon">
                    <img src="../img/products/icon.svg" alt="" />
                  </div>
                  <div class="paid-vip">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">330</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Künc divanı"</div>
              <div class="product_created">Bakı, dünən, 18:34</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/kirayeev.jpg" alt="" />
              </div>
              <div class="product_price">
                <span class="product_price_val">6 000</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">
                Bağ evi kirayə verilir, Mərdəkan qəs.
              </div>
              <div class="product_created">Bakı, bugün, 15:52</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/3080ti.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid_single">
                  <div class="paid-vip_single">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">4 549</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">
                Video kart "MSI GeForce RTX 3080 Ti GAMING X...
              </div>
              <div class="product_created">Bakı, 17 mart 2022</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/deskpc.jpg" alt="" />
              </div>
              <div class="product_price">
                <span class="product_price_val">6 000</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Masaüstü kompüter</div>
              <div class="product_created">Bakı, bugün, 06:30</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/ps4.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid">
                  <div class="paid-icon">
                    <img src="../img/products/icon.svg" alt="" />
                  </div>
                  <div class="paid-vip">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">350</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">Sony PlayStation 4</div>
              <div class="product_created">Bakı, bugün, 15:59</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="../img/products/13mini.jpg" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid">
                  <div class="paid-icon">
                    <img src="../img/products/icon.svg" alt="" />
                  </div>
                  <div class="paid-vip">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span class="product_price_val">1 585</span>
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name">
                Apple iPhone 13 Mini Midnight 128GB/4GB
              </div>
              <div class="product_created">Bakı, bugün, 14:44</div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="product">
              <div class="product_image">
                <img src="" alt="" />
                <div class="product_image_store">
                  <img src="../img/products/store.svg" alt="" />
                </div>
                <div class="product_image_paid">
                  <div class="paid-icon">
                    <img src="../img/products/icon.svg" alt="" />
                  </div>
                  <div class="paid-vip">
                    <img src="../img/products/vip.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="product_price">
                <span
                  class="product_price_val"
                  v-for="key of productSend"
                  :key="key"
                  >{{ key.productPrice }}</span
                >
                <span class="product_price_cur">AZN</span>
              </div>
              <div class="product_name" v-for="key of productSend" :key="key">
                {{ key.productName }}
              </div>
              <div class="product_created">Bakı, bugün, 14:44</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    ...mapGetters(["productSend"]),
  },
};
</script>

<style scoped>
/*--------------- CATEGORIES STYLE CSS ---------------*/
.categories {
  padding: 20px 0;

  background-color: #f1f3f7;
}

.categories .card-flex {
  width: 920px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.categories .card-flex2 {
  width: 460px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.categories .categories-card {
  width: 90px;
  height: 140px;
  margin: 0;
  padding: 0;

  cursor: pointer;
}

.categories .categories-card .categories_circle {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #fff;

  transition: all 0.5s ease 0s;
}

.categories .categories-card .categories_span {
  display: block;
  margin-top: 10px;

  text-align: center;

  transition: all 0.5s ease 0s;
}

.categories .categories-card:hover > .categories_circle,
.categories .categories-card:hover > .categories_span {
  border-color: #ff4f08;
  color: #ff4f08;
}

/*--------------- PRODUCTS STYLE CSS ---------------*/
.products {
  padding: 20px 0;

  background-color: #f8f9fd;
}
.products .product {
  width: 228px;
  height: 278px;

  border-radius: 7px;
  background-color: #fff;

  position: relative;
}

.products .product .product_image {
  position: relative;
  height: 181px;
}

.products .product .product_image img {
  width: 100%;
  height: 100%;

  border-radius: 7px 7px 0 0;
}

.products .product .product_image .product_image_paid {
  width: 49px;
  height: 22px;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  border-radius: 4px;

  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
}

.products .product .product_image .product_image_paid_single {
  width: 25px;
  height: 23px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 4px;

  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
}

.products .product .product_image .product_image_paid_single .paid-vip_single {
  width: 100%;
}

.products .product .product_image .product_image_store {
  width: 69px;
  height: 21px;

  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 1;
}

.products .product .product_image .product_image_store img {
  width: 100%;
}

.products .product .product_image .product_image_paid .paid-icon,
.products .product .product_image .product_image_paid .paid-vip {
  width: 19px;
}

.products .product .product_image .product_image_paid .paid-icon img,
.products .product .product_image .product_image_paid .paid-vip img {
  width: 100%;
}

.products .product .product_price {
  margin-top: 10px;
  padding: 0 10px;
}

.products .product .product_price .product_price_val,
.products .product .product_price .product_price_cur {
  color: #212c3a;
  font-size: 18px;
  font-weight: 700;
}
.products .product .product_price .product_price_val {
  margin-right: 5px;
}

.products .product .product_name {
  margin: 0;
  padding: 0 10px;

  color: #212c3a;
  font-size: 16px;
  line-height: 1.2;
  overflow: hidden;
}

.products .product .product_created {
  padding: 0 10px;

  color: #8d94ad;
  font-size: 14px;

  position: absolute;
  left: 0;
  bottom: 8px;
}
</style>