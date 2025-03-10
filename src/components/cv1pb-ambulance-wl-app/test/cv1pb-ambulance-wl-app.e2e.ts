import { newE2EPage } from '@stencil/core/testing';

describe('cv1pb-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv1pb-ambulance-wl-app></cv1pb-ambulance-wl-app>');

    const element = await page.find('cv1pb-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
