// pages/preview/preview.js
Page({

  data: {
    show: false
  },

  onLoad(options) {
    this.getCurrentTime();
    this.setData({
      name: options.name,
      stuid: options.stuid,
      gatename: options.gatename
    })

    setTimeout(() => {
      this.setData({
        show: true
      })
    }, 2000)
  },

  getCurrentTime() {
    let date = new Date()
    let YY = date.getFullYear()
    let MM = date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1
    let DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    this.setData({
      currentTime: `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
    })
  }

})