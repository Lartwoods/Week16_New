const modelsRenault = [
  {
    model: "1",
    ratio: 11,
  },
  {
    model: "2",
    ratio: 12,
  },
  {
    model: "3",
    ratio: 13,
  },
  {
    model: "4",
    ratio: 14,
  },
];
const engineCap = [];
const conditon = ["new", "old"];
const carBrand = document.querySelector("#brand");
const carModel = document.querySelector("#model");
const engineValue = document.querySelector("#capacity");
const sumButton = document.querySelector(".button");
const outResult = document.querySelector(".final-sum");
const carFuel = document.querySelector(".car-fuel");
const checkboxOwner = document.querySelector("#used");
const carOwners = document.querySelector(".car-owners");
const carFuelRadioBtn = document.querySelectorAll('input[type="radio"]');

checkboxOwner.addEventListener("change", function () {
  if (this.checked) {
    carOwners.style.display = "block";
  } else {
    carOwners.style.display = "none";
  }
});
function test() {
  outResult.innerHTML =
    Number(carBrand.value) * Number(carModel.value) * Number(engineValue.value);
}
sumButton.addEventListener("click", test);

// ];
// const modelsOpel = [7, 8, 9, 10];
// const modelsMazda = [15, 16, 17, 18];
// const modelsJaguar = [19, 21, 22, 23];
// const fuel = [
//   {
//     model: "gasoline",
//     ratio: 11,
//   },
//   {
//     model: "diesel",
//     ratio: 12,
//   },
//   {
//     model: "gas",
//     ratio: 13,
//   },
//   {
//     model: "electric",
//     ratio: 14,
//   },
// ];
