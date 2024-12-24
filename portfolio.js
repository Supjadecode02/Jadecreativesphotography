const buttons = document.querySelectorAll('.portfolio-btn');
const imagesSection = document.getElementById('images');
const videosSection = document.getElementById('videos');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Show or hide sections based on selected target
    if (target === 'images') {
      imagesSection.classList.add('active');
      videosSection.classList.remove('active');
    } else {
      videosSection.classList.add('active');
      imagesSection.classList.remove('active');
    }
  });
});
