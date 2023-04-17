function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 42 || charCode > 57)){
      return false;
    }
    return true;
}

function display(val) {
  document.getElementById("display").value += val;
}

function reset(){
  document.getElementById("display").value='';
}

function backSpace(){
  var bspace = document.getElementById("display").value;
  document.getElementById("display").value = bspace.substring(0,bspace.length-1);
}

function result(){
  var str = document.getElementById("display").value;
  const res = eval(str);
  reset();
  document.getElementById("display").value = res;
}