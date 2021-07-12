// @ts-ignore
import * as imjoyCore from 'imjoy-core'
import axios from "axios";

import {ModuleApp, useDesktop} from "@owd-client/core/index";
import {OwdModuleAppInfo} from "@owd-client/types";

import WindowImJoyPlugin from "./components/WindowImJoyPlugin.vue";

const imjoyManifest = 'https://raw.githubusercontent.com/imjoy-team/imjoy-plugins/master/manifest.imjoy.json'

const imjoy = new imjoyCore.ImJoy({
  imjoy_api: {},
});

export default async function installImJoy() {
  const desktop = useDesktop()

  // create imjoy module app
  const imjoyModuleApp = desktop.modulesApp.createModuleApp(class ImJoyModule extends ModuleApp {
    setup(): OwdModuleAppInfo {
      return {
        name: 'imjoy',
        singleton: true
      }
    }
  })

  const windowPlugins = await axios.get(imjoyManifest).then(async response => {
    return response.data.plugins.filter((plugin: any) => plugin.type === 'window')
  })

  await imjoy.start({workspace: 'default'})
    .then(() => {
      console.log('ImJoy started')
      imjoy.event_bus.on("add_window", w => {
        const imjoyWindowInstance = imjoyModuleApp.createWindow({
          component: WindowImJoyPlugin,
          name: `Window${w.name.replace(' ', '')}`,
          title: w.name,
          category: 'plugins',
          icon: "mdi-puzzle",
          size: {
            width: 448,
            height: 240
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          },
          resizable: true,
          theme: {
            noContentSpacing: true
          },
          metaData: {
            iframeUrl: ""
          }
        })

        const div = document.createElement('div')
        div.id = w.id;
        document.getElementById(`imjoy-${imjoyWindowInstance.uniqueID}`)?.appendChild(div);

        if (imjoyWindowInstance) {
          imjoyWindowInstance.open(true)
        }
      })

      // for (const plugin of windowPlugins) {
        desktop.store.commit('core/launcher/ADD', {
          title: "Kaibu",
          icon: 'mdi-puzzle',
          category: 'plugins',
          callback: async () => {
            await imjoy.api.createWindow({src: 'https://kaibu.org', name: 'Kaibu'})
          }
        })
      // }
      
    })
    .catch((e: ErrorEvent) => console.error('Error while starting ImJoy', e))
}

export function useImJoy() {
  return imjoy
}
