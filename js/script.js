var total = 0;

function onLoad(){


var shoppingCart = document.getElementById("shoppingcart");
var containerStyles = document.getElementById("container");
var styles = document.getElementsByClassName("style");

 

    //drag drop from styles to shopping cart//
    shoppingCart.addEventListener("dragover", (ev) => allowDrop(ev));
    shoppingCart.addEventListener("drop", (ev) => drop(ev));
    //drag drop from shopping cart to styles//
    containerStyles.addEventListener("dragover", (ev) => allowDrop(ev));
    containerStyles.addEventListener("drop", (ev) => drop1(ev));

        for (var i = 0; i < styles.length; i++){
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
        var shoppingCart = document.getElementById("shoppingcart");
            ev.preventDefault();
            var data = ev.dataTransfer.getData("productid");
            var price = document.getElementById(data).alt;
            total = total + parseInt(price);
            document.getElementById("totalPrice").innerText = total.toString() + '€';
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.id = "borrar_" + data; 
            deleteButton.addEventListener('click', borrar);
            var producto = document.getElementById(data);
    
            shoppingCart.appendChild(producto);
            shoppingCart.appendChild(deleteButton);
            console.log(shoppingCart.childElementCount);
            
        }
        //--Delete function
        function borrar(ev){
            ev.preventDefault();
            var id = ev.currentTarget.id;
            var split = id.split("_");
            var data = document.getElementById(id);
            var price = document.getElementById(split[1] + "_" + split[2]).alt;
            var producto = document.getElementById(split[1] + "_" + split[2]);
            total = total - parseInt(price);
            document.getElementById("totalPrice").innerText = total.toString() + '€';
            data.remove();
            producto.remove();
            var container = document.getElementById(split[2]);
            data.id = split[1] + "_" + split[2];
            container.appendChild(producto);
        }
        
        