export const handleScroll = (cb) => {
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      cb(true);
    } else {
      cb(false);
    }
  });
};
