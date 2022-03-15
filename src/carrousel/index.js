import React from "react";


function Carrousel(props){
    return (
        <section class="principal__section">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active button__carrusel" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" class="button__carrusel"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" class="button__carrusel"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                  <div class="principal__section__text">
                      <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                      <p>Some representative placeholder content for the first slide.</p>
                  </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                  <div class="principal__section__text">
                      <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                      <p>Some representative placeholder content for the first slide.</p>
                  </div>
              </div>              
              <div class="carousel-item" data-bs-interval="10000">
                  <div class="principal__section__text">
                      <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                      <p>Some representative placeholder content for the first slide.</p>
                  </div>
              </div>
        </div>
        </div>
        <div class="principal__section__button">
          <button type="button" class="button">Read more</button>
        </div>
      </section>

    )

}
export default Carrousel;