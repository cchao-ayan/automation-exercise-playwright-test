import { test } from '@core/fixtures/app.fixture';
import { DataReader } from '@shared/utils/data/data-reader';
import { paths } from '@config/paths';
import { InvalidFooterEmailTestData } from '@shared/components/footer/footer.component.type';
import { validateFooterInput } from '@shared/components/footer/footer.validator';


const data = DataReader.read<InvalidFooterEmailTestData>(paths.data.footer.invalidEmailFooter);

test.describe('Footer Email Validation', () => {
  test.beforeEach(async ({ pom }) => {
    await pom.homePage.navigateToHomePage();
    await pom.homePage.assertPageLoaded();
  });

  for (const row of data) {
    test(`${row.id}. ${row.scenario}`, async ({ pom }) => {
      await pom.homePage.footer.subscribe(row.email);
      const result = validateFooterInput({ email: row.email });
      await pom.homePage.footer.assertFooterEmailValidation(result);
    });
  }
});
