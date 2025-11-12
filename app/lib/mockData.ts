// --- FIX: Import new specific types ---
import { CouponOffer, GiftcardOffer, PaymentOffer } from "./types";
// --- DELETE THIS LINE: import { Offer } from "./types"; ---

// --- Signed-In Data ---

// --- FIX: Use CouponOffer[] type ---
export const signedInCoupons: CouponOffer[] = [
  {
    id: "sic-1",
    type: "coupon-amount",
    title: "LONGSTAY",
    description:
      "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    actionText: "Copy",
    offerValue: "₹1,500",
  },
  {
    id: "sic-2",
    type: "coupon-amount",
    title: "EARLYBIRD",
    description:
      "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    actionText: "Copy",
    offerValue: "₹3,000",
  },
  {
    id: "sic-3",
    type: "coupon-percent",
    title: "RUSHDEAL",
    description:
      "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    actionText: "Copy",
    offerValue: "Flat 10%",
  },
];

// --- FIX: Use GiftcardOffer[] type ---
export const signedInGiftcards: GiftcardOffer[] = [
  {
    id: "sig-1",
    type: "giftcard",
    title: "MYNTRA",
    description: "Get this gift voucher on booking above ₹2000",
    actionText: "Collect",
    offerValue: "₹1,500",
    logoUrl: "/myntralogo.webp",
  },
  {
    id: "sig-2",
    type: "giftcard",
    title: "HAMMER",
    description: "Get this gift voucher on booking above ₹1500",
    actionText: "Collect",
    offerValue: "₹1000",
    logoUrl: "/hammerlogo.png",
  },
];

// --- FIX: Use PaymentOffer[] type ---
export const signedInPayments: PaymentOffer[] = [
  {
    id: "sip-1",
    type: "payment",
    title: "HDFC BANK",
    description: "Get 10% off on booking above ₹1500",
    actionText: "Read more",
    offerValue: "10% OFF",
    logoUrl: "/hdfclogo.png",
  },
];

// --- Signed-Out Data ---

// --- FIX: Use CouponOffer[] type ---
export const signedOutCoupons: CouponOffer[] = [...signedInCoupons];

export const signedOutGiftcards: {
  id: string;
  value: string;
  label: string;
  img: string;
}[] = [
  {
    id: "sog-1",
    value: "₹400",
    label: "Gift card",
    img: "/giftcardsignedout.png",
  },
  
];