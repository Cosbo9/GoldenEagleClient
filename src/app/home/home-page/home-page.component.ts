import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
      <div class="home-container">
          <div class="header-section">
              <img src="../../../assets/goldenEagleLogo.png" alt="golden eagle" class="logo">
              <p class="title">GOLDEN EAGLE TATTOO</p>
          </div>
          <div class="about-section">
              <p>ABOUT US</p>
              <p>
                  Our artists here at Golden Eagle Tattoo are here for all your tattoo and piercing needs,
                  specializing in
                  american traditional style we have a great selection of art to choose from, or bring in a design of
                  your
                  own.
              </p>
          </div>
          <div class="footer-section">
              <!--     put page links here     -->
          </div>
      </div>
  `,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

}
