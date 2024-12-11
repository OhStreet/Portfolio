/* function to initialize loaded status */
window.addEventListener('load', function() {
    const container = document.querySelector('.container-lg');
    if (container) {
      container.classList.add('loaded');
    }
  });
  
  /* Function to make gif animations start 
  only when they're visible in the viewport 
  
  There is a massive amount of documentation for JS.
  I won't lie, this function was the result of a lot of 
  googling and combing through the docs and w3 schools/stack overflow.

  I enjoy how similar it is to C# however.
  */
  document.addEventListener('DOMContentLoaded', function () {
    // Declaring variable for the gifs
    const gifs = document.querySelectorAll('.csharp-projects img');
  
    // IntersectionObserver is an API that helps with detecting element visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Setting gif variable as entrys
        const gif = entry.target;
        // Iterates through every entry on the viewport
        if (entry.isIntersecting) {
          // Set the src to the actual GIF file to start the animation
          const src = gif.getAttribute('data-src');
          gif.setAttribute('src', src);
        } else {
          // Clear the src to stop the GIF animation
          gif.setAttribute('src', '');
        }
      });
    });
  
    gifs.forEach(gif => {
      // Move the GIF file path to data-src to prevent auto-loading
      gif.setAttribute('data-src', gif.getAttribute('src'));
      gif.setAttribute('src', '');
      observer.observe(gif);
    });
  });
  
  