<script >
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import Footer from './components/Footer.vue'
import pageRestaurants from './components/pageRestaurants.vue'
import pagePayment from './components/pagePayment.vue'
import pageLista from './components/pageLista.vue'

export default {
  components: {
    Header,
    Section,
    Section1,
    Section2,
    pageRestaurants,
    pagePayment,
    pageLista,
    Footer,




  },
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {

    //metodo che crea un pagina di caricamento

    setTimeout(() => {
      this.isLoaded = true
    }, 4000);
  },
}
</script>

<template>
  <!-- Mettiamo il v-if con operatore not al booleano di isLoaded che per default è false -->

  <div class="text-center bg-white" v-if="!isLoaded">

    <div class="Flex_Load">
      <div class="pos_img">
        <img class="img_loading animate__animated animate__flash " src="./assets/Logo-Deliveboo.png" alt="">
      </div>

    </div>
  </div>

  <!-- Terminato il Loader apparirà la pagina principale   -->

  <div v-else>
    <Header />
    <main>
      <Section />
      <Section1 />
      <Section2 />
    </main>
    <Footer />
    <pageRestaurants />
    <pagePayment/>
    <pageLista/>

  </div>
</template>

<style lang="scss">
.Flex_Load {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative
}

.img_loading {
  max-width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: invert(57%) sepia(70%) saturate(1956%) hue-rotate(108deg) brightness(91%) contrast(95%);

}

#loader {

  align-content: center;
  margin-right: 22px;

}

main {
  background-image: url('./assets/Food-bg.jpg');
  background-size: cover;
}
</style>
