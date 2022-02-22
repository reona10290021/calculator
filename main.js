let myFlg = 1;
let result = document.getElementById("result");
let operates = document.getElementById("operator");

function pressButton(target) {
  let target_value = target.innerHTML;
  myFlg = 0;
  if (target_value == "AC") {
    result.innerHTML = "0";
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else{
    if (result.innerHTML == "0") {
      if (target_value == "00") {
        result.innerHTML = "0";
      } else if (target_value ==".") {
        result.innerHTML = "0.";
      }else {
        result.innerHTML = target_value;
      }
    } else{
      result.innerHTML += target_value;
    }
  }
};

function pressCalculate(target) {
  let target_cal = target.innerHTML;

  if (myFlg == 0) {
  myFlg = 1;
  result.innerHTML += target_cal;
  } else if (myFlg == 1) {
      if (result.innerHTML == "0") {
        result.innerHTML = "0";
      }
  }
}