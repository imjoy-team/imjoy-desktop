/*!
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2020, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */

//
// This is the client bootstrapping script.
// This is where you can register service providers or set up
// your libraries etc.
//
// https://manual.os-js.org/v3/guide/provider/
// https://manual.os-js.org/v3/install/
// https://manual.os-js.org/v3/resource/official/
//
import * as imjoyCore from 'imjoy-core'

import {
  Core,
  CoreServiceProvider,
  DesktopServiceProvider,
  VFSServiceProvider,
  NotificationServiceProvider,
  Application,
  BasicApplication,
  SettingsServiceProvider,
  AuthServiceProvider
} from '@osjs/client';

import { EventEmitter } from '@osjs/event-emitter';
import { PanelServiceProvider } from '@osjs/panels';
import { GUIServiceProvider } from '@osjs/gui';
import { DialogServiceProvider } from '@osjs/dialogs';
import config from './config.js';
import './index.scss';

function removeMountpoint(core, name) {
  const foundIndex = core.configuration.vfs.mountpoints.findIndex(mount => mount.name === name)
  if (foundIndex !== -1) {
    core.configuration.vfs.mountpoints.splice(foundIndex, 1)
  }
}

function registerApp(pm, { name, category, singleton = false, run }) {
  const metadata = {
    name,
    type: 'application',
    singleton: singleton,
    autostart: false,
    hidden: false,
    icon: null,
    category,
    groups: [],
    title: {
      "en_EN": name
    },
    // A map of localized descriptions
    description: {
      "en_EN": name
    },
  };

  // const pkgs = new Packages(osjs);
  pm.addPackages([metadata]);
  pm.register(name, run);
}

const init = () => {
  const osjs = new Core(config, {});
  removeMountpoint(osjs, 'home')
  removeMountpoint(osjs, 'osjs')
  // Register your service providers
  osjs.register(CoreServiceProvider);
  osjs.register(DesktopServiceProvider);
  osjs.register(VFSServiceProvider);
  osjs.register(NotificationServiceProvider);
  osjs.register(SettingsServiceProvider, { before: true });
  osjs.register(AuthServiceProvider, { before: true });
  osjs.register(PanelServiceProvider);
  osjs.register(DialogServiceProvider);
  osjs.register(GUIServiceProvider);

  osjs.boot().then(() => {
    const pm = osjs.make('osjs/packages');
    const imjoy = new imjoyCore.ImJoy({
      imjoy_api: {},
      //imjoy config
    });

    imjoy.start({ workspace: 'default' }).then(async () => {
      imjoy.event_bus.on("add_window", async (w) => {
        const win = osjs.make('osjs/window', {
          id: w.window_id,
          title: w.name,
          dimension: {
            width: w.w * 30,
            height: w.h * 30
          }
        })
        win.render($content => {
          const container = document.createElement('div');
          container.id = w.window_id;
          container.style.backgroundColor = '#ececec';
          container.style.height = "100%";
          container.style.width = "100%";
          $content.appendChild(container);
        });
      })

      console.log('ImJoy started');
      registerApp(pm, {
        name: "Kaibu", category: "science", async run() {
          const viewer = await imjoy.api.createWindow({ src: "https://kaibu.org/#/app", name: "Kaibu" })
          await viewer.view_image("https://images.proteinatlas.org/61448/1319_C10_2_blue_red_green.jpg")
          await viewer.add_shapes([], { name: "Annotation" })
        }
      })

      registerApp(pm, {
        name: "JupyterLite", category: "science", async run() {
          await imjoy.api.createWindow({ src: "https://jupyter.imjoy.io", name: "JupyterLite", passive: true })
        }
      })

      registerApp(pm, {
        name: "Code", category: "science", async run() {
          await imjoy.api.createWindow({ src: "https://vscode.dev", name: "Code", passive: true })
        }
      })

      registerApp(pm, {
        name: "elFinder", category: "science", async run() {
          await imjoy.api.createWindow({ src: "https://fm.imjoy.io", name: "elFinder" })
        }
      })

      registerApp(pm, {
        name: "ImJoy Slides", category: "science", async run() {
          await imjoy.api.createWindow({ src: "https://slides.imjoy.io", name: "ImJoy Slides" })
        }
      })

      registerApp(pm, {
        name: "ImJoy Chart", category: "science", async run() {
          await imjoy.api.createWindow({ src: "https://chart.imjoy.io", name: "ImJoy Chart" })
        }
      })

      registerApp(pm, {
        name: "HPA UMAP Studio", category: "science", async run() {
          const editor = await imjoy.api.createWindow({
            src: 'https://chart.imjoy.io',
            name: 'HPA UMAP Studio',
            fullscreen: true
          })
          await editor.loadDataSource("https://dl.dropbox.com/s/k9ekd4ff3fyjbfk/umap_results_fit_all_transform_all_sorted_20190422.csv")
        }
      })
    })
  })



};

window.addEventListener('DOMContentLoaded', () => init());
