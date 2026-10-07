document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-conversion="whatsapp_click"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const eventParams = { event_category: 'contact', event_label: 'whatsapp_button', transport_type: 'beacon' };
      if (typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', eventParams);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_click', conversion_type: 'whatsapp', link_url: link.href });
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion(link.href);
      } else {
        window.location = link.href;
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
