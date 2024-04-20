var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// ---------------------------for resposive------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";

}

function closemenu() {
    sidemenu.style.right= "-250px"}

// ---------------------------------contact form----------------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyKgbyzAqNY45HFKv5qgFR_HPMgKC4kbYW6cT8c8guFQJUt4_Hq3Jvwc922Gh1ffhsY/exec';
  const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
    // scroll reveal

    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
      });
      ScrollReveal().reveal('.header-text, .sub-tittle', { origin: 'top' });
      ScrollReveal().reveal('.project , .btn', { origin: 'bottom' });
      ScrollReveal().reveal('.social-icons , .info , .about-col1 , .header-text h1', { origin: 'left' });
      ScrollReveal().reveal('.about-col2 , .contact-right', { origin: 'right' });

      /*====== ===== typed js === */
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Android Developer', 'Video Editor'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
  });
