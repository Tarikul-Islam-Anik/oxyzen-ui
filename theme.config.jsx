import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config = {
  logo: <span style={{ fontWeight: "bold" }}>OxyZen UI</span>,
  project: {
    link: "https://github.com/Tarikul-Islam-Anik/oxyzen-ui",
  },
  docsRepositoryBase: "https://github.com/Tarikul-Islam-Anik/oxyzen-ui",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – OxyZen UI",
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://oxyzen-ui.vercel.app/og.png"
        : `https://oxyzen-ui.vercel.app/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A Simple and Handpicked UI Components, Hooks and Utilities for React."
        />
        <meta
          name="og:description"
          content="A Simple and Handpicked UI Components, Hooks and Utilities for React."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="OxyZen UI" />
        <meta name="twitter:url" content="https://oxyzen-ui.vercel.app/" />
        <meta
          name="og:title"
          content={title ? title + " – OxyZen UI" : "OxyZen UI"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="OxyZen UI" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <p className="text-xs font-bold">
        © {new Date().getFullYear()}{" "}
        <a href="https://oxyzen.vercel.app/">OxyZen.</a>
      </p>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
