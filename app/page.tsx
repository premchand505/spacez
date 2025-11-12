'use client';

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";

import {
  signedInCoupons,
  signedInGiftcards,
  signedInPayments,
  signedOutCoupons,
  signedOutGiftcards,
} from "./lib/mockData";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CouponCard from "./components/CouponCard";
import GiftcardCard from "./components/GiftCard";
import PaymentOfferCard from "./components/PaymentOfferCard";

const SECTIONS = {
  coupons: "Coupons",
  giftcards: "Giftcards",
  "payment-offers": "Payment Offers",
};
type SectionId = keyof typeof SECTIONS;

export default function OffersPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("coupons");

  const couponsRef = useRef<HTMLElement | null>(null);
  const giftcardsRef = useRef<HTMLElement | null>(null);
  const paymentsRef = useRef<HTMLElement | null>(null);

  const sectionRefs = useMemo(() => ({
    coupons: couponsRef,
    giftcards: giftcardsRef,
    "payment-offers": paymentsRef,
  }), [couponsRef, giftcardsRef, paymentsRef]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-120px 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [sectionRefs.coupons, sectionRefs.giftcards, sectionRefs['payment-offers']];

    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  const handleScrollTo = (id: SectionId) => {
    const ref = sectionRefs[id];
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
      handleInteraction(SECTIONS[id], "Scroll To");
    }
  };

  const handleInteraction = (title: string, action: string) => {
    alert(`Success! Action: "${action}" on item: "${title}"`);
  };

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
    const action = isSignedIn ? "Signed Out" : "Signed In";
    alert(action);
  };

  return (
    <div className="min-h-screen bg-white/40 pb-20">
      <Header />

      <main className="px-4 pt-6">
        <h1 className="text-3xl font-bold text-gray-800">Offers</h1>
        
        {isSignedIn ? (
          <p className="mt-2 text-gray-600">
            Book directly with us to get exclusive benefits
          </p>
        ) : (
          <>
            <p className="mt-2 text-gray-600">
              Sign in to unlock exclusive additional rewards
            </p>
            <button
              onClick={handleSignIn}
              className="w-full px-4 py-3 mt-4 font-bold text-white bg-accent "
            >
              Sign in
            </button>
          </>
        )}
      </main>

      <nav className="sticky top-[60px] z-10 flex justify-between px-4 mt-6 bg-white border-b border-gray-200">
        {(Object.keys(SECTIONS) as SectionId[]).map((id) => (
          <button
            key={id}
            onClick={() => handleScrollTo(id)}
            className={`py-3 font-medium ${
              activeSection === id
                ? "text-accent border-b-2 border-accent"
                : "text-gray-500"
            }`}
          >
            {SECTIONS[id]}
          </button>
        ))}
      </nav>

      <div className="py-4">
        {/* --- Coupons Section --- */}
        <section
          id="coupons"
          ref={couponsRef}
          className="pt-4 scroll-mt-32"
        >
          <h2 className="px-4 text-xl font-bold text-gray-800">
            Sitewide coupons:
          </h2>
          {(isSignedIn ? signedInCoupons : signedOutCoupons).map((offer) => (
            <CouponCard
              key={offer.id}
              offer={offer}
              onAction={handleInteraction}
            />
          ))}
        </section>

        {/* --- Giftcards Section --- */}
        <section
          id="giftcards"
          ref={giftcardsRef}
          className=" md:p-4 scroll-mt-32"
        >
          <h2 className="px-4 text-xl font-bold text-gray-800">
            Bonus gift cards:
          </h2>
          {isSignedIn ? (
            <>
              <p className="px-4 text-sm text-gray-600 mb-2">
                Collect multiple of these
              </p>
              {signedInGiftcards.map((offer) => (
                <GiftcardCard
                  key={offer.id}
                  offer={offer}
                  onAction={handleInteraction}
                />
              ))}
            </>
          ) : (
            <>
              {/* --- FIX 1: Applied full card styling to this outer div --- */}
              <div className="relative mx-4 my-3 p-4 bg-[#fff7ed]/50 shadow-md rounded-lg overflow-hidden border border-gray-200">
                
                {/* Flex container for text and image */}
                <div className="flex justify-between items-center">
                  
                  {/* Text on the left */}
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Assured vouchers upto
                    </p>
                    <div className="flex items-center">
                      <p className="text-3xl font-bold text-accent">
                        ₹1000
                      </p>
                      <span className="ml-1 text-2xl">✨</span>
                    </div>
                    <p className="text-sm text-gray-600">of trending brands</p>
                  </div>
                  
                  {/* Single Image on the right*/}
                  <div className="relative w-32 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={signedOutGiftcards[0].img}
                      alt="Placeholder Giftcard"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleInteraction("Gift Cards", "Claim gift cards")
                  }
                  className="w-full px-4 py-3 mt-4 font-bold text-white bg-accent "
                >
                  Claim gift cards »
                </button>
              </div>
            </>
          )}
        </section>

        {/* Payment Offers Section */}
        <section
          id="payment-offers"
          ref={paymentsRef}
          className=" md:p-4 scroll-mt-32"
        >
          <h2 className="px-4 text-xl font-bold text-gray-800">
            Payment offers:
          </h2>
          {isSignedIn ? (
            <>
              {signedInPayments.map((offer) => (
                <PaymentOfferCard
                  key={offer.id}
                  offer={offer}
                  onAction={handleInteraction}
                />
              ))}
            </>
          ) : (
            <>
              {/* --- FIX 2: Applied full card styling to this outer div --- */}
              <div className="relative mx-4 my-3 p-4 bg-[#fff7ed]/50 shadow-md rounded-lg overflow-hidden border border-gray-200">
                
                {/* --- FIX 3: Removed redundant card styling from this inner div --- */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Save more on your bookings</p>
                    <p className="text-3xl font-bold text-accent">
                      upto 15% OFF
                    </p>
                    <p className="text-sm text-gray-600">
                      on select payment methods
                    </p>
                  </div>
                  <div className="relative w-32 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src='/placeholder-payment.png'
                      alt="Placeholder Giftcard"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleInteraction("Payment Offers", "Unlock offers")
                  }
                  className="w-full px-4 py-3 mt-6 font-bold text-white bg-accent "
                  >
                    Unlock offers »
                  </button>
              </div>
            </>
          )}
        </section>
      </div>

      <Footer isSignedIn={isSignedIn} onSignInClick={handleSignIn} />
    </div>
  );
}