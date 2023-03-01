<script>
export default{
    data() {
        return {
            resturants:[{'Type':'Carne',
                        'image':'carne-pregiata.webp'
             },
             {'Type':'Pesce',
                        'image':'secondi-piatti-di-pesce-1200x675.avif'
             },
             {'Type':'Italiana',
                        'image':'italiana.webp'
             },
             {'Type':'Pizza',
                        'image':'pizza.jpg'
             },
             {'Type':'Messicana',
                        'image':'messico.webp'
             },
             {'Type':'Hamburgeria',
                        'image':'Hamburgeria.webp'
             },
    ]
        }
    },
}




</script>

<template>
    <section >
        <div class="container-fluid" id="title_position">
           <h2  class="title_color"> I Nostri Ristoranti</h2>
        </div>
        <div class="container-fluid  row justify-content-center py-5 col-11 m-auto " id="Wrapper_Container">
            <div class="row " data-aos="fade-down"
            data-aos-duration="1200" >
                <div class="col-md-4 "  v-for="resturant in resturants">
                  <div class="card mb-4  layover_op" id="card_img" style="border:none;color:white;">
                    <img class="card-img-top  " 
                     style=" width: 100%; max-height:250px display: block;" :src="resturant.image">
                    <h4 class="bg-black type_resturant">
                        <a class="text-decoration-none text-white" href="#">
                            {{ resturant.Type }}
                        </a>
                    </h4>
                    
                  </div>
                </div>
           
            </div>
       </div>
      </section>
</template>

<style lang="scss">
.card_bg{
    background-color: #333;
}
.card_text{
   
    text-align: center;
}

#title_position{
    position: relative;
}

.title_color{
    color: white;
    width: 100%;
    text-align:center ;
    background-color: #069e24;
    position: absolute;
    font-weight: 900;
    
    padding: 5px;
    z-index: 5;
    left: 0%;
    top: -14px;
}
.type_resturant{
    position: absolute;
    width: 100%;
    max-height: 190px;
    text-align: center;
    padding: 22% 0%;
    opacity: 0;
    transition: ease-in 0.3s;
    &:hover{
        opacity: 0.8;
    }
    
}
#card_img img{
    max-height: 190px;
}
</style>
