var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row = 1;

function displayDetails()
{
    var name=document.getElementById("name").value;
    var vname=document.getElementById("vname").value;
    var number=document.getElementById("number").value;
    var edate=document.getElementById("edate").value;
    var exdate=document.getElementById("exdate").value;

    if(!name || !vname || !number || !edate || !exdate )
    {
        alert("please fill all the above boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);



    cell1.innerHTML = name;
    cell2.innerHTML = vname;
    cell3.innerHTML = number;
    cell4.innerHTML =edate;
    cell5.innerHTML = exdate;

     row=row+1;
}
