const tabTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come Back Please :('
})

window.addEventListener('focus', () => {
  document.title = 'GIS | MISSION BRIEFING'
})
