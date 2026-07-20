import { FooterSection, Journey, Testimonial } from "@/types";
import tourPackage from "@/assets/journey/tourPackge.jpg";
import hajjPackage from "@/assets/journey/hajjPackage.jpg";
import umraPackage from "@/assets/journey/umraPackage.jpg";

export const journeys: Journey[] = [
  {
    id: 1,
    image: tourPackage,
    badge: "Explore Bangladesh's Beyond",
    title: "Tour Packages",
    description:
      "Curated travel across Bangladesh's most breathtaking destinations — mangroves, hills, seas, and more.",
    href: "/tour-packages",
  },
  {
    id: 2,
    image: hajjPackage,
    badge: "The Sacred Fifth Pillar",
    title: "Hajj Packages",
    description:
      "Complete Hajj arrangements with premium accommodation, guided rituals, and dedicated support.",
    href: "/hajj-packages",
  },
  {
    id: 3,
    image: umraPackage,
    badge: "A Blessed Spiritual Journey",
    title: "Umrah Packages",
    description:
      "Year-round Umrah packages for individuals, couples, and families with multilingual support.",
    href: "/umrah-packages",
  },
];

export const testimonials: Testimonial[] = [
  {
    imgLink: "/images/testimonials/user-1.jpg",
    review:
      "Working with this team was an amazing experience. They delivered a beautiful, responsive website on time and exceeded our expectations.",
    name: "Sarah Johnson",
  },
  {
    imgLink: "/images/testimonials/user-2.jpg",
    review:
      "Their attention to detail and commitment to quality made the entire process smooth and enjoyable. Highly recommended!",
    name: "Michael Brown",
  },
  {
    imgLink: "/images/testimonials/user-3.jpg",
    review:
      "Professional, creative, and reliable. The final product perfectly matched our vision and significantly improved our online presence.",
    name: "Emily Davis",
  },
  {
    imgLink: "/images/testimonials/user-4.jpg",
    review:
      "Excellent communication and outstanding technical skills. I couldn't be happier with the results.",
    name: "David Wilson",
  },
  {
    imgLink: "/images/testimonials/user-5.jpg",
    review:
      "From start to finish, everything was handled professionally. The design is modern, fast, and user-friendly.",
    name: "Jessica Miller",
  },
];

export const footerLinks: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "Tour Package", href: "#TourPackage" },
      { label: "Hajj Package", href: "#HajjPackage" },
      { label: "Umrah Package", href: "#UmrahPackage" },
      { label: "Blog", href: "#Blog" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Hajj", href: "#Hajj" },
      { label: "Umra", href: "#Umra" },
      { label: "Tour", href: "#Tour" },
    ],
  },
];
