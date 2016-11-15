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

    function describe_items(label, data, max) {
        var total_items = 0;
        Object.keys(data).forEach(function (key) {
            total_items += data[key];
        });
        label.innerHTML = "Current items: " + total_items + "/" + max;
        if (total_items > max) {
            label.style.color = "red";
        } else {
            label.style.color = "black";
        }
        return total_items;
    }

    var curItems = 0;
    var itemMaxValue = 30;
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
        tabBody = document.getElementById("tabbody"),
        itemsLabel = document.getElementById("itemslabel"),
        changeLimitField = document.getElementById("changelimitval"),
        changeLimitBtn = document.getElementById("changelimitbtn"),
        changeItemsErr = document.getElementById("changeitems-err");
        fill_table(tabHeader, tabBody, datiTabella);
    curItems = describe_items(itemsLabel, datiTabella, itemMaxValue, curItems);
    form.style.display = "none";
    showFormBtn.addEventListener("click", function () {
        if (form.style.display === "block") {
            form.style.display = "none";
        } else {
            form.style.display = "block";
            itemNameErr.innerHTML = "";
            itemValErr.innerHTML = "";
        }
    }, false);
    changeLimitBtn.addEventListener("click", function () {
        var newMax = parseInt(changeLimitField.value, 10);
        if (isNaN(newMax)) {
            changeItemsErr.innerHTML = "Not a number!";
        } else {
            itemMaxValue = newMax;
            describe_items(itemsLabel, datiTabella, itemMaxValue);
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
            form.style.display = "none";
            fill_table(tabHeader, tabBody, datiTabella);
            curItems = describe_items(itemsLabel, datiTabella, itemMaxValue);
            itemName.value = "";
            itemVal.value = "";
        }
    }, false);
    var btns = document.getElementsByClassName("btn");
    var alerter = function () {
        if (curItems > itemMaxValue) {
            alert("WARNING!\nThe number of current items exceeds the maximum capacity.");
        }
    };
    Array.prototype.forEach.call(btns, function (el) {
        el.addEventListener("click", alerter);
    });
}());
