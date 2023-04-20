# elevator-react

This is a tiny Expo React Native / Vite React app that simulates the behavior of an elevator.

[![Deploy static content to Pages](https://github.com/winterdouglas/elevator-react-native/actions/workflows/github-pages.yml/badge.svg)](https://github.com/winterdouglas/elevator-react-native/actions/workflows/github-pages.yml)

## About

The projects are in a monorepo configured with turborepo and yarn workspaces, that enables sharing some code between web and mobile.
- tsconfig (typescript base configs for react and react native apps)
- eslint-config (common eslint configurations)
- theme (eg.: colors and layout aspects)
- elevator-core (the base logic for the elevator, fully implemented using hooks)

The apps uses some basic components and react hooks to create the elevator logic.

- It's possible to change route when the elevator is already running.
- The floor can only be called once, no matter if it's from "inside or outside" of the elevator.
- It supports dark and light modes (respecting the system preference).

## Screenshots

| Dark                                                         | Light                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| ![Screenshot of the app in dark mode](/screenshots/dark.png) | ![Screenshot of the app in dark mode](/screenshots/light.png) |
