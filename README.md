# baidumaploc
感谢[aruis](https://github.com/aruis)大神提供的这个cordova插件，帮我们解决了cordova项目安卓定位的问题，于是本人在这个插件的基础上，稍微弄了一下，让这个cordova插件更好地在Ionic中使用。当然，原本的cordova插件用起来也不复杂了，看个人爱好选用吧。


## 1 安装[cordova-plugin-baidumaplocation](https://www.npmjs.com/package/cordova-plugin-baidumaplocation/)插件，具体可直接参考原作者的说明文档。

```
ionic cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY="<API_KEY_ANDROID>" --variable IOS_KEY="<API_KEY_IOS>"
```

## 2 使用npm安装该模块
```
npm i baidumaploc --save
```

## 3 使用方法
### 1)添加到```app.modules.ts```
```
import { BaiduMapLoc } from 'baidumaploc';
  ...
@NgModule({
  ...
providers: [
  ...,
  BaiduMapLoc
]
```
### 2) 使用
```
constructor(...,public baidumaploc: BaiduMapLoc) {

}

getCurrentPos(){
  this.baidumap.getCurrentPosition().then((res)=>{
      console.log(res);
      alert(JSON.stringify(res));

    }).catch((error)=>{
      console.log(error);
    })
}
```
