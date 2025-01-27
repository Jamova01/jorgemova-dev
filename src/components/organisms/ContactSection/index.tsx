import { Heading } from "@/components/atoms";
import { ContactForm } from "../ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col gap-14 px-8">
      <Heading level={2} className="capitalize text-center">
        Contact Me
      </Heading>

      <ContactForm />
    </section>
  );
};
