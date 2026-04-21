import {
    JupyterFrontEnd, 
    JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { Notification } from '@jupyterlab/apputils';

const extension: JupyterFrontEndPlugin<void> = {
    id: 'lyons:main',
    autoStart: true,
    activate: (
        app: JupyterFrontEnd,
    ) => {
        console.log("testing again") 
        function createNotification() {
            Notification.info("Only items in 'Files' are editable, items in 'Pubs' are read only.", {autoClose: 30000})
        }
        // timeout needed to allow pop up notification on the screen
        setTimeout(createNotification, 1000)
    }
}
export default extension;