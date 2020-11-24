import AbstractView from "./abstract-view.js";
import router from "../lib/router.js";
export default class Home extends AbstractView {
  constructor () {
    super();
    this.setTitle("Home");
  }
  getHtml() {
    const doc = document.createElement('div');
    doc.id = 'home';
    doc.innerHTML = `
    <div id="home-container">
      <div class="header">
        <h5 class="heading">
          Let’s Create your Cap Table!
        </h5>
        <p class="choice">Select how you would like to create your cap table.</p>
      </div>
      <div class="choice-selections">
        <a class="choice-selection" data-link href="/list" class="link">
          <div>
            <img src='./src/images/excel.svg' class='choice-selection-icon'>
          </div>
          <div class="choice-selection-list">
              <h4> Upload Spreadsheet</h4>
              <p>Download a cap table spreadsheet template, fill it out, upload the completed template. </p>
          </div>
        </a>
        <div class="separator">
          <span></span>
          <span>Or</span>
          <span></span>
        </div>
        <a class="choice-selection" data-link href="/list">
          <div>
            <img src='./src/images/file.svg' class='choice-selection-icon'>
          </div>
          <div class="choice-selection-list">
              <h4> Upload Spreadsheet</h4>
              <p>Download a cap table spreadsheet template, fill it out, upload the completed template. </p>
          </div>
        </a>
      </div>
    </div>`;
    return doc;
  }
}