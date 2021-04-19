var total = 0;

function onLoad(){


var shoppingCart = document.getElementById("shoppingcart");
var styles = document.getElementsByClassName("style");


    shoppingCart.addEventListener("dragover", (ev) => allowDrop(ev));
    shoppingCart.addEventListener("drop", (ev) => drop(ev));


        for (var i = 0; i < styles.length; i++){
            styles[i].setAttribute("draggable", "true");
            styles[i].setAttribute("id", "product"+i);
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
            shoppingCart.appendChild(document.getElementById(data));
            console.log(shoppingCart.childElementCount);
            
        }

       // var deleteItem = document.createElement('button');
       // deleteItem.classList.add('btn', 'btn-danger', 'mx-5');
       // deleteItem.textContent = "X";
       // deleteItem,addEventListener('click', deleteItemCart);        