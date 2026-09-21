export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",

    name: "تعمیرات لوازم گازسوز و برقی",

    description:
      "تعمیر تخصصی فر، اجاق گاز، لباسشویی، ظرفشویی، مایکروویو، هود، آبگرمکن و پکیج.",

    url: "https://karenservice.ir",

    telephone: "09124676047",

    image: "https://YOUR-DOMAIN.ir/og-image.jpg",

    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      addressLocality: "کرج",
      addressCountry: "IR",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],

    areaServed: {
      "@type": "City",
      name: "تهران",
    },

    serviceType: [
      "تعمیر فر",
      "تعمیر اجاق گاز",
      "تعمیر لباسشویی",
      "تعمیر ظرفشویی",
      "تعمیر مایکروویو",
      "تعمیر هود",
      "تعمیر آبگرمکن",
      "تعمیر پکیج",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}