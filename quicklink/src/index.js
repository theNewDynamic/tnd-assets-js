import quicklink from "quicklink";

quicklink({
  ignores: [
    // ignore .pdf files
    uri => uri.includes('.pdf'),
    // ignore all links, scripts which has explicit noprefetch
    (uri, elem) => elem.hasAttribute('noprefetch'),
  ],
});
