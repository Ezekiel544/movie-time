let market = [
    { image: 'war.jpg', title: 'War', price: 10 , quantity: 1},
    { image: 'tron.jpg', title: 'Tron', price: 12 , quantity: 1},
    { image: 'rrr.webp', title: 'RRR', price: 8 , quantity: 1},
    { image: 'leo.webp', title: 'Leo', price: 2 , quantity: 1},
    { image: 'pirate.jpg.crdownload', title: 'Pirate', price: 5 , quantity: 1},
    { image: 'justice.jpg', title: 'Justice league', price: 33 , quantity: 1},
    { image: 'ripd.jpg', title: 'Ripd', price: 50 , quantity: 1},
    { image: 'monster.jpg', title: 'Monster', price: 45 , quantity: 1},
];

let cartLocal = localStorage.getItem('allCart');
let allCart = cartLocal ? JSON.parse(cartLocal) : [];

function updateCart() {
    localStorage.setItem('allCart', JSON.stringify(allCart));  
    let cart = document.getElementById("basket");
    cart.innerHTML = allCart.length;
}

// Function to display menu items
function display() {
    let menuItems = '';
    market.forEach((m, index) => {
        menuItems += `<div class="menu-item">
                <img src="./img/${m.image}" alt="${m.title}">
                <h3>${m.title}</h3>
                <button class="borrow">borrow</button>
                <button class="add-btn" data-index="${index}">Add to Cart</button>
            </div>`;
    });
    document.getElementById('menu-section').innerHTML = menuItems;
}


function loadCart() {
    if (allCart.length > 0) {
        let cart = document.getElementById("basket");
        cart.innerHTML = allCart.length; 
    }
}


display();
loadCart();


let addBtn = document.getElementsByClassName("add-btn");
for (let index = 0; index < addBtn.length; index++) {
    addBtn[index].addEventListener("click", () => {
        let menuItem = market[index];
        
        let cartSearch = allCart.find((cartItem) => cartItem.title === menuItem.title);
        
        if (cartSearch === undefined) {
          
            allCart.push({
                title: menuItem.title,
                price: menuItem.price,
                quantity: 1,
            });
            updateCart();
            alert(`1 ${menuItem.title} has been added successfully`);
        } else {
           
            cartSearch.quantity += 1;
            updateCart();
            alert(`You added ${menuItem.title} with a quantity of ${cartSearch.quantity}`);
        }   

        
    });
}
let search = document.getElementById("search");
search.addEventListener("click", () => {
    let enter = document.getElementById("enter").value.trim().toLowerCase();
    let menuItems = document.querySelectorAll   (".menu-item");
 

    menuItems.forEach(item => {
        let title = item.querySelector("h3").textContent.trim().toLowerCase(); 

        if (title.includes(enter)) { 
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

document.querySelectorAll('.borrow').forEach(button => {
    button.addEventListener('click', function() {
      
        alert("you have requested to borrow  movie, they action is under a review")
    });
});
