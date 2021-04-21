let total = 0;

function onLoad(){


let shoppingCart = document.getElementById("shoppingcart");
let containerStyles = document.getElementById("container");
let styles = document.getElementsByClassName("style");

 

    //drag drop from styles to shopping cart//
    shoppingCart.addEventListener("dragover", (ev) => allowDrop(ev));
    shoppingCart.addEventListener("drop", (ev) => drop(ev));
    //drag drop from shopping cart to styles//
    containerStyles.addEventListener("dragover", (ev) => allowDrop(ev));
    containerStyles.addEventListener("drop", (ev) => drop1(ev));

        for (let i = 0; i < styles.length; i++){
            styles[i].setAttribute("draggable", "true");
            styles[i].setAttribute("id", "product" + i + "_" + styles[i].parentNode.id);
            styles[i] .addEventListener("dragstart", (ev) => startDrag(ev))
        }
    }

        function startDrag(ev){
            ev.dataTransfer.setData("productid", ev.target.id)
            console.log(ev.target.id)
        }

        function allowDrop(ev){
            console.log("dragging");
            ev.preventDefault();
        }
        //-- Drop function + total//
        function drop(ev){
        let shoppingCart = document.getElementById("shoppingcart");
            ev.preventDefault();
            let data = ev.dataTransfer.getData("productid");
            let price = document.getElementById(data).alt;
            total = total + parseInt(price);
            document.getElementById("totalPrice").innerText = total.toString() + '€';
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.id = "borrar_" + data; 
            deleteButton.addEventListener('click', borrar);
            let producto = document.getElementById(data);
    
            shoppingCart.appendChild(producto);
            shoppingCart.appendChild(deleteButton);
            console.log(shoppingCart.childElementCount);
            
        }
        //--Delete function
        function borrar(ev){
            ev.preventDefault();
            let id = ev.currentTarget.id;
            let split = id.split("_");
            let data = document.getElementById(id);
            let price = document.getElementById(split[1] + "_" + split[2]).alt;
            let producto = document.getElementById(split[1] + "_" + split[2]);
            total = total - parseInt(price);
            document.getElementById("totalPrice").innerText = total.toString() + '€';
            data.remove();
            producto.remove();
            let container = document.getElementById(split[2]);
            data.id = split[1] + "_" + split[2];
            container.appendChild(producto);
        }
        
        