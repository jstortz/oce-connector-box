/*global window:true*/
(function() {
    'use strict';
   
    var name = window.name; // name set on iframe element to uniquely identify the instance
    var receiver = window.opener || window.parent;
    var origin = "*";
    function _postMessage(msg) {
      msg.name = name;
      receiver.postMessage(msg, origin);
    }
   
    var namespace = "OCE"; //todo: allow passing in data attribute
    if (!window[namespace]) {
      window[namespace] = {};
    }
    var OCE = window[namespace];
   
    if (!OCE.CustomPicker) {
   
      OCE.CustomPicker = {
   
        selection: [],
   
        addItem: function(id, name, type, size) {
          var item = {id: id, name: name, type: type, size: size};
          this.selection.push(item);
          this.onChange();
        },
   
        removeItem: function(id) {
          this.selection = this.selection.filter(function(item) {
            return item.id !== id;
          });
          this.onChange();
        },
   
        onInit: function(cbInit) {
          var msg = {
            message: 'init',
            needAuthToken: true
          };
          _postMessage(msg);
          this.messageListener = this.onPostMessage.bind(this);
          window.addEventListener('message', this.messageListener, false);
          this.cbInit = cbInit;
        },
   
        onClose: function() {
          window.removeEventListener('message', this.messageListener, false);
        },
   
        onPostMessage: function(event) {
          if (event.data && event.data.message === "init") {
            if (this.cbInit) {
              this.cbInit(event.data);
            }
          }
        },
   
        onChange: function() {
          var msg = {
            message: 'change',
            selection: this.selection
          };
          _postMessage(msg);
        },
   
        onOk: function(selection) {
          selection = selection || this.selection;
          var msg = {
            message: 'ok',
            selection: this.selection
          };
          _postMessage(msg);
        },
   
        onCancel: function() {
          var msg = {
            message: 'cancel'
          };
          _postMessage(msg);
        }
      };
    }
   
  })();