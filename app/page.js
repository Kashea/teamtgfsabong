import Head from "next/head";
import FeatureCard from "@/components/FeaturedCard";
import Csr from "@/components/csrLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Online Sabong Affiliate Program</title>
        <meta
          name="description"
          content="Join the leading Online Sabong Affiliate Program and earn commissions easily!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-gray-900 text-white">
        <header className="flex flex-col bg-gray-800 p-5 text-center">
          <h1 className="text-3xl font-bold">
            Online Sabong AGENT Program TEAM TGF
          </h1>
          <p className="mt-2">Join now and start earning commissions!</p>
          <Csr />
        </header>

        <main className="w-full mx-auto">
          <section className="relative h-[371px] flex flex-col items-center justify-center px-5">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/banners/sabongvid01.mp4"
              autoPlay
              loop
              muted
            />
            <div className="relative z-10 text-center text-white">
              <h2 className="text-2xl font-semibold">
                Why Join Our AGENT Program?
              </h2>
              <p className="mt-4 text-lg">
                Become a partner in the exciting world of online sabong. Enjoy
                high commissions, timely payouts, and comprehensive marketing
                support.
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </section>

          <article className="bg-[url('/banners/background03.webp')] bg-cover bg-center h-full">
            <section className="pt-6 text-center">
              <div className="flex flex-wrap justify-center mt-8">
                <FeatureCard
                  title="High Commissions"
                  description="Earn top-tier commissions on every referral that converts."
                />
                <FeatureCard
                  title="Real-Time Tracking"
                  description="Monitor your referrals and earnings with our state-of-the-art dashboard."
                />
                <FeatureCard
                  title="Marketing Support"
                  description="Get access to high-quality marketing materials to boost your success."
                />
              </div>
            </section>

            <section className="my-10 text-center">
              <h2 className="text-2xl font-semibold">How It Works</h2>
              <p className="mt-4 text-lg">
                Joining is easy! Follow these simple steps:
              </p>
              <div className="flex flex-wrap justify-center mt-8">
                <FeatureCard
                  title="1. Sign Up"
                  description="Fill out the registration form to become an affiliate."
                />
                <FeatureCard
                  title="2. Promote"
                  description="Use your unique agent link to promote our platform."
                />
                <FeatureCard
                  title="3. Earn"
                  description="Receive commissions for every referral that converts."
                />
              </div>
            </section>

            <section className="pb-6 text-center">
              <h2 className="text-2xl font-semibold">
                Ready to Start Earning?
              </h2>
              <p className="mt-4 text-lg">
                Don't miss out on the opportunity to be part of something big.
              </p>
              <Csr />
            </section>
          </article>
        </main>

        <footer className="bg-gray-800 text-center">
          <p>
            &copy; 2024 Online Sabong Affiliate Program. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
