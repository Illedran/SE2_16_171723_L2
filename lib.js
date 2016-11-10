/*jslint browser:true */

(function () {
    "use strict";
    var showFormBtn = document.getElementById("showformbtn"),
        form = document.getElementById("itemform"),
        submitBtn = document.getElementById("submitbtn"),
        itemName = document.getElementById("itemname"),
        itemVal = document.getElementById("itemval"),
        itemNameErr = document.getElementById("itemname-err"),
        itemValErr = document.getElementById("itemval-err"),
        tabBody = document.getElementById("bodyrow"),
        tabHeader = document.getElementById("headerrow");
    form.style.display = 'none';
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
            tabHeader.insertCell(-1).innerHTML = newItemName;
            tabBody.insertCell(-1).innerHTML = newItemVal;
            itemName.value = "";
            itemVal.value = "";
        }
    }, false);
}());
