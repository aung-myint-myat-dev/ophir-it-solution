import { ArrowUpRight, ClipboardList, Mail, MapPin, Phone } from "lucide-react";
import { useSettings } from "../../context/settings";

const email = "ogsgoldenstar@gmail.com";
const phone = "09 456 335 110";
const address =
  "Room No. A-301, Building No. 136/140 Taw Win Myanmar Condo, 36th Street, Anawrahta Road, Kyauktada Township, Yangon, Myanmar";
const mapQuery = encodeURIComponent(address);
const quoteFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScOdgdWC-QP8n_NwHSu_Ir35swQ8NbtNk54LD7iffNdcOdSFA/viewform";

export default function Contact() {
  const { t } = useSettings();

  return (
    <div className="mx-auto min-h-[65vh] w-[min(1180px,calc(100%-48px))] py-16 md:py-24">
      <span className="eyebrow">{t("Contact Us")}</span>
      <div className="mt-5 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
        <h1 className="font-display max-w-[720px] text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
          {t("Let’s talk about what you’re building.")}
        </h1>
        <p className="max-w-[460px] text-sm leading-7 text-[#68756d] dark:text-[#a6b4aa] md:justify-self-end">
          {t("Have a project in mind or need a quotation? Get in touch with our team.")}
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-[22px] border border-[#e9eee9] bg-white p-7 dark:border-[#2a3930] dark:bg-[#1b2620] sm:p-9">
          <h2 className="font-display text-xl font-bold">{t("Contact details")}</h2>
          <div className="mt-7 space-y-6">
            <a href={`tel:${phone.replaceAll(" ", "")}`} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f1eb] text-brand dark:bg-[#1e3a2f]">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-[#68756d] dark:text-[#a6b4aa]">{t("Phone")}</span>
                <span className="mt-1 block text-sm font-semibold">{phone}</span>
              </span>
            </a>
            <a href={`mailto:${email}`} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f1eb] text-brand dark:bg-[#1e3a2f]">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-[#68756d] dark:text-[#a6b4aa]">{t("Email")}</span>
                <span className="mt-1 block break-all text-sm font-semibold">{email}</span>
              </span>
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f1eb] text-brand dark:bg-[#1e3a2f]">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-[#68756d] dark:text-[#a6b4aa]">{t("Address")}</span>
                <span className="mt-1 block text-sm font-semibold leading-6">{address}</span>
              </span>
            </a>
          </div>
          <a
            href={quoteFormUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12583d]"
          >
            <ClipboardList size={17} />
            {t("Request a quotation")}
            <ArrowUpRight size={15} />
          </a>
        </section>

        <section className="overflow-hidden rounded-[22px] border border-[#e9eee9] dark:border-[#2a3930]">
          <iframe
            title={t("Company location map")}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-[360px] w-full border-0 sm:h-full sm:min-h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      </div>
    </div>
  );
}
