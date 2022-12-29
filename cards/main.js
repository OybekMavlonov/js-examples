// const title = document.querySelectorAll('.title')
let randNum = Math.round(Math.random() * 4)

const sliders = []

const images = [
  {
    link: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: 'USA'
  },
  {
    link: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    title: 'INDONESIA'
  },
  {
    link: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: 'THAILAND'
  },
  {
    link: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: 'NORWAY'
  },
  {
    link: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1121&q=80",
    title: 'USA'
  },
]
for (const image of images) {
  const structure = `<div class="slide" style="background-image: url(${image.link}) ">
      <h3 class="title">${image.title}</h3>
    </div>`
  sliders.push(structure)
}

const cont = document.querySelector('.container')
cont.innerHTML = sliders.join('')
const slides = document.querySelectorAll('.slide')



setTimeout(() => {
  slides[randNum].classList.add('active');
}, 400)
for (const slide of slides){
  setTimeout(() => {
    slide.style.transition = 'all 0.25s ease-in-out'
  }, 50)

  slide.addEventListener('click', function () {
    clearActiveClasses()
    slide.classList.add('active')
  })
}

function clearActiveClasses () {
  slides.forEach(elements => {
    elements.classList.remove('active')
  })
}



