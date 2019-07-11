// 背景： 用户登陆后获取用户角色来指定一个URL有没有权限访问

// 简单工厂模式
UserFactory = function(role) {
  function SuperAdmin() {
    this.name = '超级管理员';
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理'];
  }
  function Admin() {
    this.name = '管理员':
    this.viewPage = ['首页', '通讯录', '发现页', '应用数据'];
  }
  function NormalUser() {
    this.name = '普通用户';this.viewPage = ['首页', '通讯录', '发现页'];
  }

  switch (role) {
    case 'superAdmin':
      return new SuperAdmin();
      break;
    case 'admin':
      return new Admin();
      break;
    case 'user':
      return new NormalUser();
      break;
    default:
      throw new Error('参数错误, 可选参数:superAdmin、admin、user');
  }
};

//调用
let superAdmin = UserFactory('superAdmin');
let admin = UserFactory('admin');
let normalUser = UserFactory('user');
