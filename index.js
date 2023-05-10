import { initDragAndDrop } from "./drag";
import { getStyles } from "./getStyles";
import { sendEmail } from "./sendEmail";
import { createEmailModal } from "./createEmailModal";
import { getScripts } from "./getScripts";

console.log('start')
$(window).on('load', async function() {
    
    await getStyles();
    await getScripts();console.log('Scripta and all loaded')
    createEmailModal();
});