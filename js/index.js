const navToggle =document.querySelector(".nav-toggle");

const navLinks = document.querySelectorAll(".nav_link");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


class Modal {
  constructor(modal, target) {
      this.isOpen = false;
      this.modal = modal;
      this.target = target;
      this.closeModal = modal.querySelectorAll('[data-close]');

      this.target.addEventListener("click", (e) => {
        if (this.isOpen) {
            return this.close();
        }
        return this.open();
    });
      this.closeModal.forEach(item => {
          item.addEventListener("click", (e) => {
              this.close();
          });
      });

  }

  open() {
    this.modal.classList.add('show-modal');
}
  close() {
    this.modal.classList.remove('show-modal');
}
}

const modal = new Modal(
  // Grab the modal element
  document.querySelector('.modal'),
  // Grab the element that triggers the modal
  document.querySelector('[data-toggle="modal"]')
);

function ShowModal(header, contentClassID) {
  $('#myModalLabel').html(header);
  $('#container').removeAttr('class'); //if alredy exists remove it
  $('#container').addClass(contentClassID);
  $('#myModal').modal('show');
}