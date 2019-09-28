<div class="info">
  <h1 class="name" align="center">nodetts</h1>
</div>


## Summary
A NodeJS package to generate sound file from text.

Basically a text-to-speech, and save it for you to a file. This tool works over Google Translate's API hence needing internet to actually work. This is designed to be a port of [text-to-speech-file](https://github.com/shrotavre/text-to-speech-file). Built over JS Promises.


## Get Started
### Installation

Install `nodetts` using the [npm](https://www.npmjs.com/) package manager:

```sh
# install globally to use nodetts command
$ npm install -g nodetts

# install as package/library
$ npm install nodetts
```

### Usage
#### Using as Shell Command

If you installed nodetts as global package, you can use `nodetts` to generate voice files from texts wherever, directly from your shell.

```bash
# install globally to use nodetts command
$ npm install -g nodetts

# BASIC ARGS:
# run this command for the most basic usage
# this will create 'Hello from Shrotavre.mpg' in your current directory
$ nodetts text="Hello from Shrotavre!"


# OTHER ARGS:
# 'dir' and 'name' args to set where to save the files
$ nodetts text="Hello!" dir="/Documents/voices" name="test.mpg" 

# 'lang' arg to set voice language/locale
# see here for more information on available locales:
$ nodetts text="Halo, apa kabar?" lang="id"

# 'speed' arg to set voice talking speed. default value is 2.5
$ nodetts text="Hello!" speed=6
```

#### Using as NodeJS Package/Library

The basic usages of `nodetts` are like this:

```js
import nodetts from 'nodetts'

// Generate speech from text and save to a file
await nodetts.file("~/voices/hello.mpg", "Hello from Indonesia!")

// Other available functions:
// Generate file url only. This func also need internet to work
const url = await nodetts.url("Hello from Indonesia!")

// Generate file stream you can pipe
const stream = await nodetts.stream("Hello from Indonesia!")
const testfile = fs.createWriteStream("~/voices/test.mpg")

stream.pipe(testfile)

fwstream.on('finish', function () {
    fwstream.close(callbackfn)
})
```

All `nodetts.file()`, `nodetts.url()`, an `nodetts.stream()` also support two additional parameters you can supply:


```js
// You can change two parameters in the last 2 params of function:
// - locales/lang: (string) like `en`/`id` default to `en`
// - speech speed: (float) like 2.5 default to `2.5`
await nodetts.file("~/voices/hello.mpg", "Hello from Indonesia!", "en", 2.5)

// also supported in url() and stream()
const url = await nodetts.url("Hola!", "sp", 2.5)
const stream = await nodetts.stream("Hello!", "en", 2.5)
```


## Contributing

Documentation is an OPEN Open Source Project. This means that:

This project is open for issues and suggestion.

Also, individuals making significant and valuable contributions are going to be given commit-access to the project to contribute as they see fit.