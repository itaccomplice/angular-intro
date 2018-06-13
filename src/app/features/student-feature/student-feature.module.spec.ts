import { StudentFeatureModule } from './student-feature.module';

describe('StudentFeatureModule', () => {
  let studentFeatureModule: StudentFeatureModule;

  beforeEach(() => {
    studentFeatureModule = new StudentFeatureModule();
  });

  it('should create an instance', () => {
    expect(studentFeatureModule).toBeTruthy();
  });
});
