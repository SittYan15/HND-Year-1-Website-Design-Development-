/* Box Animation Components */
const boxes = document.querySelectorAll('.box');

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {threshold: 0.5});

boxes.forEach(box => {
  observer.observe(box);
});

/* Box 2 Animation Components */
const box = document.querySelector('.box2');

function handleScroll() {
  const scrollTop = window.scrollY;
  const boxOffsetTop = box.offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight > boxOffsetTop && scrollTop < boxOffsetTop + box.offsetHeight) {
    box.classList.add('active');
  } else {
    box.classList.remove('active');
    box.classList.add('reverse');
  }
}

window.addEventListener('scroll', handleScroll);
