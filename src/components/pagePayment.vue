<script>



</script>




<template>
    <div class="container-fluid  px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <h3>Inserisci i tuoi dati</h3>
                <div class="card">
                    <form class="form-card">
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Nome<span class="text-danger"> *</span></label> <input type="text" placeholder="" > </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Cognome<span class="text-danger"> *</span></label> <input type="text" placeholder="" > </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="text" placeholder="" > </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Numero telefonico<span class="text-danger"> *</span></label> <input type="text" placeholder="" > </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">indirizzo<span class="text-danger"> *</span></label> <input type="text"  placeholder="" > </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">INVIA</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as *;
@use '../assets/scss/general.scss' as *;

body{
    color: #000;
    height: 100%;
}
.card{
    padding: 30px 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    border: none ;
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2);
}
   

input, textarea, button{
    padding: 8px 15px;
    border-radius: 5px;
    margin: 5px 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 18px ;
    font-weight: 300
}
.btn-block{
    text-transform: uppercase;
    font-size: 15px ;
    font-weight: 400;
    height: 43px;
    cursor: pointer;
}
.btn-block:hover{
    color: #fff;
}
  

</style>