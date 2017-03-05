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

function byTagName(node, tag) {
  function iter(node, elements) {
    if (node.children.length === 0) {
      return elements;
    }
    
    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].tagName === tag.toUpperCase()) {
        elements.push(node.children[i]);
      }
      
      if (node.children[i].children.length !== 0) {
        elements = iter(node.children[i], elements);
      }
    }
    return elements;
  }
  
  return iter(node, []);
}

alert(byTagName(document.body, 'h1').length);
alert(byTagName(document.body, 'span').length);
var p = document.body.querySelector('p');
alert(byTagName(p, 'span').length);

buildTable(['name', 'height', 'country'], ['Kilimanjaro', '5895', 'Tanzania']);
