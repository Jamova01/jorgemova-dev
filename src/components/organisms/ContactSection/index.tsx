import { Heading } from "@/components/atoms";

export const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col gap-14 px-8">
      <Heading level={2} className="capitalize text-center">
        contact me
      </Heading>

      <div className="flex justify-center">
        <form action="" className="flex flex-col gap-6 w-full md:w-2/5">
          <fieldset className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="px-3 py-2 bg-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                className="px-3 py-2 bg-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                className="px-3 py-2 bg-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={5}
                required
              ></textarea>
            </div>
          </fieldset>

          <button
            type="submit"
            className="px-4 py-2 w-full md:w-44 rounded-full text-lg font-bold bg-primary text-foreground hover:opacity-80 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
