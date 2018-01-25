var z = 1

var images = document.querySelectorAll("img")

images.forEach(img => {
  img.addEventListener("mouseenter", function() {
    z += 1
    this.style.zIndex = z
  })
})
