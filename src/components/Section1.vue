<script>





</script>

<template>
    <section class="work_us">
        <div class="container-fluid  row justify-content-center py-5 col-11 m-auto " id="Wrapper_Container">
            <div  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" class="col-5  mx-1 " id="txt_cont">
            <h2>LAVORA CON NOI</h2>
            <p class="txt_p">
                Sei un morto di fame? <br>
                Mangi pane e merda a colazione,pranzo e cena? <br>
                Hai delle aspettative economiche talmente basse che al confronto gli schiavi dei sudisti avevano un ottima apettativa? <br>
                Allora Deliveboo è il regime di schiavitù che fa per te!!!!! <br>
                Paga da fame , orari di merda ,trattamento come lo sporco delle unghie....... <br>
                E questi sono solo alcuni dei benefit che la nostra azienda offre... <br>
                Che aspetti? <a class="bg-primary text-white rounded-1 text-decoration-none mx-1 p-1" href="#">Lavora con Noi</a>
            </p>
        </div>
        <div id="cont_img" data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000" class="col-5 rounded mx-1" >
            <img  id="img_cont" src="../assets/lavora-con-noi.jpg" alt="">
        </div>
       </div>
      </section>
</template>

<style lang="scss">
    .work_us{
        background-color: #069e24;
    }

   #img_cont{
    width: 100%;
    border-radius: 15px;
   }
   #txt_cont{
    
    color: white;
   }
   h2{
    text-align: center;
   }
   .txt_p{
    font-size: 15px;
   }
   @media (max-width: 992px) and (min-width: 350px) { 

    #Wrapper_Container{
        display: flex;
        flex-direction: column;
        align-content: center;
        }
       #cont_img,#txt_cont{
        width: 100%;
        color: white;
       } 
    }
</style>
