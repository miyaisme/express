const navBtn = document.querySelector('.btn-container')
const homeBtn = document.querySelector('.home')
const aboutBtn = document.querySelector('.about')
const portfolioBtn = document.querySelector('.portfolio')
const contactBtn = document.querySelector('.contact')

navBtn.addEventListener('click', clickNavBar)

function clickNavBar(e) {
  const navTarget = e.target.classList
  if (navTarget.contains('home')) {
    location.replace("/")
    window.onload = pageLoaded()
  } else if (navTarget.contains('about')) {
    location.replace("/about")
    window.onload = pageLoaded()
  } else if (navTarget.contains('portfolio')) {
    location.replace("/portfolio")
  } else if (navTarget.contains('contact')) {
    location.replace("/contact")
  }
}

function pageLoaded() {
  console.log('window onloaded')
  if (document.URL.indexOf('about') >= 0) {
    console.log(about)
    aboutBtn.classList.add('active')
  }
}