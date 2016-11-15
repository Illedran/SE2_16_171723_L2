/*jslint browser:true */



(function () {
    "use strict";

    function fill_table(header, body, data) {
        var header_row = "";
        var body_row = "";
        Object.keys(data).forEach(function (key) {
            header_row += "<td>" + key + "</td>";
            body_row += "<td>" + data[key] + "</td>";
        });
        header.innerHTML = "<tr>" + header_row + "</tr>";
        body.innerHTML = "<tr>" + body_row + "</tr>";
    }

    var datiTabella = {
        item1: 4,
        item2: 6,
        item3: 7
    };
    var showFormBtn = document.getElementById("showformbtn"),
        form = document.getElementById("itemform"),
        submitBtn = document.getElementById("submitbtn"),
        itemName = document.getElementById("itemname"),
        itemVal = document.getElementById("itemval"),
        itemNameErr = document.getElementById("itemname-err"),
        itemValErr = document.getElementById("itemval-err"),
        tabHeader = document.getElementById("tabheader"),
        tabBody = document.getElementById("tabbody");
    fill_table(tabHeader, tabBody, datiTabella);
    form.style.display = "none";
    showFormBtn.addEventListener("click", function () {
        if (form.style.display === "block") {
            form.style.display = "none";
        } else {
            form.style.display = "block";
        }
    }, false);
    submitBtn.addEventListener("click", function () {
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
            if (datiTabella.hasOwnProperty(newItemName)) {
                datiTabella[newItemName] += newItemVal;
            } else {
                datiTabella[newItemName] = newItemVal;
            }
            fill_table(tabHeader, tabBody, datiTabella);
            itemName.value = "";
            itemVal.value = "";
        }
    }, false);
}());
