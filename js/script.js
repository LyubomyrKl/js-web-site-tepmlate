window.addEventListener('DOMContentLoaded', function() {

   const tabs = require('./modules/tabs'),
         timer = require('./modules/timer'),
         cards = require('./modules/cards'),
         forms = require('./modules/forms'),
         slider = require('./modules/slider'),
         modal = require('./modules/modal'),
         calc = require('./modules/calc');
    tabs();
    timer();
    cards();
    forms();
    slider();
    modal();
    calc();
});