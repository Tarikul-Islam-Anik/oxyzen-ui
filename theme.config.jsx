import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config = {
  logo: (
    <div className="flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 80C0 35.8172 35.8172 0 80 0H720C764.183 0 800 35.8172 800 80V720C800 764.183 764.183 800 720 800H80C35.8172 800 0 764.183 0 720V80Z"
          fill="#262626"
        />
        <path
          d="M476.22 672.728C482.797 677.333 490.767 679.513 498.772 678.898C506.777 678.283 514.321 674.911 520.118 669.356C525.914 663.801 529.605 656.408 530.56 648.436C531.515 640.465 529.676 632.408 525.356 625.641L499.188 584.644C455.717 516.538 387.159 468.306 308.371 450.399L258.974 439.174C251.139 437.393 242.928 438.39 235.747 441.994C228.565 445.597 222.859 451.584 219.604 458.931C216.349 466.277 215.748 474.526 217.903 482.267C220.058 490.007 224.835 496.759 231.418 501.366L476.22 672.728ZM672.728 323.78C677.332 317.203 679.513 309.233 678.898 301.228C678.283 293.223 674.911 285.679 669.356 279.882C663.801 274.086 656.408 270.395 648.436 269.44C640.465 268.485 632.408 270.324 625.641 274.644L584.643 300.812C516.538 344.283 468.306 412.841 450.399 491.629L439.174 541.026C437.393 548.861 438.39 557.072 441.994 564.253C445.597 571.435 451.584 577.141 458.931 580.396C466.277 583.651 474.526 584.252 482.267 582.097C490.007 579.942 496.759 575.165 501.366 568.582L672.728 323.78ZM323.78 127.272C317.203 122.668 309.233 120.487 301.228 121.102C293.223 121.717 285.679 125.089 279.882 130.644C274.086 136.199 270.395 143.592 269.44 151.564C268.485 159.535 270.324 167.592 274.644 174.359L300.812 215.357C344.283 283.462 412.841 331.694 491.629 349.601L541.026 360.826C548.861 362.607 557.072 361.61 564.253 358.006C571.435 354.403 577.141 348.416 580.396 341.069C583.651 333.723 584.252 325.474 582.097 317.733C579.942 309.993 575.165 303.241 568.582 298.634L323.78 127.272ZM127.272 476.22C122.667 482.797 120.487 490.767 121.102 498.772C121.717 506.777 125.089 514.321 130.644 520.118C136.199 525.914 143.592 529.605 151.564 530.56C159.535 531.515 167.592 529.676 174.359 525.356L215.356 499.188C283.462 455.717 331.694 387.159 349.601 308.371L360.826 258.974C362.607 251.139 361.61 242.928 358.006 235.747C354.403 228.565 348.416 222.859 341.069 219.604C333.723 216.349 325.474 215.748 317.733 217.903C309.993 220.058 303.241 224.835 298.634 231.418L127.272 476.22Z"
          fill="white"
        />
      </svg>
      <span className="font-bold ml-2 text-lg">OxyZen UI</span>
    </div>
  ),
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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
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
