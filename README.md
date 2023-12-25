# Project Title

This library is a collection of React components, hooks, and utilities that are easy to use. It was mainly created to be used in my personal projects, but I decided to share it with the community. The components are built using [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction).

[Click here](https://oxyzen-ui.vercel.app/getting-started) to read how to use this library.

> **Note:** This library is still in development, so there may be some bugs. Also, the documentation is not fully complete yet. The CLI is also not ready yet. So, most of the stuffs has to be done manually.

## Project Structure

The project is structured as follows:

- `components/`: This directory contains all the reusable React components built with Radix Primitives. It is further divided into `layout/` and `typography/` subdirectories.
- `hooks/`: This directory contains custom React hooks.
- `lib/`: This directory contains utility functions.

## Things are not part of this library

- `pages/`: This directory contains the pages of the application. It basically contains the documentation of the library. It is not part of the library itself. You may delete it if you want or ignore it.
- `theme.config.jsx`: Configuration for the documentation theme.
- `next.config.js`: Configuration for Next.js. The content of this file is modified to support the documentation theme not the actual library itself.

## Components

The `components/` directory is divided into two subdirectories: `layout/` and `typography/`.

### Layout Components

The `layout/` directory contains components for creating layouts. It includes:

- `box.tsx`: A component for creating a box layout.
- `container.tsx`: A component for creating a container layout.
- `flex.tsx`: A component for creating a flex layout.
- `grid.tsx`: A component for creating a grid layout.
- `section.tsx`: A component for creating a section layout.
- `variants.ts`: Contains variants for the layout components.

### Typography Components

The `typography/` directory contains components for typography. It includes:

- `blockquote.tsx`: A component for creating a blockquote.
- `code.tsx`: A component for displaying code.
- `em.tsx`: A component for emphasizing text.
- `heading.tsx`: A component for creating headings.
- `kbd.tsx`: A component for displaying keyboard inputs.
- `quote.tsx`: A component for creating quotes.
- `strong.tsx`: A component for making text bold.
- `text.tsx`: A component for creating text.
- `variants.ts`: Contains variants for the typography components.

## Hooks

The `hooks/` directory contains custom React hooks.

## Utilities

The `lib/` directory contains utility functions. It includes:

- `utils.ts`: Contains utility functions.

## License

This project is licensed under the terms of the license found in the [`LICENSE`](https://github.com/Tarikul-Islam-Anik/oxyzen-ui/blob/main/LICENSE) file.

## Contributing

Contributions are welcome! Please read the `CONTRIBUTING.md` file for guidelines on how to contribute to this project.

## Questions

If you have any questions, please open an [issue](https://github.com/Tarikul-Islam-Anik/oxyzen-ui/issues/new) in the GitHub repository.
