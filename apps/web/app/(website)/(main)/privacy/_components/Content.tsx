"use client";

import { useState, useEffect } from "react";

import { cn } from "@metallicjs/ui/lib/utils";

const tableOfContents = [
  { id: "info-collect", label: "Information we Collect" },
  { id: "use-info", label: "How We Use Your Information" },
  { id: "share-info", label: "How We Share Your Information" },
  { id: "data-security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

const Content = () => {
  const [activeId, setActiveId] = useState<string>("info-collect");

  useEffect(() => {
    const sections = tableOfContents
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry closest to the top
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0]!.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
      <aside className="hidden md:block sticky top-24 h-fit">
        <div className="flex flex-col gap-3 lg:gap-4">
          <h3 className="font-bold">Table of Content</h3>
          <nav>
            <ul className="flex flex-col gap-3 lg:gap-4">
              {tableOfContents.map((item, index) => {
                const isActive = activeId === item.id;

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        "",
                        isActive
                          ? "font-bold text-primary-500 text-lg"
                          : " hover:text-primary-500"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
      <article className="space-y-8 text-muted-foreground">
        <section>
          <p>Welcome to MetallicJS ("we", "our", or "us").</p>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website,
            mobile application, or any related services (collectively, the
            “Services”).
          </p>
        </section>

        <section className="scroll-mt-28" id="info-collect">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            1. Information we Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Personal Information: such as your name, email address, phone
              number, and other details you provide during registration or
              communication.
            </li>
            <li>
              Usage Data: information about how you use our Services, including
              your device information, browser type, IP address, and pages
              visited.
            </li>
            <li>
              Cookies and Tracking: we may use cookies or similar technologies
              to enhance your experience and analyze traffic.
            </li>
          </ul>
        </section>

        <section className="scroll-mt-28" id="use-info">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            2. How We Use Your Information
          </h2>
          <p>We use the collected data to:</p>
          <ul className="list-disc pl-5">
            <li>Provide, operate, and maintain our Services.</li>
            <li>Improve user experience and develop new features.</li>
            <li>
              Communicate with you regarding updates, support, or marketing.
            </li>
            <li>Ensure security and prevent fraudulent activity.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="scroll-mt-28" id="share-info">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            3. How We Share Your Information
          </h2>
          <p>We do not sell your personal data.</p>
          <p>However, we may share information with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Service Providers: who assist in operating our Services (e.g.,
              hosting, analytics, or payment processing).
            </li>
            <li>
              Legal Authorities: if required by law or to protect our rights.
            </li>
            <li>
              Business Transfers: if we merge, sell, or acquire another company,
              your data may be part of that transaction.
            </li>
          </ul>
        </section>

        <section className="scroll-mt-28" id="data-security">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            4. Data Security
          </h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your data against unauthorized access, loss, or misuse.
            However, please note that no method of transmission over the
            Internet is completely secure.
          </p>
        </section>

        <section className="scroll-mt-28" id="your-rights">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            5. Your Rights
          </h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5">
            <li>Access, correct, or delete your personal data.</li>
            <li>Withdraw consent to data processing.</li>
            <li>Request data portability.</li>
            <li>Lodge a complaint with a data protection authority.</li>
          </ul>
        </section>

        <section className="scroll-mt-28" id="cookies">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            6. Cookies
          </h2>
          <p>
            Our website uses cookies to remember your preferences and improve
            performance. You can control cookies through your browser settings,
            but disabling them may affect your experience.
          </p>
        </section>

        <section className="scroll-mt-28" id="third-party">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            7. Third-Party Links
          </h2>
          <p>
            Our Services may contain links to third-party websites or apps. We
            are not responsible for their privacy practices, so we encourage you
            to review their policies.
          </p>
        </section>

        <section className="scroll-mt-28" id="changes">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be posted on this page with the revised “Last updated”
            date.
          </p>
        </section>

        <section className="scroll-mt-28" id="contact">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-accent-foreground">
            9. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex gap-1 items-center">
              <p className="font-bold text-accent-foreground">Email:</p>
              <a href="mailto:support@metallicjs.com" className="underline">
                support@metallicjs.com
              </a>
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-bold text-accent-foreground">Company:</p>
              <p>MetallicJS</p>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Content;
