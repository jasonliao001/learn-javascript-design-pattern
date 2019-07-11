var Upload = function( uploadType){
    this.uploadType = uploadType;
};
Upload.prototype.delFile = function( id ){
	uploadManager.setExternalState( id, this ); // (1)
	if ( this.fileSize < 3000 ){
		return this.dom.parentNode.removeChild( this.dom );
	}
    if ( window.confirm( '确定要删除该文件吗? ' + this.fileName ) ){
        return this.dom.pacrrentNode.removeChild( this.dom );
	}
};
var UploadFactory = (function(){
	var createFlyWeightObjs = {};
    return {
        create:function(uploadType){
            if(createFlyWeightObjs[uploadType]){
                return createdFlyWeightObjs [ uploadType];
            }
            return createdFlyWeightObjs [ uploadType] = new Upload( uploadType);
        }
    }
})
var uploadManager = (function(){
    var uploadDatabase = {};
	return {
        add: function( id, uploadType, fileName, fileSize ){
            var flyWeightObj = UploadFactory.create( uploadType );
            var dom = document.createElement( 'div' ); dom.innerHTML =
            '<span>文件名称:'+ fileName +', 文件大小: '+ fileSize +'</span>' + '<button 		class="delFile">删除</button>';
            dom.querySelector( '.delFile' ).onclick = function(){
                flyWeightObj.delFile( id );
                document.body.appendChild( dom );
                uploadDatabase[ id ] = { fileName: fileName, fileSize: fileSize, dom: dom
                };
                return flyWeightObj ;
            },
         setExternalState: function( id, flyWeightObj ){
             var uploadData = uploadDatabase[ id ];
             for ( var i in uploadData ){
                 flyWeightObj[ i ] = uploadData[ i ];
             }
         }
}
 var id = 0;
window.startUpload = function( uploadType, files ){
   for ( var i = 0, file; file = files[i++ ]){
      var uploadObj = uploadManager.add( ++id, uploadType, file.fileName, 	file.fileSize 		);
    }
};