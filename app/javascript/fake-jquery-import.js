// import {} from 'jquery-ujs';
import '@rails/ujs'

// A little jQuery extension to allow us to get all the attributes
// of a given element at once
(function wrap(old) {
  $.fn.attr = function attr(...args) {
    if (args.length === 0) {
      if (this.length === 0) {
        return null;
      }

      const obj = {};
      $.each(this[0].attributes, function attrCallback() {
        if (this.specified) {
          obj[this.name] = this.value;
        }
      });
      return obj;
    }

    return old.apply(this, args);
  };
})($.fn.attr);

// export default $;
// jQuery is defined globally by the jquery-ujs package,
// but for some reason it isn't making itself globally available
// in all of our packages, so we need to do this to make it available
// globally throughout the application
// window.$ = $;
