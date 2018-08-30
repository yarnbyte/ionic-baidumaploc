import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name baidumaploc
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BaiduMapLoc } from 'baidumaploc';
 *
 *
 * constructor(private baidumaploc: BaiduMapLoc) { }
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
export declare class BaiduMapLoc extends IonicNativePlugin {
    /**
     * This function get current position
     * @return {Promise<any>} Returns a promise
     */
    getCurrentPosition(): Promise<any>;
}
