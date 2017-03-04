function buildTable(headers, data) {
  if (data.length % headers.length !== 0) {
    return;
  }
  
  var table = document.createElement('table');
  var headRow = document.createElement('tr');
  
  var cell;
  for (var i = 0; i < headers.length; i++) {
    cell = document.createElement('th');
    cell.textContent = headers[i];
    headRow.appendChild(cell);
  }
  
  table.appendChild(headRow);
  
  var rowCount = data.length / headers.length;
  
  var row;
  var k = 0;
  while (k < data.length) {
    for (var i = 0; i < rowCount; i++) {
      row = document.createElement('tr');

      var cell;
      for (var j = 0; j < headers.length; j++) {
        cell = document.createElement('th');
        cell.textContent = data[k];
        row.appendChild(cell);
        k++;
      }
      table.appendChild(row);
    }
  }
  document.body.appendChild(table);
}

buildTable(['name', 'height', 'country'], ['Kilimanjaro', '5895', 'Tanzania']);
