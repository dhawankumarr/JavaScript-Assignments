function addRow() {

  var myName = document.getElementById("name");
  var age = document.getElementById("age");
  var dob = document.getElementById("dob");
  var dob1 = document.getElementById("dob1"); 
  var dob2 = document.getElementById("dob2");
  var email = document.getElementById("email");
  var cName = document.getElementById("cname");

  var table = document.getElementById("myTableData");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML= myName.value;
  row.insertCell(1).innerHTML= age.value;
  row.insertCell(2).innerHTML= dob.value + "-" + dob1.value+ "-" +dob2.value;
  row.insertCell(3).innerHTML=email.value;
  row.insertCell(4).innerHTML=cName.value;
  row.insertCell(5).innerHTML='<input type="button" value = "Remove" onClick="Javacsript:deleteRow(this)">';

  }

  function deleteRow(obj) {

  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
  
  }

  function addTable() {

  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border='1';
  
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i=0; i<6; i++){
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);

  for (var j=0; j<7; j++){
  var td = document.createElement('TD');
  td.width='100';
  td.appendChild(document.createTextNode("Cell " + i + "," + j));
  tr.appendChild(td);
  }
  }
  myTableDiv.appendChild(table);
  
  }

  function load() {
  
  console.log("Page load finished");

  }