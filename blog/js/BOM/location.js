function init() {
  const { port, protocol, pathname, href } = location;

  const locationDom = document.querySelector('.location');

  locationDom.innerText = `
    port:${port}
    protocol:${protocol}
    pathname：${pathname}
    href: ${href}
  `;
  locationDom.addEventListener('click', (e) => {
    location.assign('//w3schools.com');
  });
}

init();
