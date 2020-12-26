//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: '吴彦祖',
    stuid: '1871234',
    gatename: '浑南校区西门',
    show: true
  },


  bindNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },

  bindStuidInput(e) {
    this.setData({
      stuid: e.detail.value
    })
  },

  bindGatenameInput(e) {
    this.setData({
      gatename: e.detail.value
    })
  },

  goPreview() {
    if (this.data.name == '' || this.data.stuid == '' || this.data.gatename == '') {
      wx.showToast({
        title: '请填写完整',
        icon: 'none'
      })
      return;
    }

    //扫码成功后会短暂显示当前页面才跳转，所以加这个变量把当前页面隐藏
    this.setData({
      show: false
    })
    wx.scanCode({
      success: () => {
        wx.redirectTo({
          url: '/pages/preview/preview?name=' + this.data.name + '&stuid=' + this.data.stuid + '&gatename=' + this.data.gatename,
        })
      }
    })
  }
})