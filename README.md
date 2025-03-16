# Radio Receiver

一种使用廉价的 USB 数字电视调谐器从浏览器收听无线电传输的应用程序。

在线体验 [radio.ea1iti.es](https://radio.ea1iti.es).

## What is this

无线电接收器是一个 HTML5 网页，它使用 USB 数字电视接收器捕获无线电信号，在浏览器中解调它们，并通过计算机的扬声器或耳机播放解调后的音频。这被称为 SDR（软件定义无线电），因为所有无线电信号处理都是由计算机中运行的软件而不是专用硬件完成的。

## Compatible hardware and software

无线电接收器是为与基于 RTL-2832U 的 DVB-T（欧洲数字电视）USB 接收器配合使用而编写的，该接收器配有 R820T 调谐器芯片。此硬件配置有点过时，但计划支持较新的调谐器芯片。

## Building

### During development

For a development build served from your computer with live reload:

```shell
$ npm run watch
```

This script should open Radio Receiver on your browser automatically. If it doesn't, check the output and open the URL that it gives you.

Whenever you make changes, they will be compiled and the page will be reloaded automatically.

If you want to build Radio Receiver manually for development, use this command:

```shell
$ npm run build
```

The compiled application is available in the `dist/apps/radioreceiver` directory.

### For release

For a release build:

```shell
$ npm run dist
```

The compiled application is available in the `dist/apps/radioreceiver` directory; you can copy its contents to your webserver.

Note: your website must be served over HTTPS, not HTTP. This is required for WebUSB.

## Acknowledgements

This started as a fork of https://github.com/google/radioreceiver that has been updated to use the HTML5 USB API and modern features, and converted to TypeScript.

Kudos and thanks to the [RTL-SDR project](http://sdr.osmocom.org/trac/wiki/rtl-sdr) for figuring out the magic numbers needed to drive the USB tuner.

If you want to experiment further with Software-Defined Radio and listen to more things using your cheap tuner, you can try [the various programs listed on rtl-sdr.com](http://www.rtl-sdr.com/big-list-rtl-sdr-supported-software/).
