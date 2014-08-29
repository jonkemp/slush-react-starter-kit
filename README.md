# [slush](https://github.com/slushjs/slush)-react-starter-kit [![Build Status](https://secure.travis-ci.org/jonkemp/slush-react-starter-kit.png?branch=master)](https://travis-ci.org/jonkemp/slush-react-starter-kit)

> Generator for the [React](http://facebook.github.io/react) Starter Kit

React is a JavaScript library for building user interfaces.

* **Just the UI:** Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
* **Virtual DOM:** React uses a *virtual DOM* diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required.
* **Data flow:** React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

This generator will scoffold out for you a project with the React Hello World example.

[Learn more about how to use React in your own project.](http://facebook.github.io/react/docs/getting-started.html)

## Getting Started

Install `slush-react-starter-kit` globally:

```bash
$ npm install -g slush-react-starter-kit
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-react-starter-kit
```

Run the generator from within the new folder:

```bash
$ cd my-slush-react-starter-kit && slush react-starter-kit
```

You can use Gulp to preview your app by running `gulp`. This task will also reload watched files instantly with livereload. For more information, check out the [gulpfile.js](https://github.com/jonkemp/slush-react-starter-kit/blob/master/templates/gulpfile.js).

## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding. To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/jonkemp/slush-react-starter-kit/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/jonkemp/slush-react-starter-kit/issues).

## License 

The MIT License

Copyright (c) 2014, Jonathan Kemp

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

