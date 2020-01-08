const weditor = document.getElementsByClassName('weditor')[0];
const toolbar = weditor.getElementsByClassName('toolbar')[0];
const buttons = toolbar.querySelectorAll('.btn:not(.has-submenu)');
for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];

  button.addEventListener('click', function(e) {
    let action = this.dataset.action;


    if(action === 'code') {
      const contentArea = weditor.getElementsByClassName('content-area')[0];
      const visuellView = contentArea.getElementsByClassName('visual')[0];
      const htmlView = contentArea.getElementsByClassName('html')[0];

      if(this.classList.contains('active')) {
        visuellView.innerHTML = htmlView.value;
        htmlView.style.display = 'none';
        visuellView.style.display = 'block';
        this.classList.remove('active');
      } else {  
        htmlView.innerText = visuellView.innerHTML;
        visuellView.style.display = 'none';
        htmlView.style.display = 'block';
        this.classList.add('active');
      }

      return false;
    }

    document.execCommand(action, false);
  });
}
