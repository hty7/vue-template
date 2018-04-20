module.exports = {
  buttom: {
    cancel: 'cancel',
    determine: 'ok',
    login: 'login',
    signOut: 'signOut',
    registered: 'registered',
    search: 'search',
    submit: 'submit',
    save: 'save',
    rememberPW: 'Remember password'
  },
  optionMessage: {
    systemName: 'Back office management system',
    admin: 'ADMIN',
    pushButton: 'Accept push',
    hints: 'Switch skin',
    skin1: 'Dark Forest',
    skin2: 'Ivory',
    lang: 'Lang',
    zh: 'SChinese',
    zhCHT: 'TChinese',
    en: 'English'
  },
  message: {
    name: 'name',
    sex: 'sex',
    address: 'address',
    career: 'Career',
    date: 'date'
  },
  routers: [
    {path: 'home', router: true, title: 'Home', icon: 'home', color: 'orange darken-2'},
    {path: 'location', router: true, title: 'Lists', icon: 'transfer_within_a_station', color: 'blue'},
    {path: 'announcement', router: true, title: 'announcement', icon: 'record_voice_over', color: 'purple'}
  ]
}
