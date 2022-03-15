import React from "react";


function Form(props){
    return (
        <article class="main__container4" id='contact'>
        <div class="main__container4__text">
          <h4>Get in touch <br/> <span>We are hiring!</span></h4>
        </div>
        <div class="main__container4__content">
          <div class="main__container4__form">
            <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Name</label>
                  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
              <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Massege</label>
                  <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              <div class="main__container4__form_button">
                  <button type="button" class="button">Send</button>
              </div>
            </div>
        </div> 
      </article>

    )

}
export default Form;