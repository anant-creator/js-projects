function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}


function ImgGallery(item) {
  this.container = item;
  this.list = [...item.querySelectorAll('.img')];
  
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
  this.self = this;
  // Bind function
  // this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.container.addEventListener('click', function(e) {
    if (e.target.classList.contains('img')) {
      this.selectMainImage(e.target);
      this.openModal(e.target, this.list);
    }
  }.bind(this));
}

ImgGallery.prototype.openModal = function(selectedImg, list) {
  this.modalImages.innerHTML = list.map(function(img) {
    return `<img src="${img.src}" title="${img.title}" class="${selectedImg.dataset.id === img.dataset.id ? "modal-img selected" : "modal-img"}" data-id="${img.dataset.id}" alt="${img.title}">`
  }).join("");
  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click', this.closeModal);
  this.nextBtn.addEventListener('click', this.nextImage);
  this.prevBtn.addEventListener('click', this.prevImage);
}

ImgGallery.prototype.selectMainImage = function(selectedImg) {
  this.modalImg.src = selectedImg.src;
  this.imageName.textContent = selectedImg.title;
}

ImgGallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');
  this.closeBtn.removeEventListener('click',this.closeModal);
  this.nextBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
}

ImgGallery.prototype.nextImage = function() {
  const selected = this.modalImages.querySelector('.selected');
  const next = selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
  this.selectMainImage(next);
}

ImgGallery.prototype.prevImage = function() {
  console.log('dance');
  const selected = this.modalImages.querySelector('.selected');
  const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove('selected');
  prev.classList.add('selected');
  this.selectMainImage(prev);
}



const nature = new ImgGallery(getElement('.nature'));
const city = new ImgGallery(getElement('.city'));