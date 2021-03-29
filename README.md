# puppeteer-sample

This is a sample code collection of [puppeteer](https://developers.google.com/web/tools/puppeteer) library.

## Sample List

- browser
  - [.on("targetcreated")](./samples/browser/browserOnTargetCreated.js)
- page
  - [.$() and .getProperty()](./samples/page/getBodyElement.js)
  - [.content()](./samples/page/doContentMethod.js)
- Common use cases
  - [control a new tab](./samples/controlNewTab.js)

## Usage

### 1. Install packages with the following code.

```
yarn
```

### 2. Edit config file.

The config file is `default.js` in `config` directory.

You can specify the URL of the web page to be manipulated by the sample codes with `targetUrl`.

### 3. Run a sample code.

#### Example
```
node ./samples/page/doContentMethod.js
```

