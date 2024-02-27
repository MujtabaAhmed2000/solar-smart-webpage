import ContactUsForm from "@/components/ContactUsForm/ContactUsForm";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-12 space-y-12 rounded-t-3xl bg-background py-10">
        <HowItWorks />
        <ContactUsForm />
      </div>
    </>
  );
}
