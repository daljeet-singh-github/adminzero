window.ADMINZERO_TRACKING = {
  gaMeasurementId: '',
  clarityProjectId: '',
  searchConsoleVerification: ''
};

(function() {
  var config = window.ADMINZERO_TRACKING || {};

  if (config.gaMeasurementId) {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(config.gaMeasurementId);
    document.head.appendChild(gaScript);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', config.gaMeasurementId);
  }

  if (config.clarityProjectId) {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, 'clarity', 'script', config.clarityProjectId);
  }

  if (config.searchConsoleVerification) {
    var meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = config.searchConsoleVerification;
    document.head.appendChild(meta);
  }

  window.adminZeroTrackEvent = function(name, params) {
    if (window.gtag) window.gtag('event', name, params || {});
    if (window.clarity) window.clarity('event', name);
  };

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href$="#audit"]').forEach(function(link) {
      link.addEventListener('click', function() {
        window.adminZeroTrackEvent('audit_cta_click', {
          link_text: link.textContent.trim(),
          page_path: window.location.pathname
        });
      });
    });
  });
})();
