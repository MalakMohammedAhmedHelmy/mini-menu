
const menu =document.getElementById("menu");
async function  getproudect() {
  const response =  await fetch("https://exam-iota-drab.vercel.app/api/v1/products");
const data = await response.json();
  const jsonproducts = data.data;
  console.log(jsonproducts);
  jsonproducts.map((loop) => {
    const htmlstring = `
                  <div class="header"><h1 id="menu">Food Menu</h1>
    <div class="continer" >
        <div class="card" >
      <img src="food/burger.jpg" alt="burger" />
      <h2>Burger</h2>
      <p id="burger">
      </p>
      <div class="price"><h3>20$</h3></div>
    </div>
    <div class="card">
      <img src="food/cheese cake.jpg" alt="cheese cake" />
      <h2>Cheese Cake</h2>
      <p id="cheese cake">
      </p>
      <div class="price"><h3>10$</h3></div>
    </div>
    <div class="card">
      <img src="food/Chicken Steak.jpg" alt="Chicken Steak" />
      <h2>Chicken Steak</h2>
      <p id="Chicken Steak">
      </p>
      <div class="price"><h3>25$</h3></div>
    </div>
    `;
    menu.innerHTML += htmlstring;
})
};
  getproudect();