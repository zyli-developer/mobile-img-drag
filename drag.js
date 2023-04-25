const bgElement = document.getElementsByClassName('bg')[0]
const startPosition = {
  x: 0,
  y: 0,
}
const moveDistance = {
    x: 0,
    y: 0,
}
const lastPosition = {
  x: 0,
  y: 0,
}
const domPosition = {
  x: 0,
  y: 0,
}
// console.log('%O', bgElement)
const touchStart = (event) => {

  const touch = event.touches[0];
  domPosition.x = Number(bgElement.style.backgroundPositionX.split('px')[0])
  domPosition.y = Number(bgElement.style.backgroundPositionY.split('px')[0])

  startPosition.x = touch.clientX
  startPosition.y = touch.clientY
  // bgElement.addEventListener('touchstart', touchStart)
}
const touchMove = (event) => {
  const touch = event.touches[0]
  moveDistance.x = touch.clientX - startPosition.x
  moveDistance.y = touch.clientY - startPosition.y

  lastPosition.x = moveDistance.x + domPosition.x
  lastPosition.y = moveDistance.y + domPosition.y
  // if ( Math.abs(lastPosition.x) + bgElement.clientWidth > 2245) {
  //   lastPosition.x = 2245
  // }if( Math.abs(lastPosition.y) + bgElement.clientHeight > 1587) {
  //   lastPosition.y = 1587
  // }
  bgElement.style.backgroundPosition = lastPosition.x + 'px ' + lastPosition.y + 'px'
}
const touchEnd =() => {
  console.log('%c [  bgElement.style.backgroundPosition ]-41', 'font-size:13px; background:#e344b3; color:#ff88f7;',  bgElement.style.backgroundPosition)
  // bgElement.removeEventListener('touchmove', touchMove)
}
bgElement.addEventListener('touchstart', touchStart)
bgElement.addEventListener('touchmove', touchMove)
bgElement.addEventListener('touchend', touchEnd)
