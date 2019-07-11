var Singleton = function( name ){
	this.name = name;
    this.instance = null;
};
Singleton.prototype.getName = function(){
    alert ( this.name );
};
Singleton.getInstance = function( name ){
    if ( !this.instance ){
		this.instance = new Singleton( name );
    }
		return this.instance;
	};
var a = Singleton.getInstance( 'sven1' );
var b = Singleton.getInstance( 'sven2' );
alert ( a === b ); // true

// 透明单例
var CreateDiv = (function(){
    var instance;
	var CreateDiv = function( html ){
        if ( instance ){
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
	};
    CreateDiv.prototype.init = function(){
        var div = document.createElement( 'div' );
        div.innerHTML = this.html;
        document.body.appendChild( div );
    };
	return CreateDiv;
})();
var a = new CreateDiv( 'sven1' );
var b = new CreateDiv( 'sven2' );
alert ( a === b ); // true
// 引入代理类
 var CreateDiv = function( html ){
     this.html = html;
     this.init();
 };
CreateDiv.prototype.init = function(){
    var div = document.createElement( 'div' );
    div.innerHTML = this.html;
    document.body.appendChild( div );
};
var ProxySingletonCreateDiv = (function(){
    var instance;
    return function( html ){
    if ( !instance ){
    	instance = new CreateDiv( html );
    }
    return instance;
}
a = new ProxySingletonCreateDiv( 'sven1' );
b = new ProxySingletonCreateDiv( 'sven2' );
alert ( a === b ); // true
// 惰性单例
var getSingle = function( fn ){
    var result;
    return function(){
    	return result || ( result = fn .apply(this, arguments ) );
	}
};