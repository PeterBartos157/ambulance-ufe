import { newE2EPage } from '@stencil/core/testing';

describe('cv1pb-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv1pb-ambulance-wl-editor></cv1pb-ambulance-wl-editor>');

    const element = await page.find('cv1pb-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
