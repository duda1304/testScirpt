$(window).on('load', function() {
  getStyles();
  // if ($("a[href^='mailto:']").length !== 0) {
  //   $('body').append(`<div class="modal" tabindex="-1" role="dialog" id="email_form_modal">
  //                     <div class="modal-dialog modal-dialog-centered" role="document">
  //                       <div class="modal-content">
  //                         <div class="modal-header">
  //                           <h5 class="modal-title">Email</h5>
  //                         </div>
  //                         <div class="modal-body">
  //                           <form id="email_form" method="post" enctype="multipart/form-data">
  //                             <div class="mb-3">
  //                               <label for="to" class="form-label">To</label>
  //                               <input type="email" class="form-control mb-2" id="to" name="to" placeholder="name@example.com">
	// 															<small id="validationToField" class="text-danger"></small>
  //                             </div>
 	// 														<div class="mb-3">
  //                               <label for="to" class="form-label">Cc</label>
  //                               <input type="email" class="form-control mb-2" id="cc" name="cc" placeholder="name@example.com">
  //                             </div>
 	// 														<div class="mb-3">
  //                               <label for="bcc" class="form-label">Bcc</label>
  //                               <input type="email" class="form-control mb-2" id="bcc" name="bcc" placeholder="name@example.com">
  //                             </div>
  //                             <div id="editor">
  //                             </div>
  //                             <div id="signature">
  //                             </div>
	// 														<div id="drop_zone" class="border-rounded">
	// 															<input id="file-upload" type="file" name="fileUpload" multiple/>                            
  //                                 <label for="file-upload" id="file-drag">
  //                                     Select a file to upload
  //                                     <br />OR
  //                                     <br />Drag a file into this box
  //                                     <br /><br /><span id="file-upload-btn" class="button">Add a file</span>
  //                                 </label>
  //                                 <progress id="file-progress" value="0">
  //                                     <span>0</span>%
  //                                 </progress>
                                  
	// 														</div>
	// 														<output for="file-upload" id="messages"></output>
  //                           </form>
	// 					  							<p id="response"></p>
  //                         </div>
  //                         <div class="modal-footer">
  //                           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close-modal">Close</button>
  //                           <button type="submit" form="email_form" class="btn btn-primary">Send email</button>	
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>`);
  
  //    const toolbarOptions = [
  //      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //      ['blockquote'],

  //      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  //      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  //      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  //      [{ 'direction': 'rtl' }],                         // text direction

  //      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  //      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //      [{ 'font': [] }],
  //      [{ 'align': [] }],

  //      ['clean'],                                         // remove formatting button

  //      ['image', 'link']

  //    ];
    

  //   const editor = new Quill('#editor', {
  //     modules: {
  //       toolbar: toolbarOptions
  //     },
  //     placeholder: "Type your email content here. Signature below will be added.",
  //     theme: 'snow'
  //   });
  
  // 	const signature = `<hr style="margin-top: 6px; margin-bottom: 6px; border: 0; border-top: 1px solid #dfdfdf;">
  //                   <div><span><b>Sanas - <a style="color: black;">www.sachkunde-arzneimittel.de</a></b>
  //                   <br>
  //                   <span>Sachkundenachweis Arzneimittel (IHK)
  //                   <br>Dunckerstr. 20, 10437 Berlin<br>Tel.: 030/69207073
  //                   </span><br> </span></div>
  //                   <hr style="margin-top: 6px; margin-bottom: 6px; border: 0; border-top: 1px solid #dfdfdf;">
  //                   <br>
  //                   <br>`;
  
  
  // 	$('#signature').html(signature);
    
  //   $('#email_form_modal').css('font-size', '14px');
  //   $('input::placeholder').css('font-size', '14px');
    
  //   $('.ql-editor').css('font-size', '14px');
  //   $('.ql-editor').css('min-height', '250px');
    
   
   
  //   $('#email_form_modal #to').on('focus', function(){
  //     $('#email_form_modal #validationToField').text('');
  //   });

  //   $('#email_form_modal input[type="email"]').on('keydown', function(e) {
  //     if (e.keyCode === 13 || e.which === 13) {
  //       e.preventDefault();
  //       if ($(e.target).is(':valid')) {
  //          	$(e.target).after(`<div class='badge text-bg-primary m-1 p-2 user-select-none' data-type='${e.target.id}'>${e.target.value}  <span class='cursor-pointer user-select-none' onclick='this.parentElement.remove();'>X</span></div>`);
  //       		e.target.value = '';          	
  //       }
  //     }
  //   });
    
    
  //   $('#email_form').on('submit', function(e) {
  //     e.preventDefault();
      
  //     let emails = {
  //     	"to" : [],
  //     	"cc" : [],
  //       "bcc" : []
  //     }
            
      
  //     $('#email_form_modal .badge').each(function(){
  //     	const email = $(this).contents().filter(function() {
  //         return this.nodeType === 3; 
  //       }).text().trim();
  //       emails[$(this).data('type')].push(email);
  //     });
      
  //     if (emails.to.length === 0) {
  //     	$('#email_form_modal #validationToField').text('Please enter email address');
  //       return
  //     }

      
  //     const formData = {
  //       "to" : emails.to,
  //       "cc" : emails.cc,
  //       "bcc" : emails.bcc,
  //       "message" :  editor.root.innerHTML + signature,
  //       "attachment" : $('#file-upload')[0].files
  //     };

  //   sendEmail(formData);    

  //   }); 
    
  //   $("a[href^='mailto:']").each(function() {
  //   	$(this).on('click', function(e) {
  //       e.preventDefault();
  //      	$('#email_form_modal').modal('show');
  //       $('#email_form_modal').css('z-index', 99999);
  //       $('.modal-backdrop').css('z-index', 99998);
  //       initDragAndDrop();       
  //     })
  //   })
  // }  
});


// function sendEmail(data) {
// 	console.log(data);
// }

// async function getStyles() {
//   fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css')
//     .then(response => response.text())
//     .then(cssContent => {
//       const styleElement = document.createElement('style');
//       styleElement.textContent = cssContent;
//       document.body.appendChild(styleElement);
//     })
//     .catch(error => console.error(error));
//   fetch('https://cdn.quilljs.com/1.3.6/quill.snow.css')
//     .then(response => response.text())
//     .then(cssContent => {
//       const styleElement = document.createElement('style');
//       styleElement.textContent = cssContent;
//       document.body.appendChild(styleElement);
//     })
//     .catch(error => console.error(error));
//     fetch('https://webhooks.sakuam.de/development/mailto/style.css')
//     .then(response => response.text())
//     .then(cssContent => {
//       const styleElement = document.createElement('style');
//       styleElement.textContent = cssContent;
//       document.body.appendChild(styleElement);
//     })
//     .catch(error => console.error(error));
// }