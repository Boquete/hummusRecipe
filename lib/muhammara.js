var muhammara = module.exports = require('./binding/muhammara.node');
var EventEmitter = require('events').EventEmitter;

/*
    addons to PDFWriter prototype for events listening
*/

muhammara.PDFWriter.prototype.getEvents = function() {
    if(!this.events)
        this.events = new EventEmitter();
    return this.events;
}

muhammara.PDFWriter.prototype.triggerDocumentExtensionEvent = function(eventName,eventParams) {
    eventParams.writer = this;
    this.getEvents().emit(eventName,eventParams);
}


/*
    addon class for simple node wrappers
*/
muhammara.PDFStreamForResponse = require('./PDFStreamForResponse');
muhammara.PDFWStreamForFile = require('./PDFWStreamForFile');
muhammara.PDFRStreamForFile = require('./PDFRStreamForFile');
muhammara.PDFRStreamForBuffer = require('./PDFRStreamForBuffer');
muhammara.PDFWStreamForBuffer = require('./PDFWStreamForBuffer');
