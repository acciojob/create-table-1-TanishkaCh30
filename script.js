let sample = document.querySelector("#sampleTable");
function insert_Row() {
    let newRow = sample.insertRow(0);
	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);

	newCell1.textContent="New Cell1";
	newCell2.textContent="New Cell2";
	
  
}
