import { Page } from "@playwright/test";

export const locators = {
  logInHeading: (page: Page) =>
    page.getByText("Login to your account", { exact: true }),
  logInEmailInput: (page: Page) => page.getByTestId("login-email"),
  logInPasswordInput: (page: Page) => page.getByTestId("login-password"),
  logInButton: (page: Page) => page.getByRole("button", { name: "Login" }),
  newUserHeading: (page: Page) =>
    page.getByText("New User Signup!", { exact: true }),
  newUserNameInput: (page: Page) => page.getByRole("textbox", { name: "Name" }),
  newUserEmailInput: (page: Page) =>
    page
      .locator(".signup-form")
      .getByRole("textbox", { name: "Email Address" }),
  newUserSignupButton: (page: Page) =>
    page.getByRole("button", { name: "Signup" }),
};
