### Repro for jspm bundle problem - Certain module names do not bundle

Trying to reproduce an error I saw whilst working on some library upgrades for [guardian.com](https://github.com/guardian/frontend). Steps to repro:

- `npm install`
- `jspm install`
- `jspm bundle main.js`

You should see:

`Error on fetch for github:guardian/videojs-ima@0.2.1/src/video at .../jspm_packages/github/guardian/videojs-ima@0.2.1/src/video.js
	Error: ENOENT, open '... /jspm_packages/github/guardian/videojs-ima@0.2.1/src/video.js'
    at Error (native)`

I got this error updating one of our video libraries. The upgrade meant that the library has now become a umd-format module. The umd format refers to another module with a relative path, which results in the error above. See the AMD define [here](https://github.com/guardian/videojs-ima/blob/0.2.1/src/videojs.ima.js#L30), and github issue [here](https://github.com/jspm/jspm-cli/issues/1190)



