# Hatch Booking System

## About

Cabpool is a cutting-edge room booking application designed to revolutionize McMaster University's existing system. With a sleek interface built using React.js, the platform enables students to effortlessly book rooms at a staggering six times the speed of the previous system. The application utilizes an AWS backend for efficient account management and a robust booking database. Leveraging the power of Next.js and Tailwind CSS, "Hatch Booking System" offers an intuitive and seamless experience for students, streamlining the room booking process like never before.

Requirements include:

- [x] Allowing students to book a room in the Gerald Hatch Centre 6x faster than the original system
- [x] Responsive design to be able to be used on both desktop and mobile devices

![Hatch Booking System Mockup](https://i.imgur.com/6NeHwbr.jpg)

## Getting Started

### Pre-requisites

The following are required to be installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [CocoaPods](https://cocoapods.org/) (_This can be installed through the Node.js Installer_)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [VScode](https://code.visualstudio.com/download)

_Note: Ensure that you select "Add to PATH" when installing Git, Node.js, and Yarn, if prompted_

### Recommended VScode Extensions

Install the following extensions for a better development experience:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

### Installation

1. Clone the repository

2. Install dependencies

```bash
yarn install
```

3. Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Branch and Commit Message Convention

**Branch**

Ensure that all your branches are named according to the following convention:

- `feature/<feature-name>` for new features
- `bugfix/<bug-name>` for bug fixes
- `improvement/<improvement-name>` for improvements
- `chore/<chore-name>` for chores

Ensure that the name of your branch is descriptive of the feature/bug/improvement/chore that you are working on, and is written in `kebab-case`.

Examples:

- `feature/add-login-page`
- `bugfix/fix-login-page`
- `improvement/update-login-page`
- `chore/update-readme`

**Commit Message**

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. Ensure that all your commit messages are written according to the following convention:

```
<type>: <description>
```

Where `type` is one of the following:

- `feat` for new features
- `fix` for bug fixes

Examples:

- `feat: add confirm password field`
- `fix: submit button not working`

### Development

#### Folder Structure

The following is the folder structure of the project:

```bash
.
├── .github
├── .husky
├── .vscode
├── node_modules
├── public
├── src
│   ├── __tests__
│   ├── components
│   ├── constants
│   ├── lib
│   ├── pages
│   ├── styles
```

The most important folders are:

- `node_modules` contains all the dependencies of the project. This folder is automatically generated when you run `yarn install`, and should not be manually edited.
- `public` contains all the static assets of the project. This includes images, fonts, etc.
- `src` contains all the source code of the project
  - `components` contains all the components of the project. These include any component that is used more than once in the project.
  - `constants` contains all the constants of the project
  - `lib` contains all the utility functions of the project
  - `pages` contains all the pages of the project. This is where you will be developing most of the website. Each file in this folder represents a sub-directory page in the website. For example, `bookings.tsx` would link to [https://www.macengsociety.ca/bookings](https://www.macengsociety.ca/bookings)
  - `styles` contains all the styles of the project
