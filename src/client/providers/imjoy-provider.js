/*
For more information about service providers, visit:
- https://manual.os-js.org/v3/tutorial/provider/
- https://manual.os-js.org/v3/guide/provider/
- https://manual.os-js.org/v3/development/
*/

import * as imjoyCore from 'imjoy-core'

export default class ServiceProvider {

  /**
   * Constructor
   * @param {Core} core Core reference
   */
  constructor(core, options = {}) {
    /**
     * Core instance reference
     * @type {Core}
     */
    this.core = core;
    this.options = options;
  }

  /**
   * A list of services this provider can create
   * @desc Used for resolving a dependency graph
   * @return {string[]}
   */
  provides() {
    return [

    ];
  }

  /**
   * Initializes provider
   */
  init() {
    return Promise.resolve();
  }

  /**
   * Starts provider
   */
  start() {
    // const imjoy = new imjoyCore.ImJoy({
    //   imjoy_api: {},
    //   //imjoy config
    // });
  
    // imjoy.start({workspace: 'default'}).then(async ()=>{
    //   console.log('ImJoy started');
    // })
  
    // const pm = this.core.make('osjs/packages')
    
    // debugger
  }

  /**
   * Destroys provider
   */
  destroy() {
  }

}
