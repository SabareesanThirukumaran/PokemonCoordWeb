const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }))
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach( (el) => observer.observe(el));


let loader = document.querySelector('.loader')
let ball = document.querySelectorAll('.pokeBall')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout( () => {
        ball.forEach((ballIcon, idx) => {

            setTimeout(() => {
                ballIcon.classList.add('active')
            }, (idx + 1) * 400)
        }) 

        setTimeout(() => {
            ball.forEach((ballIcon, idx) => {
                setTimeout(() => {
                    ballIcon.classList.remove('active')
                    ballIcon.classList.add('fade')
                    document.body.classList.remove('no-scroll')
                }, (idx + 1) * 50)
            })
        }, 1000)

        setTimeout(() => {
            loader.style.top = "-100vh"
        }, 1300)
    })
})

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("fancy").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};