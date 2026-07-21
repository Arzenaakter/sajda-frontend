import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Nav {
  label: string;
  link: string;
}

export interface Offer {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}
export interface Blog {
  title: string;
  image: StaticImageData;
}

export interface Feature {
  icon: IconType;
  bg: string;
  title: string;
  description: string;
}

export interface Journey {
  id: number;
  image: StaticImageData;
  badge: string;
  title: string;
  description: string;
  href: string;
}
export interface Testimonial {
  imgLink: StaticImageData;
  review: string;
  name: string;
}
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
