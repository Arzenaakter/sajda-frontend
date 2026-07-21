import {
  Feature,
  FooterSection,
  Journey,
  Testimonial,
  Blog,
  Offer,
  Nav,
} from "@/types";
import tourPackage from "@/assets/journey/tourPackge.jpg";
import hajjPackage from "@/assets/journey/hajjPackage.jpg";
import umraPackage from "@/assets/journey/umraPackage.jpg";
import client1 from "@/assets/testimonial/client1.jpg";

import { BiSelection } from "react-icons/bi";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { PiTaxi } from "react-icons/pi";

import makkha from "@/assets/blog/makkah.jpg";
import spain from "@/assets/blog/spain.jpg";
import agra from "@/assets/blog/agra.jpg";

import guidedtour from "@/assets/offer/guided-tour.svg";
import flightOption from "@/assets/offer/flightOption.svg";
import hajjUmra from "@/assets/offer/hajjUmra.svg";
import medicaInsurence from "@/assets/offer/medicaInsurence.svg";

export const navLinks: Nav[] = [
  { label: "Home", link: "/" },
  { label: "Tour Packages", link: "#" },
  { label: "Hajj Packages", link: "#" },
  { label: "Umrah Packages", link: "#" },
  { label: "About Us", link: "#" },
];

export const offers: Offer[] = [
  {
    id: 1,
    image: guidedtour,
    title: "Guided Tours",
    description:
      "Explore beautiful destinations with trusted guides & a smooth travel experience.",
  },
  {
    id: 2,
    image: flightOption,
    title: "Best Flights Options",
    description:
      "Get the best flight options for a comfortable travel experience.",
  },
  {
    id: 3,
    image: hajjUmra,
    title: "Hajj & Umrah",
    description: "Perform Hajj and Umrah with comfort, care & confidence.",
  },
  {
    id: 4,
    image: medicaInsurence,
    title: "Medical insurance",
    description:
      "Enjoy worry-free travel with proper health and medical protection.",
  },
];

export const blogs: Blog[] = [
  {
    title: "Makkah",
    image: makkha,
  },
  {
    title: "Spain",
    image: spain,
  },
  {
    title: "Agra",
    image: agra,
  },
];

export const features: Feature[] = [
  {
    icon: BiSelection,
    bg: "#F0BB1F",
    title: "Choose Destination",
    description: "Choose your destination and begin a smooth journey.",
  },
  {
    icon: FaHouseFloodWaterCircleArrowRight,
    bg: "#F15A2B",
    title: "Check Availability",
    description: "Check package availability before confirming your journey.",
  },
  {
    icon: PiTaxi,
    bg: "#006380",
    title: "Let's Go",
    description: "Let's start your travel with confidence.",
  },
];

export const journeys: Journey[] = [
  {
    id: 1,
    image: tourPackage,
    badge: "Explore Bangladesh's Beyond",
    title: "Tour Packages",
    description:
      "Curated travel across Bangladesh's most breathtaking destinations — mangroves, hills, sea, and more.",
    href: "#",
  },
  {
    id: 2,
    image: hajjPackage,
    badge: "The Sacred Fifth Pillar",
    title: "Hajj Packages",
    description:
      "Complete Hajj arrangements with premium accommodation, guided rituals, and dedicated support.",
    href: "#",
  },
  {
    id: 3,
    image: umraPackage,
    badge: "A Blessed Spiritual Journey",
    title: "Umrah Packages",
    description:
      "Year-round Umrah packages for individuals, couples, and families with full logistical support.",
    href: "#",
  },
];

export const testimonials: Testimonial[] = [
  {
    imgLink: client1,
    review:
      "A wonderful Hajj experience with Sajda. Everything was well managed, and the team’s support made our journey comfortable, meaningful, and worry-free.",
    name: "Muhammad Alim Khandakar",
  },
  {
    imgLink: client1,
    review:
      "Their attention to detail and commitment to quality made the entire process smooth and enjoyable. Highly recommended!",
    name: "Michael Brown",
  },
  {
    imgLink: client1,
    review:
      "Professional, creative, and reliable. The final product perfectly matched our vision and significantly improved our online presence.",
    name: "Emily Davis",
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
