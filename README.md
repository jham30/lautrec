# Lautrec
A framework that helps creating user interface design in easy and efficient
way. Made with less css with performance in mind.

## Using in other projects

Install with bower directly from github:

    bower install git://github.com/jham30/lautrec.git

This include, as appropriate, the following files:

    bower_components/lautrec/dist/lautrec.css
    bower_components/lautrec/dist/lautrec.min.js

or, if you are working with Less Css and you need to use the Lautrec mixins:

    @import "<path>/bower_components/lautrec/less/lautrec.less";

## Build for development

To build the Css and minified JS please do:

    bower install
    npm install
    grunt build
