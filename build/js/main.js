const form = document.querySelector('form');
const input = document.querySelector('#shorten');
const button = document.querySelector('#shortIt');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  const encodedParams = new URLSearchParams();
  encodedParams.append("url", input.value);

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '42131783bdmshefb43697944102fp173a45jsn0e95351dc43c',
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    },
    body: encodedParams
  };

  fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
    .then(response => response.json())
    .then(data => {
      // create a new section element to display the shortened link
      const section = document.createElement('section');
      section.classList.add('max-w-md', 'mx-auto', 'mt-4', 'p-4', 'bg-violet_-400', 'md:max-w-6xl', 'md:p-4', 'rounded-lg', 'relative', 'top-36','flex','flex-col','md:flex-row','gap-4','justify-between','text-blue-500');

      // set the background image
      section.style.backgroundImage = "url('images/bg-boost-mobile.svg')";
      section.style.backgroundSize = 'cover';
      
      // create a new paragraph element to display the shortened link
      const paragraph = document.createElement('p');
      paragraph.classList.add('text-cyan-400', 'text-xl', 'align-center', 'text-center', 'bg-white', 'rounded-lg','paragraph' ,'md:max-w-4xl','md:flex','md:flex-row','md:gap-4','md:p-2','hover:text-blue-400','justify-end','text-blue-500');
      
      const span1 = document.createElement('span');
      span1.classList.add('text-blue-500');
      const link_ = document.createElement('a'); // create an anchor tag
      link_.href = data.result_url; // set the href attribute
      link_.textContent = data.result_url; // set the text content
      link_.classList.add('hover:text-blue','text-blue-500');
      span1.appendChild(link_); // append the anchor tag to the span element

      
      const span2 = document.createElement('span');
      const link=document.createElement('a');
      link.href=input.value;
      link.textContent=input.value;
      span2.appendChild(link);

      
      const hr = document.createElement('hr');
      hr.classList.add('my-8');
      
      paragraph.appendChild(span1);
      paragraph.appendChild(hr);
      paragraph.appendChild(span2);
      
      // append the paragraph element to the section element
      section.appendChild(paragraph);
      


      // create a new button element to copy the shortened link to clipboard
      const copyButton = document.createElement('button');
      copyButton.classList.add('align-center', 'block','text-right','bg-cyan_-400','rounded-lg','px-4','mt-4', 'md:mt-0','max-w-full','md:w-auto','copy-btn','md:ml-4','justify-end');
      copyButton.textContent = 'Copy';

      // add event listener to copy the shortened link to clipboard
      copyButton.addEventListener('click', () => {
        const el = document.createElement('textarea');
        el.value = data.result_url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        copyButton.style.background='gray';
        copyButton.innerHTML='Copied :)'
      });

      // append the copy button to the section element
      section.appendChild(copyButton);

      // get the target section element
      const targetSection = document.querySelector('section.max-w-md');

      // insert the new section element after the target section element
      targetSection.parentNode.insertBefore(section, targetSection.nextSibling);
    })
    .catch(error => console.error(error));
});


const initApp=()=>{
  const hamburgerBtn=document.getElementById("hamburger-button")
  const mobileMenu=document.getElementById('mobile-menu')
  const toggleMenu=()=>{
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('flex')
  }

  hamburgerBtn.addEventListener('click',toggleMenu)
  mobileMenu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentLoaded',initApp)