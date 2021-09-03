
// 图片的宽度
const slideWidth = document.querySelector(".slide").offsetWidth;
const $slides = document.querySelector(".slides")
let currSlideIndex = 0

document.querySelector(".prev").onclick = prevPage
document.querySelector(".next").onclick = nextPage
let dots = document.querySelectorAll(".dot")
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click",function(){
    toPage(i)
    toggleActiveDot(i)
  })
}
function toggleActiveDot(i) {
  for (let j = 0; j < dots.length; j++) {
      dots[j].className = "dot"
    }
  dots[i].className = "dot active"
}

function nextPage() {
  animate($slides,slideWidth)
  currSlideIndex++
  something()
}

function prevPage() {
  animate($slides,-slideWidth)
  currSlideIndex--
  something()
}

function toPage(toIndex) {
  animate($slides,(toIndex-currSlideIndex)*slideWidth)
  currSlideIndex = toIndex
}

function animate(ele,distance) {
  let currPos =  ele.offsetLeft
  ele.style.left = currPos - distance + 'px'
}

function something(){
  if(currSlideIndex > dots.length - 1) {
    currSlideIndex = 0
    $slides.style.left = 0
  }
  if(currSlideIndex < 0) {
    currSlideIndex = dots.length - 1
    $slides.style.left = -(dots.length - 1)*slideWidth + "px"
  }
  toggleActiveDot(currSlideIndex)
}


let timer = window.setInterval(() => {
  nextPage()
}, 1000);

let $container = document.querySelector(".container")
$container.addEventListener("mouseover",function(){
  window.clearInterval(timer)
})
$container.addEventListener("mouseout",function(){
  window.clearInterval(timer)
  timer = window.setInterval(() => {
    nextPage()
  }, 1000)
})
          