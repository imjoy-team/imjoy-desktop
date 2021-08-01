import './index.scss';
import osjs from 'osjs';
import {name as applicationName} from './metadata.json';
import { startImageJ } from "./imagej.js";
// Our launcher
const register = (core, args, options, metadata) => {
  // Create a new Application instance
  const proc = core.make('osjs/application', {args, options, metadata});
  
  // Create  a new Window instance
  // proc.createWindow({
  //   id: 'imagejWindow',
  //   title: metadata.title.en_EN,
  //   dimension: {width: 400, height: 400},
  //   position: {left: 700, top: 200}
  // })
  //   .on('destroy', () => proc.destroy())
  //   .render(($content)=>{
  //     const container = document.createElement('div');
  //     container.id = "imagej-container";
  //     container.classList.add('container');
  //     // container.style.backgroundColor = '#ececec';
  //     // container.style.height = "100%";
  //     // container.style.width = "100%";
  //     $content.appendChild(container);
  
  function showDialog({title, buttons}){
        // The window.render() callback
    const callbackRender = ($content, dialogWindow, dialog) => {
      $content.innerHTML = "Hello"
    };

  
    core.make('osjs/dialogs')
      .create({buttons: Object.keys(buttons),
      window: {
        title,
        dimension: {width: 400, height: 400}
      }}, ()=>{

      }, (button)=>{
        buttons[button]();
      })
      .render(callbackRender);

  }
  const container = document.querySelector('.osjs-contents');

  function makeTray(onclick){
    const entry = core.make('osjs/tray', {
      title: 'ImageJ.JS',
      icon: '/apps/ImageJ.JS/assets/icons/chrome/chrome-installprocess-128-128.png',
      onclick(){
        onclick()
        entry.destroy();
      },
    });
  }

  
  startImageJ(container, showDialog, makeTray).catch(console.error);
  //   });

  // Creates a new WebSocket connection (see server.js)
  //const sock = proc.socket('/socket');
  //sock.on('message', (...args) => console.log(args))
  //sock.on('open', () => sock.send('Ping'));

  // Use the internally core bound websocket
  //proc.on('ws:message', (...args) => console.log(args))
  //proc.send('Ping')

  // Creates a HTTP call (see server.js)
  //proc.request('/test', {method: 'post'})
  //.then(response => console.log(response));

  return proc;
};

// Creates the internal callback function when OS.js launches an application
osjs.register(applicationName, register);
