var Beverage = function(param) {
  var boilWater = function() {
    console.log('把水煮沸');
  };
  var brew =
    param.brew ||
    function() {
      throw new Error('必须传递 brew 方法');
    };
  var pourInCup =
    param.pourInCup ||
    function() {
      throw new Error('必须传递 pourInCup 方法');
    };
  var F = function() {};
  F.prototype.init = function() {
    boilWater();
    brew();
    pourInCup();
  };
  return F;
};
var Coffee = Beverage({
  brew: function() {
    console.log('用沸水冲泡咖啡');
  },
  pourInCup: function() {
    console.log('把咖啡倒进杯子');
  },
  addCondiments: function() {
    console.log('加糖和牛奶');
  }
});
var Tea = Beverage({
  brew: function() {
    console.log('用沸水浸泡茶叶');
  },
  pourInCup: function() {
    console.log('把茶倒进杯子');
  },
  addCondiments: function() {
    console.log('加柠檬');
  }
});
var coffee = new Conffee();
coffee.init();

var tea = new Tea();
tea.init();
