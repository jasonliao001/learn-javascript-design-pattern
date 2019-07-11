// 背景 使用wechat，qq，weibo。三类社交媒体账户来登陆就是对应的类簇

let AccountAbstractFactory = function(subType, superType) {
  //判断抽象工厂中是否有该抽象类
  if (typeof AccountAbstractFactory[superType] === 'function') {
    //缓存类
    function F() {}
    //继承父类属性和方法
    F.prototype = new AccountAbstractFactory[superType]();
    //将子类的constructor指向子类
    subType.constructor = subType;
    //子类原型继承父类
    subType.prototype = new F();
  } else {
    throw new Error('抽象类不存在!');
  }
};

//微信用户抽象类
AccountAbstractFactory.WechatUser = function() {
  this.type = 'wechat';
};
AccountAbstractFactory.WechatUser.prototype = {
  getName: function() {
    return new Error('抽象方法不能调用');
  }
};

//qq用户抽象类
AccountAbstractFactory.QqUser = function() {
  this.type = 'qq';
};
AccountAbstractFactory.QqUser.prototype = {
  getName: function() {
    return new Error('抽象方法不能调用');
  }
};

//新浪微博用户抽象类
AccountAbstractFactory.WeiboUser = function() {
  this.type = 'weibo';
};
AccountAbstractFactory.WeiboUser.prototype = {
  getName: function() {
    return new Error('抽象方法不能调用');
  }
};

//普通微信用户子类
function UserOfWechat(name) {
  this.name = name;
  this.viewPage = ['首页', '通讯录', '发现页'];
}
//抽象工厂实现WechatUser类的继承
AccountAbstractFactory(UserOfWechat, 'WechatUser');
//子类中重写抽象方法
UserOfWechat.prototype.getName = function() {
  return this.name;
};

//普通qq用户子类
function UserOfQq(name) {
  this.name = name;
  this.viewPage = ['首页', '通讯录', '发现页'];
}
//抽象工厂实现QqUser类的继承
AccountAbstractFactory(UserOfQq, 'QqUser');
//子类中重写抽象方法
UserOfQq.prototype.getName = function() {
  return this.name;
};

//普通微博用户子类
function UserOfWeibo(name) {
  this.name = name;
  this.viewPage = ['首页', '通讯录', '发现页'];
}
//抽象工厂实现WeiboUser类的继承
AccountAbstractFactory(UserOfWeibo, 'WeiboUser');
//子类中重写抽象方法
UserOfWeibo.prototype.getName = function() {
  return this.name;
};

//实例化微信用户
let wechatUserA = new UserOfWechat('微信小李');
console.log(wechatUserA.getName(), wechatUserA.type); //微信小李 wechat
let wechatUserB = new UserOfWechat('微信小王');
console.log(wechatUserB.getName(), wechatUserB.type); //微信小王 wechat

//实例化qq用户
let qqUserA = new UserOfQq('QQ小李');
console.log(qqUserA.getName(), qqUserA.type); //QQ小李 qq
let qqUserB = new UserOfQq('QQ小王');
console.log(qqUserB.getName(), qqUserB.type); //QQ小王 qq

//实例化微博用户
let weiboUserA = new UserOfWeibo('微博小李');
console.log(weiboUserA.getName(), weiboUserA.type); //微博小李 weibo
let weiboUserB = new UserOfWeibo('微博小王');
console.log(weiboUserB.getName(), weiboUserB.type); //微博小王 weibo
