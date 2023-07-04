selectTeam();
function selectTeam() {
  let team = document.getElementById("team").value;
  document.getElementById("info").innerHTML = `Tem selecionado a ${team} `;
}

let list = document.querySelectorAll(".list .item");
list.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (event.target.classList.contains("add")) {
      var itemNew = item.cloneNode(true);
      let checkIsset = false;

      let listCart = document.querySelectorAll(".cart .item");
      listCart.forEach((cart) => {
        if (cart.getAttribute("data-key") == itemNew.getAttribute("data-key")) {
          checkIsset = true;
          cart.classList.add("danger");
          setTimeout(function () {
            cart.classList.remove("danger");
          }, 1000);
        }
      });
      if (checkIsset == false) {
        document.querySelector(".listCart").appendChild(itemNew);
      }
    }
  });
});

function Remove($key) {
  let listCart = document.querySelectorAll(".cart .item");
  listCart.forEach((item) => {
    if (item.getAttribute("data-key") == $key) {
      item.remove();
      return;
    }
  });
}

function myFunction() {
  alert("A Cozinha Recebeu o pedido! Vai começar a confeção do mesmo");
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Start with the modal closed
modal.style.display = "none";

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Function to add item to the cart
function addToCart(key) {
  const item = document.querySelector(`.item[data-key="${key}"]`);
  const price = parseFloat(item.querySelector(".price").innerText);
  const count = parseInt(item.querySelector(".count").value);

  const totalPriceElement = document.getElementById("totalPrice");
  const totalPrice = parseFloat(totalPriceElement.innerText);

  const newTotalPrice = totalPrice + price * count;
  totalPriceElement.innerText = newTotalPrice.toFixed(2) + "€";
}

// Event listener for "Adicionar conta" buttons
const addButtons = document.querySelectorAll(".add");
addButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const key = parseInt(this.parentNode.parentNode.getAttribute("data-key"));
    addToCart(key);
  });
});
