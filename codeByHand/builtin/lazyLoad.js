const lazyLoad = (() => {
  const imgList = [...document.querySelectorAll('img[data-src]')];
  const hasLoaded = [];
  return () => {
    if (!imgList.length) {
      document.removeEventListener('scroll', lazyLoad);
      return;
    }

    imgList.forEach((item, index) => {
      const { top } = item.getBoundingClientRect();
      if (top) {
        hasLoaded.push(index);
        item.src = item.dataset.src;
      }
    });
    imgList = imgList.filter((_, index) => !hasLoaded.includes(index));
  };
})();

document.addEventListener('scroll', lazyLoad);
