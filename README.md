videojs-youtube-progress
=======

This is really simple plugin that allows you to preserve progress ui while control bar is hidden.

Usage
======
Plugin is so simple that it's only [one css file](dist/videojs-youtube-progress.css) that overrides default videojs styling. To use it just include after videojs css:

```html
<link href="//vjs.zencdn.net/4.10/video-js.css" rel="stylesheet">
<link href="videojs-youtube-progress.css" rel="stylesheet">
```

__WARNING__ It's important to include it AFTER original stylesheet, otherwise styling rules won't be overridden.

That's it! Be happy!