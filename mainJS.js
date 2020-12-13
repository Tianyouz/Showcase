
	if (localStorage.getItem("storedIdx") === null || localStorage.getItem("storedList") === null || localStorage.getItem("totalLen") === null){
		localStorage.setItem("storedIdx", "0");
		localStorage.setItem("storedList", JSON.stringify(["Cover Page"]));
		localStorage.setItem("totalLen", "1");
	}
	if (localStorage.getItem("storedIdx") === "0") {document.getElementById("Promptt").innerHTML = "Showing the cover page!";}
	else {document.getElementById("Promptt").innerHTML = "Showing Entry No. " + localStorage.getItem("storedIdx");}        

	var list = JSON.parse(localStorage.storedList);
	localStorage.setItem("storedList", JSON.stringify(list));
        
	
	localStorage.setItem("totalLen", list.length);
	document.getElementById("fentry").value =  (JSON.parse(localStorage.getItem("storedList")))[parseInt(localStorage.getItem("storedIdx"))];

	function prev(){
		if (parseInt(localStorage.getItem("totalLen")) !== 0){
		localStorage.setItem("storedIdx", JSON.stringify(  (parseInt(localStorage.getItem("storedIdx")) + (parseInt(localStorage.totalLen))- 1) % (parseInt(localStorage.totalLen)) ));
		if (localStorage.getItem("storedIdx") === "0") {document.getElementById("Promptt").innerHTML = "Showing the cover page!";}
		else {document.getElementById("Promptt").innerHTML = "Showing Entry No. " + localStorage.getItem("storedIdx");}   
		document.getElementById("fentry").value =  (JSON.parse(localStorage.getItem("storedList")))[parseInt(localStorage.getItem("storedIdx"))];
		}
		
	}
	function next(){
		localStorage.setItem("storedIdx", JSON.stringify(  (parseInt(localStorage.getItem("storedIdx")) + 1) % (parseInt(localStorage.totalLen)) ));
		if (localStorage.getItem("storedIdx") === "0") {document.getElementById("Promptt").innerHTML = "Showing the cover page!";}
		else {document.getElementById("Promptt").innerHTML = "Showing Entry No. " + localStorage.getItem("storedIdx");}   
		document.getElementById("fentry").value =  (JSON.parse(localStorage.getItem("storedList")))[parseInt(localStorage.getItem("storedIdx"))];
	}
	function newEntryFun(){
		
		localStorage.setItem("totalLen", parseInt(localStorage.totalLen) + 1);
		
		var temp = (JSON.parse(localStorage.getItem("storedList")));
		temp.push(document.getElementById("newEntry").value);
		
		localStorage.setItem("storedList", JSON.stringify(temp));
		localStorage.setItem("storedIdx", parseInt(localStorage.totalLen) - 1);
		
		document.getElementById("fentry").value =  (JSON.parse(localStorage.getItem("storedList")))[parseInt(localStorage.getItem("storedIdx"))];
		document.getElementById("Promptt").innerHTML = "Showing entry No. " + localStorage.getItem("storedIdx");
		
	}
	function modifyEntry() { 
		
 		localStorage.setItem((JSON.parse(localStorage.getItem("storedList")))[parseInt(localStorage.getItem("storedIdx"))], document.getElementById("fentry").value);
	}