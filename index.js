/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-20
 * @author li <li@maichong.it>
 */

import wx from 'labrador';
import immutable from 'seamless-immutable';
import AddressItem from 'al-address-item';

const { array, func } = wx.PropTypes;

export default class Address extends wx.Component {
  propTypes = {
    list: array,
    onItemEdit: func,
    onItemDelete: func,
    onItemAdd: func
  };

  data = {
    list: immutable([])
  };

  children = {
    listItems: new wx.List(AddressItem, 'list', {
      item: '>>',
      onEdit: '#handleItemEdit',
      onDelete: '#handleItemDelete'
    })
  };

  handleItemEdit(component) {
    console.log('al address edit');
    let id = this.data.list[component.key].id;
    this.props.onItemEdit(id);
  }

  handleItemDelete(component) {
    console.log('al address del');
    let id = this.data.list[component.key].id;
    this.props.onItemDelete(id);
  }
  
  handleAddTap() {
    this.props.onItemAdd();
  }

  onUpdate(props) {
    let list = immutable(props.list);
    console.log('al address list ==',props.list);
    this.setData({ list });
  }

  onLoad() {

  }

  onReady() {

  }

  onShow() {

  }

  onHide() {

  }

  onUnload() {

  }


}
