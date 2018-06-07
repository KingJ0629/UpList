// pages/second/second.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 待添加的todo内容
    inputContent: '',
    array: []
  },

  // 完成todo
  itemChange: function(e) {
    var content = this.data.array[e.target.dataset.index].content

    var pages = getCurrentPages();
    // 获取上一个页面
    var prevPage = pages[pages.length - 2];

    var value = prevPage.data.inputContent
    var index = value.indexOf(prevPage.data.specialTxt)
    value = value.substring(0, index) + content
    prevPage.setData({
      inputContent: value,
    })

    // 关闭当前页面，回到上一个页面
    wx.navigateBack({
      delta: 1
    })
  },

  // 待添加的todo内容输入框事件
  inputEvent: function(e) {
    var value = e.detail.value
    this.setData({
      inputContent: value
    })
  },

  submit: function(e) {
    const length = this.data.array.length
    var value = this.data.inputContent

    if (value == '') {
      return
    }

    value = value.replace("草莓老头", "小可爱")
    value = value.replace("小母鸡", "小可爱") 
    var dealArray = this.data.array.concat([{ customId: length, content: value }])
    this.setData({
      inputContent: '',
      array: dealArray
    })
    app.globalData.customArray = dealArray
    console.log(app.globalData.customArray)
  },

  // 添加todo按钮
  submitBtn: function (e) {
    this.submit(e)
  },

  inputConfirm: function(e) {
    this.submit(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化数据
    this.setData({
      array: app.globalData.customArray
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})