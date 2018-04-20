module.exports = {
  buttom: {
    cancel: '取消',
    determine: '确定',
    login: '登陆',
    signOut: '退出登陆',
    registered: '注册',
    search: '查询',
    submit: '提交',
    save: '保存',
    rememberPW: '记住密码'
  },
  optionMessage: {
    systemName: '后台管理系统',
    admin: '管理员',
    pushButton: '接受推送',
    hints: '切换皮肤',
    skin1: '黑暗森林',
    skin2: '象牙白',
    lang: '语言',
    zh: '简体中文',
    zhCHT: '繁体中文',
    en: '英文'
  },
  message: {
    name: '姓名',
    sex: '性别',
    address: '邮箱',
    career: '职业',
    date: '日期'
  },
  routers: [
    {path: 'home', router: true, title: '主页', icon: 'home', color: 'orange darken-2'},
    {path: 'location', router: true, title: '列表', icon: 'transfer_within_a_station', color: 'blue'},
    {path: 'announcement', router: true, title: '公告', icon: 'record_voice_over', color: 'purple'}
  ]
}
