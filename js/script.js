var shoppingCart = document.getElementById("shoppingcart");
        var styles = document.getElementsByClassName("style");

        for (var i = 0; i < styles.length; i++){
            styles[i].setAttribute("draggable", "true");
            styles[i].setAttribute("id", "producto"+i);
            styles.addEventListener("dragstart", (ev) => iniciarArrastre(ev))
        }

        function iniciarArrastre(ev){
            ev.dataTransfer.setData("productid", ev.target.id)
            console.log(ev.target.id)
        }