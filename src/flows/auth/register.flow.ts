export async function registerUserFlow(pom: any, username: string, email: string): Promise<void> {
    await pom.homePage.header.clickSignupLoginLink();
    await pom.loginPage.assertPageLoaded();
    await pom.loginPage.signUp(username, email);
    await pom.signUpPage.assertPageLoaded();
    await pom.signUpPage.registerNewAccount(username);
}