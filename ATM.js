// const Button = document.getElementById("submit");

var data = {
  card_number: "",
  card_pin: "",
  optionYouSelected: "",
  actionYouSelected: "",
  Amount: 4000,
};

document.getElementById("updated_bal").innerHTML = data.Amount;

var step = 1;

function updateData(e) {
  let object = { ...data, ...e };
  data = object;
}
function changeStep() {
  console.log({ data });
  step++;
  switch (step) {
    case 1:
      document.getElementById("firstStep").style.display = "block";
      document.getElementById("secondStep").style.display = "none";
      document.getElementById("thirdStep").style.display = "none";
      break;
    case 2:
      document.getElementById("firstStep").style.display = "none";
      document.getElementById("secondStep").style.display = "block";
      document.getElementById("thirdStep").style.display = "none";
      document.getElementById("firstFlow").style.backgroundColor = "red";
      document.getElementById("second").style.backgroundColor = "red";

      break;
    case 3:
      document.getElementById("firstStep").style.display = "none";
      document.getElementById("secondStep").style.display = "none";
      document.getElementById("third").style.display = "flex";
      document.getElementById("secondFlow").style.backgroundColor = "red";
      document.getElementById("third").style.backgroundColor = "red";
    default:
      return false;
  }
}

function changeAction(option) {
  document.getElementById("you_want_to_show").innerHTML = option;
  document.getElementById("this_is_my_bal").innerHTML = `${data.Amount}$`;
  document.getElementById("you_want_to_show").style.textTransform = "uppercase";
  console.log({ option });
  switch (option) {
    case "withdraw":
      document.getElementById("thirdStep").style.display = "block";
      document.getElementById("showBalance").style.display = "none";
      break;
    case "deposite":
      document.getElementById("thirdStep").style.display = "block";
      document.getElementById("showBalance").style.display = "none";
      break;
    case "balance":
      document.getElementById("thirdStep").style.display = "none";
      document.getElementById("showBalance").style.display = "block";
      break;
    default:
      return false;
  }
}

function handleAmount(amount) {
  if (data.actionYouSelected === "withdraw" && amount > data.Amount) {
    document.getElementById("updated_bal").innerHTML = "Not enough balance";
  }
  if (data.actionYouSelected === "deposite") {
    var depositeAmount = parseInt(data.Amount) + parseInt(amount);
    document.getElementById("updated_bal").innerHTML = depositeAmount;
    updateData({
      Amount: depositeAmount,
    });
  } else {
    var withdrawAmount = parseInt(data.Amount) - parseInt(amount);
    document.getElementById("updated_bal").innerHTML = withdrawAmount;
    updateData({
      Amount: withdrawAmount,
    });
  }
}

// INSERT CARD
// Function to handle cardnumber and card pin
document.getElementById("card-form-btn").addEventListener("click", (e) => {
  console.log("Clicked");
  e.preventDefault();
  const cardNumber = document.getElementById("CARDNUMBER").value;
  const cardPin = document.getElementById("CARD_PIN").value;
  if (cardNumber == "" || cardPin == "") {
    alert("Fill Required field");
  } else {
    alert("Are you sure you want to continue");

    document.getElementById("CARD_NUMBER").innerHTML = cardNumber;
    document.getElementById("FULL_NAME").innerHTML = "Jaspreet Singh";

    updateData({
      card_number: cardNumber,
      card_pin: cardPin,
    });
    changeStep();
  }
});

// ACTION TO PERFORM
// Function to handle options fields
document.getElementById("options-form-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const option_you_selected = document.getElementById("option").value;
  const action_you_selected = document.getElementById("action").value;
  document.getElementById("selectedOption").innerHTML = option_you_selected;
  updateData({
    optionYouSelected: option_you_selected,
    actionYouSelected: action_you_selected,
  });
  changeAction(action_you_selected);
});

document.getElementById("complete_form-btn").addEventListener("click", (e) => {
  const amount_you_entered = document.getElementById("amount").value;

  document.getElementById("written_amount").innerHTML = amount_you_entered;
  document.getElementById("action_you_written").innerHTML =
    data.actionYouSelected;

  handleAmount(amount_you_entered);
});
