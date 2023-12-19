let images = [
  {
    img: 'images/PNG/slide_1.png',
    sliderCity: 'Rostov-on-Don \n LCD admiral',      
    sliderArea: '81 m2',
    sliderTime: '3.5 months',
    sliderCost: 'Upon request'
  },
  {
    img: 'images/PNG/slide_2.png',
    sliderCity: 'Sochi \n Thieves',
    sliderArea: '105 m2',
    sliderTime: '4 months',
    sliderCost: 'Upon request'
  },
  {
    img: 'images/PNG/slide_3.png', 
    sliderCity: 'Rostov-on-Don \n Patriotic',
    sliderArea: '93 m2',
    sliderTime: '3 months',
    sliderCost: 'Upon request'
  }
]

let sliderImages = document.querySelector('.main__section_hero_right_part_slider');
let sliderCity = document.querySelector('#city');
let sliderArea = document.querySelector('#area');
let sliderTime = document.querySelector('#time');
let sliderCost = document.querySelector('#cost');
let sliderPrev = document.querySelector('.main__section_hero_left_part_nav_prev');
let sliderNext = document.querySelector('.main__section_hero_left_part_nav_next');
let sliderCount = document.querySelectorAll('[data-index]');
let sliderIndex = 0;

function initSlider(index){
  sliderImages.innerHTML = `<img class="image" src="${images[index].img}">`
  sliderCity.innerText = images[index].sliderCity
  sliderArea.innerText = images[index].sliderArea
  sliderTime.innerText = images[index].sliderTime
  sliderCost.innerText = images[index].sliderCost
  sliderCount.forEach((item) => {
      if(Number(item.getAttribute('data-index')) === index) {
          item.classList.add('active')
      } else {
          if(item.classList.contains('active')) {
              item.classList.remove('active')
          }
      }
  })
}

initSlider(sliderIndex);

sliderPrev.addEventListener('click', () => {
  sliderIndex !== 0 ? sliderIndex -= 1 : sliderIndex = images.length - 1
  initSlider(sliderIndex);
})

sliderNext.addEventListener('click', () => {
  sliderIndex !== images.length - 1 ? sliderIndex += 1 : sliderIndex = 0
  initSlider(sliderIndex);
})

sliderCount.forEach((item) => {
  item.addEventListener('click', (event) => {
    sliderIndex = Number(event.target.getAttribute('data-index'))
    initSlider(sliderIndex);
    }
  )
})
