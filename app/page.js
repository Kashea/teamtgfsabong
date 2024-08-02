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
            Online Sabong Affiliate Program TEAM TGF
          </h1>
          <p className="mt-2">Join now and start earning commissions!</p>
          <Csr />
        </header>

        <main className="container mx-auto p-5">
          <section className="my-10 text-center">
            <h2 className="text-2xl font-semibold">
              Why Join Our Affiliate Program?
            </h2>
            <p className="mt-4 text-lg">
              Become a partner in the exciting world of online sabong. Enjoy
              high commissions, timely payouts, and comprehensive marketing
              support.
            </p>
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
                description="Use your unique affiliate link to promote our platform."
              />
              <FeatureCard
                title="3. Earn"
                description="Receive commissions for every referral that converts."
              />
            </div>
          </section>

          <section className="my-10 text-center">
            <h2 className="text-2xl font-semibold">Ready to Start Earning?</h2>
            <p className="mt-4 text-lg">
              Don't miss out on the opportunity to be part of something big.
            </p>
            <Csr />
          </section>
        </main>

        <footer className="bg-gray-800 p-5 text-center">
          <p>
            &copy; 2024 Online Sabong Affiliate Program. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
