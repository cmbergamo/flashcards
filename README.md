## Table of Contents

* [How to Install](#how-to-install)
* [Starting project](#starting-project)
* [Considerations](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## How to Install

To execute this project is recommended the use of Yarn. After yarn is installed, use yarn to get dependecies.

```
yarn install
```

## Starting project

Runs your app in development mode.

```
yarn start
```

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
```

## Considerations

1. This app was tested in android simulator.
2. Theorically runs in iOS, but was not tested. If you find some erros you can submit.