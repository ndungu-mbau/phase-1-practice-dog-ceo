//console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(({ status, message }) => {
      if(status === 'success') {
        message.forEach(imgUrl => {
          const img = document.createElement('img')
          img.src = imgUrl

          document.body.appendChild(img)
        })
      }
    })

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(({ status, message }) => {
      if(status === 'success'){
        Object.keys(message).forEach(breed => {
          const li = document.createElement('li')
          li.textContent = breed
          li.addEventListener('click', _evt => {
            li.style.backgroundColor = 'lightblue'
          })
          document.querySelector('ul').appendChild(li)
        })
      }
    })

  document.querySelector('select#breed-dropdown').addEventListener('change', evt => {
    const ul = document.querySelector('ul#dog-breeds')
    while(ul.firstChild){
      ul.removeChild(ul.firstChild)
    }

    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(({ message }) => {
        Object.keys(message).forEach(breed => {
          if(breed.startsWith(evt.target.value)){
            const li = document.createElement('li')
            li.textContent = breed
            ul.appendChild(li)
          }
        })
      })
  })
})
