/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name baidumaploc
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { baidumaploc } from '@ionic-native/baidumaploc';
 *
 *
 * constructor(private baidumaploc: baidumaploc) { }
 *
 * ...
 *
 *
 * this.baidumaploc.getCurrentPosition()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'BaiduMapLoc',
  plugin: 'cordova-plugin-baidumaplocation', // npm package name, example: cordova-plugin-camera
  pluginRef: 'baidumap_location', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/aruis/cordova-plugin-baidumaplocation', // the github repository URL for the plugin
  install: 'cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY=API_KEY_ANDROID --variable IOS_KEY=API_KEY_IOS', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['ANDROID_KEY', 'IOS_KEY'], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class BaiduMapLoc extends IonicNativePlugin {

  /**
   * This function get current position
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  getCurrentPosition(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
