function addRow() {

  var myName = document.getElementById("name");
  var email = document.getElementById("email");
  var mobileNo = document.getElementById("mobileNo");

  if(myName.value.trim()==null || myName.value==""){
    alert("Name is not valid");
  }
  else{
    if(email.value.trim()==null || email.value==""){
      alert("email is not valid");
    }
    else{

      if (mobileNo.value.length < 10 || mobileNo.value.length > 10) {
        alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
      }

      else{
      window.localStorage.setItem('myName', myName.value);
      window.localStorage.setItem('email', email.value);
      window.localStorage.setItem('mobileNo', mobileNo.value);

      console.log(localStorage);


      var table = document.getElementById("myTableData");

      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);
    
      row.insertCell(0).innerHTML= window.localStorage.getItem('myName');
      row.insertCell(1).innerHTML= window.localStorage.getItem('email');
      row.insertCell(2).innerHTML= window.localStorage.getItem('mobileNo');
      row.insertCell(3).innerHTML='<input type="button" value = "Remove" onClick="Javacsript:deleteRow(this)">';

      emptyInputs();
      }
}
  }
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

  function emptyInputs() {
    var myName = document.getElementById("name");
    var email = document.getElementById("email");
    var mobileNo = document.getElementById("mobileNo");

    myName.value='';
    email.value='';
    mobileNo.value='';
  }

  