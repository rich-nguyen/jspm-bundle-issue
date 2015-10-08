### Repro for jspm bundle problem - Certain module names do not bundle

Trying to reproduce an error I saw whilst working on some library upgrades for [guardian.com](https://github.com/guardian/frontend). Steps to repro:

- `npm install`
- `jspm install`
- `jspm bundle main.js`

You should see:

`Error on fetch for github:guardian/videojs-ima@0.2.1/src/video at .../jspm_packages/github/guardian/videojs-ima@0.2.1/src/video.js
	Error: ENOENT, open '... /jspm_packages/github/guardian/videojs-ima@0.2.1/src/video.js'
    at Error (native)`

I got this error updating one of our video libraries. The upgrade meant that the library has now become a umd-format module. This seems to affect the contents of the file known as the 'parentName' parameter in the es6 module loader polyfill. This parent file, eg. `...\jspm_packages/github/guardian/videojs-ima@0.2.1.js`, now contains a define which looks like the following:

`define(["github:guardian/videojs-ima@0.2.1/src/videojs.ima"], function(main) { ...`

During bundle, this path seems to cause the error. Is there an issue with module names like `videojs.ima`? I tried `video-js.ima` and the ENOENT error looked more sensible; it expected a file called `video-js.ima.js`.



