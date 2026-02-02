import { Page, Locator } from "@playwright/test";

/**
 * Checks all links within a scope for broken links.
 * @param page - Playwright Page object
 * @param scope - CSS selector string or Locator that contains links (default: entire page)
 * @returns Promise<string[]> - Array of broken link URLs
 */
export async function checkForBrokenLinks(
  page: Page,
  scope: string | Locator = "body",
): Promise<string[]> {
  const brokenLinks: string[] = [];

  const linkLocator =
    typeof scope === "string" ? page.locator(`${scope} a`) : scope.locator("a");

  const links = await linkLocator.elementHandles();

  for (const handle of links) {
    const href = (await handle
      .getProperty("href")
      .then((p) => p?.jsonValue())
      .catch(() => null)) as string | null;

    if (!href) {
      continue;
    }

    if (href.startsWith("#") || href.startsWith("javascript:")) {
      continue;
    }

    try {
      const resp = await page.context().request.head(href);
      if (!resp.ok()) {
        brokenLinks.push(href);
      }
    } catch (err) {
      brokenLinks.push(href);
    }
  }

  return brokenLinks;
}

export async function checkForBrokenLink(url: string): Promise<boolean> {
  try {
    const resp = await fetch(url, { method: "HEAD" });
    return resp.ok;
  } catch {
    return false;
  }
}
