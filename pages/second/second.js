// pages/second/second.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 待添加的todo内容
    inputContent: '',
    todoArray: [
      { todoId: 1, todo: 'P1.1 执行数据库脚本 张XX 10min', checked: false, 
      lineStyle: 'none', disable: false, color: '#333333'},
      { todoId: 0, todo: 'P1.2 生产环境代码发布 李XX 5min', checked: false, 
      lineStyle: 'none', disable: false, color: '#333333'},
    ],
  },

  // 整理todoArray 把checked为true的放到列表后面
  sort: function (e) {
    var dataset = e.target.dataset
    var index = dataset.index
    var dealArray = this.data.todoArray

    // 设置点击的那个item为选中，并且移动到最下面
    var item = dealArray.splice(index, 1)
    item[0].checked = true
    item[0].lineStyle = 'line-through'
    item[0].disable = true
    item[0].color = '#aaaaaa'
    dealArray = dealArray.concat(item)

    this.sortArray(dealArray)
  },

  // array排序 checked为true的在底下
  sortArray: function (dealArray) {
    var arrayTmp1 = [], arrayTmp2 = []
    var size = dealArray.length
    for (let i = 0; i < size; i++) {
      if (dealArray[i].checked == false) {
        arrayTmp1 = arrayTmp1.concat(dealArray[i])
      } else {
        arrayTmp2 = arrayTmp2.concat(dealArray[i])
      }
    }
    dealArray = arrayTmp1.concat(arrayTmp2)

    this.setData({
      todoArray: dealArray
    })
  },

  // 完成todo
  itemChange: function(e) {
    this.sort(e);
  },

  // 待添加的todo内容输入框事件
  inputEvent: function(e) {
    var value = e.detail.value
    this.setData({
      inputContent: value
    })
  },

  submit: function(e) {
    const length = this.data.todoArray.length
    var value = this.data.inputContent
    value = value.replace("草莓", "猪")
    value = value.replace("母鸡", "猪") 
    var dealArray = this.data.todoArray.concat([{ todoId: length, todo: value, checked: false }])
    this.sortArray(dealArray)
    this.setData({
      inputContent: ''
    })
  },

  // 添加todo按钮
  submitBtn: function (e) {
    this.submit(e)
  },

  inputConfirm: function(e) {
    this.submit(e)
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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