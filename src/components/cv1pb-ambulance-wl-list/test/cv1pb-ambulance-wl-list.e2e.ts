import { newE2EPage } from '@stencil/core/testing';

describe('cv1pb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv1pb-ambulance-wl-list></cv1pb-ambulance-wl-list>');

    const element = await page.find('cv1pb-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
