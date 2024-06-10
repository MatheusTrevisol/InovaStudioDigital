export function handleWhatsapp(e) {
  const button = e.target.id;
  let message = "";

  switch (button) {
    default:
      message = "Olá, boa tarde! Tenho interesse nos serviços!";
  }

  const whatsappUrl = `https://wa.me/54992717557?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
}