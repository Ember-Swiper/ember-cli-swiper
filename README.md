# Ember-cli-swiper [![Build Status](https://travis-ci.org/Ember-Swiper/ember-cli-swiper.svg?branch=master)](https://travis-ci.org/Ember-Swiper/ember-cli-swiper) [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-swiper.svg)](https://emberobserver.com/addons/ember-cli-swiper) [![Code Climate](https://codeclimate.com/github/Ember-Swiper/ember-cli-swiper/badges/gpa.svg)](https://codeclimate.com/github/Ember-Swiper/ember-cli-swiper)

Simple ember-wrapper around [Swiper by idangerous](https://idangero.us/swiper/demos/).

See the [demo](https://ember-swiper.github.io/ember-cli-swiper/) for examples and usage-infos.

Installation
------------------------------------------------------------------------------

`ember install ember-cli-swiper`

## Usage

```handlebars
{{#swiper-container}}
  {{#swiper-slide}}Slide 1{{/swiper-slide}}
  {{#swiper-slide}}Slide 2{{/swiper-slide}}
  {{#swiper-slide}}Slide 3{{/swiper-slide}}
  {{#swiper-slide}}Slide 4{{/swiper-slide}}
  {{#swiper-slide}}Slide 5{{/swiper-slide}}
{{/swiper-container}}
```

## Options

All [available Swiper options](https://idangero.us/swiper/api) are supported and can be configured two ways:

As top level attributes:
```handlebars
{{swiper-container freeMode=true}}
```

As a hash of options:
```js
// In controller
Controller.extend({
  myOptions: { parallax: true }
});

{{swiper-container options=myOptions}}
```

## Events
All [Swiper events](https://idangero.us/swiper/api/#events) are configured as an `events` action map like so:
```handlebars
{{swiper-container events=(hash click=(action "myClickHandler"))}}
```

Please note that attribute values will overwrite any conflicting options.

## Running tests

`ember test`
