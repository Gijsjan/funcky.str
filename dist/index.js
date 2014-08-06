(function() {
  module.exports = {
    str: function(str) {
      return {

        /* Escape a regular expression */
        escapeRegExp: function() {
          return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        },
        ucfirst: function() {
          return str.charAt(0).toUpperCase() + str.slice(1);
        },
        slugify: function() {
          var from, index, strlen, to;
          from = "àáäâèéëêìíïîòóöôùúüûñç·/_:;";
          to = "aaaaeeeeiiiioooouuuunc-----";
          str = str.trim().toLowerCase();
          strlen = str.length;
          while (strlen--) {
            index = from.indexOf(str[strlen]);
            if (index !== -1) {
              str = str.substr(0, strlen) + to[index] + str.substr(strlen + 1);
            }
          }
          return str.replace(/[^a-z0-9 -]/g, '').replace(/\s+|\-+/g, '-').replace(/^\-+|\-+$/g, '');
        },
        toElement: function() {
          var div;
          div = document.createElement('div');
          div.innerHTML = str;
          return div.firstChild;
        }
      };
    }
  };

}).call(this);
