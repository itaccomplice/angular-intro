import { FirstFeatureModule } from './first-feature.module';

describe('FirstFeatureModule', () => {
  let firstFeatureModule: FirstFeatureModule;

  beforeEach(() => {
    firstFeatureModule = new FirstFeatureModule();
  });

  it('should create an instance', () => {
    expect(firstFeatureModule).toBeTruthy();
  });
});
