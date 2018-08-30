var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
 * this.baidumaploc.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var BaiduMapLoc = (function (_super) {
    __extends(BaiduMapLoc, _super);
    function BaiduMapLoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function get current position
     * @return {Promise<any>} Returns a promise
     */
    /**
       * This function get current position
       * @return {Promise<any>} Returns a promise
       */
    BaiduMapLoc.prototype.getCurrentPosition = /**
       * This function get current position
       * @return {Promise<any>} Returns a promise
       */
    function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    BaiduMapLoc.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BaiduMapLoc.prototype, "getCurrentPosition", null);
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
     * this.baidumaploc.functionName('Hello', 123)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    BaiduMapLoc = __decorate([
        Plugin({
            pluginName: 'BaiduMapLoc',
            plugin: 'cordova-plugin-baidumaplocation',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'baidumap_location',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/aruis/cordova-plugin-baidumaplocation',
            // the github repository URL for the plugin
            install: 'cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY=API_KEY_ANDROID --variable IOS_KEY=API_KEY_IOS',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: ['ANDROID_KEY', 'IOS_KEY'],
            // OPTIONAL the plugin requires variables
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], BaiduMapLoc);
    return BaiduMapLoc;
}(IonicNativePlugin));
export { BaiduMapLoc };
//# sourceMappingURL=index.js.map