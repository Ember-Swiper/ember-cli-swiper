# Ember-cli-swiper [![Build Status](https://travis-ci.org/Suven/ember-cli-swiper.svg?branch=master)](https://travis-ci.org/Suven/ember-cli-swiper) [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-swiper.svg)](https://emberobserver.com/addons/ember-cli-swiper) [![Code Climate](https://codeclimate.com/github/Suven/ember-cli-swiper/badges/gpa.svg)](https://codeclimate.com/github/Suven/ember-cli-swiper)

Simple ember-wrapper around [Swiper by idangerous](http://idangero.us/swiper/demos/).

See the [demo](http://suven.github.io/ember-cli-swiper/) for examples and usage-infos.

## Installation

Make sure you are using a somewhat recent version of nodejs when installing. Everything > 4 should be fine.

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

All [available Swiper options](http://idangero.us/swiper/api) are supported and can be configured two ways:

As top level attributes:
```handlebars
{{swiper-container freeMode=true}}
```

As a hash of options:
```handlebars
{{!--
// In controller
Controller.extend({
  myOptions: { parallax: true }
});
--}}

{{swiper-container options=myOptions}}
```

Please note that attribute values will overwrite any conflicting options.

## Running tests

The test-execution requires you to have phantomjs 2.x.x installed.

`ember test`
