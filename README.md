# al-address
***
AL address 地址列表组件
### 使用方式
---
安装npm包
```
npm install al-address --save
```
导入page中的js页面
```js
import Address from 'al-address';

 children = {
    address: new Address({
      ...
    })
  };
```
导入page中的xml文件
```xml
<component key="address" name="al-address"/>
```
导入page中的less文件
```css
@import 'al-address';
```
### 接口说明
---
|props    |type | Description|
|---------|:----|:-----------|
|list|Array|地址数据列表，符合alaska-address service数据结构，详见[[alaska-address]](https://github.com/maichong/alaska-address/blob/master/src/models/Address.js)|
|onItemEdit|Function|地址编辑事件，返回要操作元素的`id`|
|onItemDelete|Function|地址删除事件，常按时，在modal提示框内点击`是`按钮之后触发删除事件，返回要操作元素的`id`。|
|onItemAdd|Function|新增地址事件。点击组件内`添加按钮`时触发。|
|onItemTap|Function|点击事件。点击组件内每一项时触发。|
---
#### 关于页面和组件间相互传值以及该组件所依赖的基础框架详见[labrador](https://github.com/maichong/labrador);
---
