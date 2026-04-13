import {
    JupyterFrontEnd, 
    JupyterFrontEndPlugin
} from '@jupyterlab/application';

const extension: JupyterFrontEndPlugin<void> = {
    id: 'lyons:main',
    autoStart: true,
    activate: (
        app: JupyterFrontEnd,
    ) => {
        console.log("Hello world from Lyons!")
    }
}
export default extension;