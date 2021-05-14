const logAction = (action, choice) => {
  if (typeof window !== 'undefined' && window._paq) {
    console.log(action)
    console.log(choice)
    window._paq.push([
      'trackEvent',
      action,
      choice,
      `page : ${window.location.pathname}`,
    ]);
  }
};

const initMatomo = () => {
  console.log("Init Matomo")
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://ingestion.webanalytics.italia.it/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', 'wBEpDzz0yL']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
}

export {
  initMatomo,
  logAction
};
