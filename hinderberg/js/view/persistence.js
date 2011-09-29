(function(){

  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };

  function guid() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  };
  
  function Persistence(name) {
    this.name = name;
    var store = localStorage.getItem(this.name);
    this.data = (store && JSON.parse(store)) || {};
  }
  
  $.extend(Persistence.prototype, {
    create: function (model) {
      model.id = guid();
      this.data[model.id] = model;
      this._save();
      return this;
    },
    
    update: function (model) {
      this.data[model.id] = model;
      this._save();
      return this;
    },
    
    destroy: function (id) {
      delete this.data[id];
      this._save();
      return this;
    },
    
    find: function (id) {
      return this.data[id];
    },
    
    findAll: function () {
      var a = [];
      for (key in this.data) {
        a.push(this.data[key]);
      }
      return a;
    },
    
    count: function () {
      return this.data.length;
    },
    
    // private
    
    _save: function () {
      localStorage.setItem(this.name, JSON.stringify(this.data));
    }
  });
  
  
  window.reminders = window.reminders || {};
  window.reminders.Persistence = Persistence;
})();