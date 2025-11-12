import { LucideIcon } from "lucide-react";


export type CouponOffer = {
  id: string;
  type: "coupon-amount" | "coupon-percent";
  title: string;
  description: string;
  actionText: "Copy"; 
  offerValue: string;
};


export type GiftcardOffer = {
  id: string;
  type: "giftcard";
  title: string;
  description: string;
  actionText: "Collect"; 
  offerValue: string;
  logoUrl: string; 
};


export type PaymentOffer = {
  id: string;
  type: "payment";
  title: string;
  description: string;
  actionText: "Read more"; 
  offerValue: string;
  logoUrl: string;
};


export type NavItem = {
  label: string;
  icon: LucideIcon;
  href: string;
};