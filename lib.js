/*jslint browser:true */

(function () {
    "use strict";
    var showFormBtn = document.getElementById("showformbtn"),
        form = document.getElementById("form"),
        submitBtn = document.getElementById("submitbtn"),
        itemName = document.getElementById("itemname"),
        itemVal = document.getElementById("itemval"),
        itemNameErr = document.getElementById("itemname-err"),
        itemValErr = document.getElementById("itemval-err"),
        tabBody = document.getElementById("bodyrow"),
        tabHeader = document.getElementById("headerrow");
    showFormBtn.addEventListener('click', function () {
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    }, false);
    submitBtn.addEventListener('click', function () {
        var newItemName,
            newItemVal = parseInt(itemVal.value, 10);
        if (itemName.value.length > 0) {
            newItemName = itemName.value;
            itemNameErr.innerHTML = "";
        } else {
            itemNameErr.innerHTML = "Empty!";
        }
        if (isNaN(newItemVal)) {
            itemValErr.innerHTML = "Not a number!";
        } else {
            itemValErr.innerHTML = "";
        }
        if (newItemName && !isNaN(newItemVal)) {
            var newCellHeader = tabHeader.insertCell(-1),
                newCellBody = tabBody.insertCell(-1);
            newCellHeader.innerHTML = newItemName;
            newCellBody.innerHTML = newItemVal;
            itemName.value = "";
            itemVal.value = "";
        }
    }, false);
}());
