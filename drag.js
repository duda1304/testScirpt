function initDragAndDrop() {
	function Init() {  
 
		const fileSelect = document.getElementById('file-upload');
		const	fileDrag = document.getElementById('file-drag');


		fileSelect.addEventListener('change', fileSelectHandler);

    fileDrag.addEventListener('dragover', fileDragHover);
    fileDrag.addEventListener('dragleave', fileDragHover);
    fileDrag.addEventListener('drop', fileSelectHandler);

	}
  

	function fileDragHover(e) {
		const fileDrag = document.getElementById('file-drag');

		e.stopPropagation();
		e.preventDefault();
		
		fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
	}

	function fileSelectHandler(e) {
    
		var files = e.target.files || e.dataTransfer.files;
		
		document.getElementById('file-upload').files = files;
    
    const random = Math.floor(Math.random()*1000);
    
//     const input = `<input type="file" class="file" id=${random}></input>`
		
    $('#email_form').append(`<input type="file" class="file" id=${random}></input>`);
    console.log('dsadasdasd')
    document.getElementById(random).files = files;
    
		fileDragHover(e);
			
		for (var i = 0, f; f = files[i]; i++) {
			parseFile(f);   
		}
	}

	

	function parseFile(file) {
    $('#messages').append(`
			<div class="d-flex flex-row w-100 align-items-start justify-content-between">
      <ul class="text-start">
				<li>Name: <strong>${encodeURI(file.name)}</strong></li>
				<li>Type: <strong>${file.type}</strong></li>
				<li>Size: <strong>${(file.size / (1024 * 1024)).toFixed(2)} MB</strong></li>
			</ul>
			<button class="btn btn-primary ms-2" onclick="this.parentElement.remove();">Remove</button>
			</div>
		`)		
	}
     
 
// 	function setProgressMaxValue(e) {
// 		var pBar = document.getElementById('file-progress');

// 		if (e.lengthComputable) {
// 			pBar.max = e.total;
// 		}
// 	}

// 	function updateFileProgress(e) {
// 		var pBar = document.getElementById('file-progress');

// 		if (e.lengthComputable) {
// 			pBar.value = e.loaded;
// 		}
// 	}

	// function uploadFile(file) {

	// 	var xhr = new XMLHttpRequest(),
	// 		fileInput = document.getElementById('class-roster-file'),
	// 		pBar = document.getElementById('file-progress'),
	// 		fileSizeLimit = 1024;	// In MB
	// 	if (xhr.upload) {
	// 		// Check if file is less than x MB
	// 		if (file.size <= fileSizeLimit * 1024 * 1024) {
	// 			// Progress bar
	// 			pBar.style.display = 'inline';
	// 			xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
	// 			xhr.upload.addEventListener('progress', updateFileProgress, false);

	// 			// File received / failed
	// 			xhr.onreadystatechange = function(e) {
	// 				if (xhr.readyState == 4) {
	// 					// Everything is good!
						
	// 					// progress.className = (xhr.status == 200 ? "success" : "failure");
	// 					// document.location.reload(true);
	// 				}
	// 			};

	// 			// Start upload
	// 			xhr.open('POST', document.getElementById('file-upload-form').action, true);
	// 			xhr.setRequestHeader('X-File-Name', file.name);
	// 			xhr.setRequestHeader('X-File-Size', file.size);
	// 			xhr.setRequestHeader('Content-Type', 'multipart/form-data');
	// 			xhr.send(file);
	// 		} else {
	// 			output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
	// 		}
	// 	}
	// }

	// Check for the various File API support.
// 	if (window.File && window.FileList && window.FileReader) {
// 		Init();
// 	} else {
// 		document.getElementById('file-drag').style.display = 'none';
// 	}
};

export { initDragAndDrop }