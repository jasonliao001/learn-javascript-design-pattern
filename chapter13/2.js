var setCommand = function(button, command) {
  button.onclick = function() {
    command.execute();
  };
};
var menuBar = {
  refresh: function() {
    console.log('刷新菜单界面');
  }
};
var RefreshMenuBarCommand = function(receiver) {
  return {
    execute: function() {
      receiver.refresh();
    }
  };
};
var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
setCommand(button1, refreshMenuBarCommand);
