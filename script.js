// Paginas
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    document.querySelector('.pag-frontal').style.
      display = 'block'
    document.querySelector('.pag-login').style.
      display = 'none'
    document.querySelector('.pag-registro').style.
      display = 'none'
  })
})

document.querySelectorAll('.entrar').forEach(entrarBtn => {
  entrarBtn.addEventListener('click', () => {
    document.querySelector('.pag-frontal').style.
      display = 'none'
    document.querySelector('.pag-login').style.
      display = 'block'
    document.querySelector('.pag-registro').style.
      display = 'none'
  })
})

document.querySelectorAll('.registro').forEach(registroBtn => {
  registroBtn.addEventListener('click', () => {
    document.querySelector('.pag-frontal').style.
      display = 'none'
    document.querySelector('.pag-login').style.
      display = 'none'
    document.querySelector('.pag-registro').style.
      display = 'flex'
  })
})
// Paginas final

// Navbar
const dropdownItems = document.querySelectorAll('.dropdown-hover')

if (window.innerWidth < 1000) {
  const menuIcono = document.querySelector('.menu')
  const navbar = document.querySelector('.navbar')

  menuIcono.addEventListener('click', () => {
    navbar.classList.toggle('cambio')

    if (!navbar.classList.contains('cambio')) {
      document.querySelectorAll('.nav-dropdown').forEach
        (dropdown => {
          dropdown.style.left = '-20rem'
        })
    }
  })

  document.querySelectorAll('.mostrar-dropdown').forEach
    (link => {
      link.addEventListener('click', () => {
        link.nextElementSibling.style.left = '0'
      })
    })

  document.querySelectorAll('.dropdown-header-link').forEach
    (headerLink => {
      headerLink.addEventListener('click', () => {
        headerLink.parentElement.parentElement.style.left = '-20rem'
      })
    })
} else {
  dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseover', () => {
      // console.log('navbar')
      dropdownItem.lastElementChild.style.cssText =
        'opacity:1; visibility:visible'
      document.querySelector('.navbar-wrapper').style.
        background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
      dropdownItem.firstElementChild.firstElementChild.
        style.transform = 'rotate(180deg)'
    })
  })

  dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseout', () => {
      dropdownItem.lastElementChild.style.cssText =
        'opacity:0; visibility:hidden'
      document.querySelector('.navbar-wrapper').style.
        background = 'none'
      dropdownItem.firstElementChild.firstElementChild.
        style.transform = 'rotate(0)'
    })
  })
}

window.addEventListener('resize', () => {
  window.location.reload()
})

// Navbar final