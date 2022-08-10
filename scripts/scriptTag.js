// scriptTag.js
function scriptTag() {
  // Google tag (gtag.js)
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-R3QB45DWLZ"
  ></script>;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-R3QB45DWLZ");
}
scriptTag();
