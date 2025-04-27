function toggleDetails() {
  const internDetails = document.getElementById('intern-details');
  const projectDetails = document.getElementById('project-details');
  const button = document.getElementById('toggle-experience');

  if (internDetails.classList.contains('hidden')) {
    internDetails.classList.remove('hidden');
    projectDetails.classList.remove('hidden');
    button.textContent = 'Hide Details';
  } else {
    internDetails.classList.add('hidden');
    projectDetails.classList.add('hidden');
    button.textContent = 'View Details';
  }
}
