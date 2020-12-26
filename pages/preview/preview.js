// pages/preview/preview.js
Page({

  data: {
    show: false
  },

  onLoad(options) {
    this.getCurrentTime();
    console.log(options)
    this.setData({
      name: options.name,
      stuid: options.stuid,
      gatename: options.gatename
    })

    setTimeout(() => {
      this.setData({
        show: true
      })
    }, 3000)
  },

  getCurrentTime() {
    let date = new Date()
    let YY = date.getFullYear()
    let MM = parseInt(date.getMonth()) < 10 ? '0' + date.getMonth() : date.getMonth()
    let DD = parseInt(date.getDay()) < 10 ? '0' + date.getDay() : date.getDay()
    let hh = parseInt(date.getHours()) < 10 ? '0' + date.getHours() : date.getHours()
    let mm = parseInt(date.getMinutes()) < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let ss = parseInt(date.getSeconds()) < 10 ? '0' + date.getSeconds() : date.getSeconds()
    this.setData({
      currentTime: `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
    })
  }

})