import AbstractView from "./abstract-view.js";

export default class Home extends AbstractView {
  constructor () {
    super();
    this.setTitle("Help List");
  }
  getHtml() {
    const doc = document.createElement('div');
    doc.className = "list-container";
    doc.innerHTML = `<div class="header">
      <h5 class="heading">
        Let’s Create your Cap Table!
      </h5>
      <p class="choice">Stuck on what to do? You can always come back here to check on what else you’ll need to add to
        complete your cap table.</p>
    </div>
    <div class="goback">
      <a data-link href="/">
        <i data-link href="/" class="fal fa-angle-left"></i></a>
      <div>Upload Investment Documents</div>
    </div>
    <ul>
      <li>
        <div class='checkbox-container'>
          <input type="radio" id="a-option" name="list">
          <label list-check for="a-option"></label>
          <div class="check"></div>
        </div>
        <div class='text-container'>
          <h3>Add Founder Shares</h3>
          <p>Details on what founder shares are</p>
        </div>
      </li>

      <li>
        <div class='checkbox-container'>
          <input type="radio" id="b-option" name="list">
          <label list-check for="b-option"></label>
          <div class="check"></div>
        </div>
        <div class='text-container'>
          <h3>Add Investments</h3>
          <p>What are Investments, when you would have/add them</p>
        </div>
      </li>
      <li>
        <div class='checkbox-container'>
          <input type="radio" id="c-option" name="list">
          <label list-check for="c-option"></label>
          <div class="check"></div>
        </div>
        <div class='text-container'>
          <h3>Add Equity Plans</h3>
          <p>Equity plan description</p>
        </div>
      </li>
      <li>
        <div class='checkbox-container'>
          <input type="radio" id="d-option" name="list">
          <label list-check for="d-option"></label>
          <div class="check"></div>
        </div>
        <div class='text-container'>
          <h3>Add Employee Grants</h3>
          <p>Employee grant description</p>
        </div>
      </li>
      <li>
        <div class='checkbox-container'>
          <input type="radio" id="e-option" name="list">
          <label list-check for="e-option"></label>
          <div class="check"></div>
        </div>
        <div class='text-container'>
          <h3>Review Cap Table</h3>
          <p>All done? Invite your lawyer to review your cap table</p>
        </div>
      </li>
    </ul>`;
    return doc;
  }
}