window.onload=function(){

  let btn = document.getElementById("click-me");
  let itemsFull = document.querySelectorAll('.grid-item--full');

  btn.addEventListener("click", generateTable);

  generateTable();
  colorTabs();


  function generateTable() {
    resetTable();
    let list = []
    for (i = 0; i < 91; i++) {
      let x =  Math.floor(Math.random() * (91 - 1) + 1);
      if (list.length < 15) {
        if (list.indexOf(x) < 0) {
          list.push(x);
        }
      }
    }
    for (let i = 0; i < itemsFull.length; i++){
      itemsFull[i].innerHTML = list[i];
    };
  };

  function resetTable() {
    itemsFull.forEach(function(e) {
      e.classList.remove('grid-item--selected');
    });
  };

  function colorTabs() {
    itemsFull.forEach(function(e) {
      e.addEventListener('click', function() {
        this.classList.toggle('grid-item--selected');
      })
    });
  }
};

