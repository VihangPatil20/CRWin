class classHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="cards">
        <div class="card" data-votes="0">
          <div class="poll__title">Vote for Candidate 1</div>
          <div class="poll__option">
            <img src="assets/candidate.jpg" alt="Candidate 1" width="50%" class="poll__image">
            <br><br>
            <div class="poll__option-fill"> </div>
            <div class="poll__option-info"></div>
            <button class="poll__button">Vote</button>
          </div>
        </div>
      
        <div class="card" data-votes="0">
          <div class="poll__title">Vote for Candidate 2</div>
          <div class="poll__option">
            <img src="assets/candidate.jpg" alt="Candidate 2" width="50%" class="poll__image">
            <br><br>
            <div class="poll__option-fill"></div>
            <div class="poll__option-info"></div>
            <button class="poll__button">Vote</button>
          </div>
        </div>
      
        <div class="card" data-votes="0">
          <div class="poll__title">Vote for Candidate 3</div>
          <div class="poll__option">
            <img src="assets/candidate.jpg" alt="Candidate 3" width="50%" class="poll__image">
            <br><br>
            <div class="poll__option-fill"></div>
            <div class="poll__option-info"></div>
            <button class="poll__button">Vote</button>
          </div>
        </div>
        

         `
    }

}

customElements.define('class-header', classHead)


        


        





