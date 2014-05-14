function WriteReq(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function WritableState(e,t){e=e||{};var n=e.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var i=e.decodeStrings===!1;this.decodeStrings=!i,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){onwrite(t,e)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function Writable(e){var t=require("./_stream_duplex");return this instanceof Writable||this instanceof t?(this._writableState=new WritableState(e,this),this.writable=!0,Stream.call(this),void 0):new Writable(e)}function writeAfterEnd(e,t,n){var i=Error("write after end");e.emit("error",i),process.nextTick(function(){n(i)})}function validChunk(e,t,n,i){var r=!0;if(!Buffer.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!t.objectMode){var a=new TypeError("Invalid non-string/buffer chunk");e.emit("error",a),process.nextTick(function(){i(a)}),r=!1}return r}function decodeChunk(e,t,n){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new Buffer(t,n)),t}function writeOrBuffer(e,t,n,i,r){n=decodeChunk(t,n,i),Buffer.isBuffer(n)&&(i="buffer");var a=t.objectMode?1:n.length;t.length+=a;var s=t.length<t.highWaterMark;return s||(t.needDrain=!0),t.writing?t.buffer.push(new WriteReq(n,i,r)):doWrite(e,t,a,n,i,r),s}function doWrite(e,t,n,i,r,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,e._write(i,r,t.onwrite),t.sync=!1}function onwriteError(e,t,n,i,r){n?process.nextTick(function(){r(i)}):r(i),e._writableState.errorEmitted=!0,e.emit("error",i)}function onwriteStateUpdate(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function onwrite(e,t){var n=e._writableState,i=n.sync,r=n.writecb;if(onwriteStateUpdate(n),t)onwriteError(e,n,i,t,r);else{var a=needFinish(e,n);a||n.bufferProcessing||!n.buffer.length||clearBuffer(e,n),i?process.nextTick(function(){afterWrite(e,n,a,r)}):afterWrite(e,n,a,r)}}function afterWrite(e,t,n,i){n||onwriteDrain(e,t),i(),n&&finishMaybe(e,t)}function onwriteDrain(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function clearBuffer(e,t){t.bufferProcessing=!0;for(var n=0;t.buffer.length>n;n++){var i=t.buffer[n],r=i.chunk,a=i.encoding,s=i.callback,o=t.objectMode?1:r.length;if(doWrite(e,t,o,r,a,s),t.writing){n++;break}}t.bufferProcessing=!1,t.buffer.length>n?t.buffer=t.buffer.slice(n):t.buffer.length=0}function needFinish(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function finishMaybe(e,t){var n=needFinish(e,t);return n&&(t.finished=!0,e.emit("finish")),n}function endWritable(e,t,n){t.ending=!0,finishMaybe(e,t),n&&(t.finished?process.nextTick(n):e.once("finish",n)),t.ended=!0}module.exports=Writable;var Buffer=require("buffer").Buffer;Writable.WritableState=WritableState;var util=require("core-util-is");util.inherits=require("inherits");var Stream=require("stream");util.inherits(Writable,Stream),Writable.prototype.pipe=function(){this.emit("error",Error("Cannot pipe. Not readable."))},Writable.prototype.write=function(e,t,n){var i=this._writableState,r=!1;return"function"==typeof t&&(n=t,t=null),Buffer.isBuffer(e)?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof n&&(n=function(){}),i.ended?writeAfterEnd(this,i,n):validChunk(this,i,e,n)&&(r=writeOrBuffer(this,i,e,t,n)),r},Writable.prototype._write=function(e,t,n){n(Error("not implemented"))},Writable.prototype.end=function(e,t,n){var i=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),e!==void 0&&null!==e&&this.write(e,t),i.ending||i.finished||endWritable(this,i,n)};