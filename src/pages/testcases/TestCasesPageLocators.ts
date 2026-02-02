import { Page } from "@playwright/test";

export const locators = {
  testCaseHeading: (page: Page) => page.getByText("Test Cases"),
  feedbackHeading: (page: Page) =>
    page.getByRole("heading", { name: "Feedback For Us" }),
};
