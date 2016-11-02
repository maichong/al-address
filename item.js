/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-20
 * @author li <li@maichong.it>
 */

import wx from 'labrador';
import immutable from 'seamless-immutable';

const { object, func } = wx.PropTypes;

export default class AddressItem extends wx.Component {
  propTypes = {
    item: object,
    onEdit: func,
    onDelete: func,
    onTap: func
  };

  data = {
    item: immutable({}),
    longTap: false,
    modalHidden: true
  };

  children = {};

  handleEditTap() {
    console.log('address item edit');
    this.props.onEdit();
  }

  onUpdate(props) {
    this.setData({ item: immutable(props.item) });
  }

  handleTap() {
    if (this.data.longTap) {
      this.setData({ longTap: false });
    } else {
      console.log('handleTap');
      this.props.onTap();
    }
  }

  handleLongTap() {
    console.log('handlelongTap');
    this.setData({ longTap: true, modalHidden: false });
  }

  handleConfirm() {
    this.setData({ modalHidden: true });
    this.props.onDelete();
  }

  handleCancel() {
    this.setData({ modalHidden: true });
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
