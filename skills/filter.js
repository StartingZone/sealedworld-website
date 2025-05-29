function myFunction() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("skills");
  var li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    var skillBlock = li[i].querySelector('.skillblock h2');
    var skinfo = li[i].querySelector('.skillblock h4');
    if (skillBlock) {
      var txtValue = skillBlock.textContent || skillBlock.innerText;
      var infoValue = skinfo.textContent || skinfo.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || infoValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}