"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function HeroTruckFallback() {
  return (
    <div className="relative mx-auto flex w-full justify-center overflow-hidden py-2">
      <div className="origin-center scale-[0.58] sm:scale-[0.78] lg:scale-100">
        <div className="relative w-[580px] animate-float">
          <div className="absolute inset-x-12 bottom-10 h-16 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute left-10 right-20 top-20 h-32 rounded-full bg-lightBlue/20 blur-3xl" />

          <motion.div
            animate={{ x: [0, 18, 0] }}
            transition={{ duration: 5.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            className="relative"
          >
            <motion.div
              animate={{ opacity: [0.25, 0.8, 0.25], scaleX: [0.92, 1.08, 0.92] }}
              transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -left-10 top-[42%] h-2 w-32 origin-right rounded-full bg-gradient-to-r from-transparent via-white/70 to-white/10 blur-[1px]"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.65, 0.2], x: [0, -10, 0] }}
              transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.15 }}
              className="absolute -left-4 top-[54%] h-1.5 w-20 rounded-full bg-gradient-to-r from-transparent via-accent/80 to-transparent"
            />

            <div className="relative rounded-[34px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-[34px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />

              <div className="relative mx-auto mt-14 h-[210px] w-full max-w-[500px]">
                <div className="absolute bottom-8 left-4 right-4 h-1 rounded-full bg-white/20" />
                <div className="absolute left-12 top-16 h-24 w-[260px] rounded-[20px] border border-white/10 bg-gradient-to-b from-[#eff5fb] to-[#c7dced] shadow-[0_18px_40px_rgba(14,36,59,0.16)]" />
                <div className="absolute left-[292px] top-[28px] h-[112px] w-[132px] rounded-[26px] border border-white/10 bg-gradient-to-b from-[#f9fcff] to-[#d9e9f4] shadow-[0_18px_40px_rgba(14,36,59,0.16)]" />
                <div
                  className="absolute left-[360px] top-[40px] h-[86px] w-[78px] bg-gradient-to-b from-accent to-[#d8790f]"
                  style={{ clipPath: "polygon(0 0, 68% 0, 100% 36%, 100% 100%, 0 100%)" }}
                />
                <div className="absolute left-[320px] top-[52px] h-[36px] w-[42px] rounded-xl bg-navy/90" />
                <div className="absolute left-[12px] top-[62px] h-10 w-16 rounded-l-[16px] bg-gradient-to-r from-transparent to-lightBlue/30 blur-xl" />
                <div className="absolute left-[176px] top-[54px] h-3 w-16 rounded-full bg-accent/90" />
                <div className="absolute left-[46px] top-[132px] h-6 w-[388px] rounded-[14px] bg-navy" />
                <div className="absolute left-[22px] top-[62px] h-[30px] w-[56px] rounded-full bg-white/20 blur-lg" />

                <div className="wheel absolute bottom-0 left-[90px] flex h-[68px] w-[68px] items-center justify-center rounded-full border-[8px] border-navy bg-white shadow-[0_12px_30px_rgba(14,36,59,0.2)]">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <div className="wheel absolute bottom-0 left-[284px] flex h-[68px] w-[68px] items-center justify-center rounded-full border-[8px] border-navy bg-white shadow-[0_12px_30px_rgba(14,36,59,0.2)]">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <div className="wheel absolute bottom-0 left-[386px] flex h-[68px] w-[68px] items-center justify-center rounded-full border-[8px] border-navy bg-white shadow-[0_12px_30px_rgba(14,36,59,0.2)]">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function HeroTruck() {
  const [imageMissing, setImageMissing] = useState(false);

  if (imageMissing) {
    return <HeroTruckFallback />;
  }

  return (
    <div className="relative mx-auto flex w-full justify-center overflow-hidden py-4">
      <div className="absolute inset-x-8 bottom-8 h-16 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute right-10 top-10 h-36 w-36 rounded-full bg-lightBlue/20 blur-3xl" />

      <motion.div
        animate={{ opacity: [0.18, 0.7, 0.18], scaleX: [0.92, 1.06, 0.92] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.6, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 z-0 h-2 w-40 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-white/70 to-white/10 blur-[1px]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.85, 0.2], x: [0, -14, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.8, ease: "easeInOut", delay: 0.1 }}
        className="absolute left-6 top-[58%] z-0 h-1.5 w-24 rounded-full bg-gradient-to-r from-transparent via-accent/80 to-transparent"
      />

      <div className="relative z-10 rounded-[34px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm sm:p-6">
        <motion.img
          src="/truck.png"
          alt="moving truck"
          animate={{ x: [0, 20, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut"
          }}
          onError={() => setImageMissing(true)}
          className="relative z-10 w-full max-w-xl drop-shadow-[0_30px_60px_rgba(14,36,59,0.28)]"
        />

        <motion.div
          animate={{ scaleX: [0.96, 1.04, 0.96], opacity: [0.2, 0.45, 0.2] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.6, ease: "easeInOut" }}
          className="mx-auto mt-4 h-2 w-[82%] rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent blur-sm"
        />
      </div>
    </div>
  );
}
