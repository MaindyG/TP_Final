const reponsesElt = document.getElementById('quizpython');
const submitElt = document.getElementById('submitbutton')
const totalElt = document.getElementById('total')

submitElt.addEventListener('click', () => {
  var total = 0;
  for (var i = 0; i < reponsesElt.length; i++) {
    if (reponsesElt[i].checked && reponsesElt[i].value == "1") {
      total++;
    } 
  }
  totalElt.innerText = "Total = " + total
});
/// Je ne sais pas pourquoi ca ne marche pas. 