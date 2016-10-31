# al-address
AL address 地址列表组件，该组件依赖al-address-item组件，用来显示地址列表。
### 使用方式
```
//安装npm包
npm install al-address --save

//导入page中的js页面
import Address from 'al-address';

 children = {
    address: new Address({
      ...
    })
  };
  
//导入page中的xml文件
<component key="address" name="al-address"/>

//导入page中的less文件
@import 'al-address';
```
### 接口说明
- list : Array
地址数据列表，符合alaska-address service数据结构，结构如下:  
```
[
    {  
    "id":"580eff833eb5cd0008b5667b",
    "name":"王朝",
    "tel":"13512312312",
    "province":"香港特别行政区",
    "city":"九龙",
    "district":"九龙城区",
    "detail":"五花街新龙大厦1234室",
    "createdAt":"2016-10-25T06:45:24.025Z",
    "often":false
    }
]
```
- onItemEdit(): id
地址编辑事件，返回要操作元素的id。
示例代码：
```
 children = {
    address: new Address({
      onItemEdit: '#handleItemEdit'
    })
  };
  handleItemEdit(id) {
    console.log('page address handleItemEdit', id);
  }
```
- onItemDelete():id
地址删除事件，内置modal提示框，点击确定之后触发删除事件，返回要操作元素的id。
示例代码：
```
 children = {
    address: new Address({
      onItemDelete: '#handleItemDelete'
    })
  };
  handleItemDelete(id) {
    console.log('page address handleItemDelete', id);
  }
```
-onItemAdd():void
新增地址事件。点击组件内添加按钮时触发。
示例代码：
```
 children = {
    address: new Address({
      onItemAdd: '#handleAdd'
    })
  };
  handleAdd() {
    console.log('page address handleAdd');
  }
```
-onItemTap():id
点击事件。点击组件内每一项时触发。
示例代码：
```
 children = {
    address: new Address({
      onItemTap: '#handleTap'
    })
  };
  handleTap(id) {
    console.log('page address handleTap');
  }
```

#### 关于页面和组件间相互传值以及该组件所依赖的基础框架详见[labrador](https://github.com/maichong/labrador);
