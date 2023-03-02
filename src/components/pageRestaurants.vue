<script>
export default {
    name: "pageRestaurants"
}
</script>

<template>
    <!-- header main content -->
    <div class=" border border-1 header_main_cont">
        <section class=" ms_container d-flex justify-content-between align-items-center px-5 py-3">
            <div class="side-bar">
                <button class="btn btn-color btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Filtri</button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <div class="search_container d-flex justify-content-center align-items-center">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass"
                                class="ms_search_icon border border-1 p-3" />
                            <input type="text" placeholder="Search" class="ms_search_bar my-2 px-3">
                        </div>
                        <button type="button" class="btn btn-color-close btn-color" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class=" filter_cont d-flex flex-wrap justify-content-center align-items-center gap-4">
                            <li>
                                <input type="checkbox">
                                Italiano
                            </li>
                            <li>
                                <input type="checkbox">
                                Cinese
                            </li>
                            <li>
                                <input type="checkbox">
                                Giapponese
                            </li>
                            <li>
                                <input type="checkbox">
                                Kebab
                            </li>
                            <li>
                                <input type="checkbox">
                                Hamburger
                            </li>
                            <li>
                                <input type="checkbox">
                                Sushi
                            </li>
                            <li>
                                <input type="checkbox">
                                Dolci
                            </li>
                            <li>
                                <input type="checkbox">
                                Messicano
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-end align-items-end p-5">
                        <button type="button" class="btn btn-color btn-outline-success">Filter</button>
                    </div>
                </div>
            </div>

            <h3>Cerca il tuo ristorante, cibo o piatto preferito!</h3>
        </section>
    </div>

    <!-- main content -->
    <section>
        <div class=" ms_container py-5 d-flex flex-wrap justify-content-center align-items-center gap-4">
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card ms_card">
                <img src="/public/img/git.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                        up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-color btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables/variables.scss' as *;
@use '../assets/scss/general.scss' as *;

header,
footer {
    color: $main-color;
    background-color: $black;
}

main {
    background-color: $bg-main;

}

.ms_container,
.log_section {
    padding: 20px 0;
}

.ms_search_bar {
    width: 250px;
    height: 50px;
    border: 1px solid rgb(0, 0, 0);
}

.ms_search_icon {
    background-color: $bg-main;
}

.ms_card {

    width: 400px;
    height: 100%;
}

img {
    height: 300px;
    width: 100%;
}

.filter_cont {
    width: 100%;
    padding: 0px 30px;
}

ul {
    list-style-type: none;
}

.btn-color {
    background-color: $main-color;
    border: none;
}
</style>
