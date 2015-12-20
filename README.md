# [slush](https://github.com/slushjs/slush)-react-starter-kit [![Build Status](https://secure.travis-ci.org/jonkemp/slush-react-starter-kit.png?branch=master)](https://travis-ci.org/jonkemp/slush-react-starter-kit)

> Generator for the [React](http://facebook.github.io/react) Starter Kit

React is a JavaScript library for building user interfaces.

* **Just the UI:** Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
* **Virtual DOM:** React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using [React Native](https://facebook.github.io/react-native/).
* **Data flow:** React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

This generator will scaffold out for you a project with the React Hello World example.

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

MIT © [Jonathan Kemp](http://jonkemp.com)
