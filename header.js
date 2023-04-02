class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        
        
        <div>

        <!-- Hero -->
        <div class="hero" data-theme="dark">
          <nav class="container-fluid">
            <ul>
              <li><a href="./" class="contrast" onclick="event.preventDefault()"><strong> </strong></a></li>
            </ul>
            <ul>
              <li>
                <details role="list" dir="rtl">
                  <summary aria-haspopup="listbox" role="link" class="contrast"></summary>
                  
                  </ul>
                </details>
              </li>
              <li>
                
                  </ul>
                </details>
              </li>
            </ul>
          </nav>
          
        </div><!-- ./ Hero -->
       
          <!-- Nav -->
          <nav>
            <ul>
              <li>
                <button on="tap:sidebar-left.toggle" aria-label="Close menu">
                  <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </li>
            </ul>
            <ul>
              <li>
                <h1>CRWin</h1>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" aria-label="">
                  <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="0px">
                    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav><!-- ./ Nav -->
      </div>   
        <div>
          <nav>
                <ul>
                <li><a href="#" onclick="logout()">Log out</a></li>

                  <li><a href="#"  onclick="window.location.href='home-page.component.html'">Home</a></li>
                  <li><a href="#"  onclick="window.location.href='about-us.html'">About</a></li>
                  <li><a href="#"  onclick="window.location.href='services.html'">Services</a></li>
                  <li><a href="#"  onclick="window.location.href='feedback.html'">Contact</a></li>
                  <li><a href="#"  onclick="window.location.href='Prediction.html'">Prediction</a></li> 
                  <li><a href="#"  onclick="window.location.href='candidate-info.html'">Candidates</a></li>
                  <li><a href="#"  onclick="window.location.href='news.html'">News</a></li>
                  <!-- <li><a href="#" onclick="window.location.href='voter-stats.html'">Engagement</a></li> -->
                  <li><a href="#"  onclick="window.location.href='voting.html'"> Vote</a></li>
                  <li><a href="#"  onclick="window.location.href='result.html'">Results</a></li>
            
                </ul>
              </nav>
        </div>
      </div>

         `
    }

}

customElements.define('my-header', MyHeader)
    
        


        





