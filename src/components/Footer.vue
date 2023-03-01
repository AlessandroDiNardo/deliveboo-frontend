<script>

export default{
    data() {
        return {
            items:[{'title':'Scopri Deliveboo',
                    links:[ 'Investitori',
                    'Chi siamo',

                    'Ristoranti',

                    'Altro',

                   ' Pressroom',

                   ' Programmazione',

                   ' Design',

                    'Lavora con noi',

                   ' Diventa nostro partner']},

                   {'title':'Note legali',
                   
                    links:[    ' Termini & Condizioni',

                               ' Informativa sulla privacy',

                                'Cookies']},

                   {'title':'Aiuto',
                   
                   links:[    ' Termini & Condizioni',

                              ' Informativa sulla privacy',

                               'Cookies']},

                  {'title':'Porta Deliveroo con te',
                   
                  links:[    ' Termini & Condizioni',

                                ' Informativa sulla privacy',

                                ]},

                
                ]
        }
    },

                   
            
                
        }




</script>

<template>

    <footer class="py-3 my-4 " >
       
        <h2  class="mb-2" data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1200">
          I Nostri Contatti
        </h2>
        <div class="list_container w-75 m-auto d-flex " >
          <ul v-for="(element, index) in items" class="rounded-2">
              <li><h6 class="py-2">{{element.title}}</h6></li>
              <li v-for="link in element.links " class="pb-2" id="footer_ul">
               <a href="#"  >
                {{ link }}
               </a>
              </li>
          </ul>
      
        </div>
      </footer>

</template>

<style lang="scss" >
footer{
    background-color: #2e3333;
    color: white;
   
}
h2{
    color: #069e24;

}
    ul{
       
        margin: auto 15px;
        list-style: none;
        background-color: #434848;
        padding: 0 10px;
        display: flex;
        flex-direction: column;

       
        

    }
    ul li{
        text-align:start;
      
    }
    #footer_ul{
        padding-left: 0%;
    }
    li a{
        color:  #069e24;
        transition: all 0.2s;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
            color: white;

        }
    }
    .list_container{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>