// 内部迭代器
var each = function( ary, callback ){
    for ( var i = 0, l = ary.length; i < l; i++ ){
     callback.call( ary[i], i, ary[ i ] );
    each( [ 1, 2, 3 ], function( i, n ){
        alert ( [ i, n ]
    );
});
// 中止迭代
var each = function( ary, callback ){
for ( var i = 0, l = ary.length; i < l; i++ ){
    if ( callback( i, ary[ i ] ) === false ){
        break;
    }
}
};
each( [ 1, 2, 3, 4, 5 ], function( i, n ){
   if ( n > 3 ){ return false;}    //callback 的执行结果返回 false，提前终止迭代
   console.log( n );    // n大于3的时候终止循环 // 分别输出:1, 2, 3
});
// 外部迭代器
var Iterator = function( obj ){
var current = 0;
var getCurrItem = function(){
        return obj[ current ];
};
var isDone = function(){
       return current > obj.length
}
return {
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem
}
}

