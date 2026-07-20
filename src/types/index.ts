import { StaticImageData } from "next/image";

export interface Journey {
  id: number;
  image: StaticImageData;
  badge: string;
  title: string;
  description: string;
  href: string;
}
export interface Testimonial {
  imgLink: string;
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
