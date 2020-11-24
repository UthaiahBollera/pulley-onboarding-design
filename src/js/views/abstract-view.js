class AbstractView {
  constructor () { }
  setTitle(title) {
    document.title = title;
  }
  getHtml() {
    return document.createElement('div');
  }
};

export default AbstractView;
