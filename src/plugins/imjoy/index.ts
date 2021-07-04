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

  axios.get(imjoyManifest).then(async response => {
    const windowPlugins = response.data.plugins.filter((plugin: any) => plugin.type === 'window')

    for (const plugin of windowPlugins) {
      console.log(plugin)

      // define imjoy module app window
      const imjoyWindow = imjoyModuleApp.restoreOrAddWindow({
        component: WindowImJoyPlugin,
        name: `Window${plugin.name.replace(' ', '')}`,
        title: plugin.name,
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

      imjoy.event_bus.on("add_window", (w: any) => {
        console.log(`imjoy-${imjoyWindow.uniqueID}`)
        const elem = document.getElementById(`imjoy-${imjoyWindow.uniqueID}`)

        if (elem) {
          elem.id = w.window_id
        }
      })
    }

    await imjoy.start({workspace: 'default'})
      .then(() => console.log('ImJoy started'))
      .catch((e: ErrorEvent) => console.error('Error while starting ImJoy', e))
  }).catch(e => {
    console.error('Error while fetching ImJoy plugins from GitHub', e);
  })
}

export function useImJoy() {
  return imjoy
}