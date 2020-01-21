define({
  "*.{ts,js,json,css,md}": ["apidoc -i app/ -o docs/apidoc", "git add"],
  name: "Twitter API",
  version: "0.0.1",
  description: "Mock twitter API",
  title: "Twitter API",
  url: "https://github.com/gvwarrior/Twitter-API",
  sampleUrl: false,
  defaultVersion: "0.0.0",
  apidoc: "0.3.0",
  generator: {
    name: "apidoc",
    time: "2020-01-21T00:42:59.385Z",
    url: "http://apidocjs.com",
    version: "0.19.1",
  },
})
