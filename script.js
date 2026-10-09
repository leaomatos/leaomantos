document.addEventListener('DOMContentLoaded', () => {
  const whatsappUrl = element => {
    if (element.tagName === 'A' && element.href && element.href.includes('wa.me/')) return element.href;
    const message = element.dataset.whatsappMessage || 'Olá, Gostaria de solicitar atendimento Leão Matos';
    return `https://wa.me/5514936305084?text=${encodeURIComponent(message)}`;
  };

  document.querySelectorAll('[data-whatsapp="true"]').forEach(link => {
    const openWhatsApp = event => {
      event.preventDefault();
      const destination = whatsappUrl(link);
      const eventParams = { event_category: 'contact', event_label: 'whatsapp_button', transport_type: 'beacon' };
      if (typeof window.gtag === 'function') window.gtag('event', 'whatsapp_click', eventParams);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_click', conversion_type: 'whatsapp', link_url: destination });
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion(destination);
      } else {
        window.location = destination;
      }
    };
    link.addEventListener('click', openWhatsApp);
    link.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') openWhatsApp(event);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
