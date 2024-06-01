
function makePizza() {
  fetchDough(function (dough) {
    fetchSauce(dough, function (doughSauce) {
      fetchChicken(doughSauce, function (doughSauceChicken) {
        fetchCheeze(doughSauceChicken, function (doughSauceChickenCheeze) {
          bakePizza(doughSauceChickenCheeze, function (bakedPizza) {
            servePizza(bakedPizza, function (servedPizza) {
            });
          });
        });
      });
    });
  });
};

function fetchDough(cb) {
  console.log("fetching dough...");

  setTimeout(function () {
    const newItem = "Dough";
    console.log("Dough Fetched");
    console.log("Fetched Items till now:", newItem);
    cb(newItem);
  }, 3000);
}
function fetchSauce(dough, cb) {
  console.log("Fetching Sauce...");

  setTimeout(function () {
    const newItem = "Sauce";
    console.log("Sauce Fetched");
    console.log("Fetched Items till now:", dough + newItem);
    cb(dough + newItem)
  }, 3000);
}

function fetchChicken(sauce, cb) {
  console.log("Fetching Chicken...");

  setTimeout(function () {
    const newItem = "Chicken";
    console.log("Chicken Fetched");
    console.log("Fetched Items till now:", sauce + newItem);
    cb(sauce + newItem);
  }, 3000);
}

function fetchCheeze(chicken, cb) {
  console.log("Fetching cheeze...");

  setTimeout(function () {
    const newItem = "Cheeze";
    console.log("Cheeze Fetched");
    console.log("Fetched Items till now:", chicken + newItem);
    cb(chicken + newItem);
  }, 3000);
}

function bakePizza(cheeze, cb) {
  console.log("Baking Pizza...");

  setTimeout(function () {
    const newItem = "Bake";
    console.log("Pizza Baked");
    console.log("Fetched Items till now:", cheeze + newItem);
    cb(cheeze + newItem)
  }, 3000);
}

function servePizza() {
  console.log("Serving Pizza...");

  setTimeout(function () {
    const newItem = "Pizza";
    console.log("Pizza Served");
    console.log("Enjoy Your Pizza:");
  }, 3000);
}
makePizza()
