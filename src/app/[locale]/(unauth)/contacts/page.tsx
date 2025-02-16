import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { CTA } from "@/template/CTA";

import { Footer } from "@/template/Footer";
import { ServiceHero } from "@/template/HEROservice";
import { Navbar } from "@/template/Navbar";
import { Servicestemplate } from "@/template/Servicetemplate";
import { WhatWeProvide } from "@/template/whatweprovide";
import { ContactForm } from "@/template/contactspage";

export async function generateMetadata(props: { params: { locale: string } }) {
	const t = await getTranslations({
		locale: props.params.locale,
		namespace: "Index",
	});

	return {
		title: t("meta_title"),
		description: t("meta_description"),
	};
}

const ServicesPage = (props: { params: { locale: string } }) => {
	unstable_setRequestLocale(props.params.locale);

	return (
		<>
			<Navbar />
			<ContactForm />
			<CTA />
			<Footer />
		</>
	);
};

export default ServicesPage;

// {/*<Sponsors />*/}
