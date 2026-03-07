export const siteData = {
  analytics_id: "6215d234-268d-4d2e-8231-6fd7cd70201e",
  meta: {
    name: "Finca los Castaños",
    twitterHandle: "",
  },
  contact: {
    email: "info@fincaloscastanos.com",
    phone: "+34 648 22 99 95",
    phoneEvents: "+34 682 64 45 41",
    whatsapp: "+34 648 22 99 95",
    address: "Camino de Los Romeros S/N, 35489 Agaete, Las Palmas, Spanien",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112644.66720951696!2d-15.755535862939382!3d28.081093675970394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc408c643245135d%3A0x6302008b723e3040!2sFinca%20los%20Casta%C3%B1os!5e0!3m2!1sen!2ses!4v1772394339098!5m2!1sen!2ses",
    googleMaps: "https://maps.app.goo.gl/ydfGLsmB8QgGFvtD8",
  },
  accommodation: {
    casa: {
      name: "Casa los Castaños",
      pricePerNight: 180,
      smoobuId: 13443271,
      calendarWidgetId: 3161916,
      calendarVerification:
        "3d76ab815f9a5e5d0c02737710fd8082fe50f13b002ac3129ae9027d7ff8d3c2",
    },
    cabana: {
      name: "Cabaña en Finca",
      pricePerNight: 160,
      smoobuId: 13442685,
      calendarWidgetId: 3174012,
      calendarVerification:
        "21374fd358d1c062e15e3ac651e0ce0b2855dbab4c4b8bb746ba6330fa14499c",
    },
    bookingChannelId: 1634876,
  },
  coffeeTour: {
    adults: 18,
    adultsOnline: 16,
    children: 7.5,
    infantsMaxAge: 4,
    durationMinutes: 45,
    bokun: {
      channelId: "f68d8593-6b6b-4912-b00b-295a4477552b",
      experienceId: "1150509",
    },
  },
  hours: {
    weekdays: { start: "09:00", end: "15:00" },
    weekends: { start: "10:00", end: "14:00" },
  },
  social: {
    instagram: "https://www.instagram.com/fincaloscastanos2025",
    facebook: "https://www.facebook.com/FincaLosCastanosValleDeAgaete",
  },
} as const;
