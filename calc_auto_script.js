const carBrand = document.querySelector("#brand");
const carModel = document.querySelector("#model");
const engineValue = document.querySelector("#capacity");
const sumButton = document.querySelector(".button");
const outResult = document.querySelector(".final-sum");
const carFuel = document.querySelector(".car-fuel");
const carEngine = document.querySelector(".car-engine");
const checkboxOwner = document.querySelector("#used");
const carOwners = document.querySelector(".car-owners");
const carCondition = document.querySelector(".car-condition");
const carPayment = document.querySelector(".car-payment");
const carFuelRadioCheckbox = carFuel.querySelectorAll('input[type="radio"]');
const carConditionRadioCheckbox = carCondition.querySelectorAll(
  'input[type="radio"]'
);
const carPaymentRadioCheckbox = carPayment.querySelectorAll(
  'input[type="radio"]'
);
const errors = document.querySelector(".errors");
errors.innerHTML = "";

checkboxOwner.addEventListener("change", function () {
  if (this.checked) {
    carOwners.style.display = "block";
  } else {
    carOwners.style.display = "";
  }
});

function checkErrorsEngine() {
  if (engineValue.value == "") {
    errors.innerHTML += "Укажите объем двигателя!<br>";
  }

  if (
    !document.querySelector("#new").checked &&
    !document.querySelector("#used").checked
  ) {
    errors.innerHTML += "Выберите состояние автомобиля!<br>";
  }
}

function CheckCheckbox() {
  for (let i = 0; i < carFuelRadioCheckbox.length; i++) {
    if (!carFuelRadioCheckbox[i].checked) {
      errors.style.display = "block";
      errors.innerHTML += "Укажите вид топлива!<br>";
      break;
    } else {
      errors.innerHTML = "";
      break;
    }
  }
}
function radioCheckbox() {
  for (let i = 0; i < carPaymentRadioCheckbox.length; i++) {
    if (!carPaymentRadioCheckbox[i].checked) {
      errors.style.display = "block";
      errors.innerHTML += "Выберите способ оплаты!<br>";
      break;
    } else {
      errors.innerHTML = "";
      break;
    }
  }
}

//------расчёты----//

function finalSum() {
  let resultEngine = 1;
  let resultCapacity = 1;
  let selectedEngValue = 0;
  let selectedCapacityValue = 0;

  carFuelRadioCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedEngValue = Number(checkbox.value);
    } else {
      resultEngine *= Number(checkbox.value);
    }
  });

  resultEngine *= selectedEngValue;
  console.log(resultEngine);

  carConditionRadioCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCapacityValue = Number(checkbox.value);
    } else {
      resultCapacity *= Number(checkbox.value);
    }
  });
  resultCapacity *= selectedEngValue;
  console.log(resultCapacity);

  outResult.innerHTML =
    parseInt(
      Number(carBrand.value) *
        Number(carModel.value) *
        Number(engineValue.value) *
        resultCapacity *
        Number(engineValue.value)
    ) + " каких-то рублей";
}

// function checkPayment() {
//   let isChecked = false;

//   carPaymentRadioCheckbox.forEach((item) => {
//     if (item.checked) {
//       isChecked = true;
//     }
//   });

//   if (!isChecked) {
//     errors.style.display = "block";
//     errors.innerHTML = "Выберите способ оплаты!";
//   }
// }

sumButton.addEventListener("click", finalSum);
sumButton.addEventListener("click", CheckCheckbox);
sumButton.addEventListener("click", checkErrorsEngine);
sumButton.addEventListener("click", radioCheckbox);

console.log("test");

// const modelsRenault = [
//   {
//     model: "1",
//     ratio: 11,
//   },
//   {
//     model: "2",
//     ratio: 12,
//   },
//   {
//     model: "3",
//     ratio: 13,
//   },
//   {
//     model: "4",
//     ratio: 14,
//   },
// ];
