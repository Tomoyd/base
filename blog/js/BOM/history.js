const historyDom = document.querySelector('.history');

historyDom.addEventListener(
  'click',
  /**
   *
   * @param {{target:Element}} e
   */
  (e) => {
    const className = e.target.getAttribute('class');
    console.log(className);
    if (className === 'pushState') {
      history.pushState(
        { history: '111' },
        'unused',
        'file:///H:/learnRepository/JavaScript/blog/js/BOM/index.html'
      );
      //   history.forward();
      console.log(history.length);
    }
  },
  false
);

window.onpopstate = (e) => {
  console.log(e, '1111');
};
