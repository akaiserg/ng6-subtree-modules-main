let { describe, it, beforeEach, expect } = global;
import { ModuleLandingModule } from './module-landing.module';

describe('ModuleLandingModule', () => {
  let moduleLandingModule: ModuleLandingModule;

  beforeEach(() => {
    moduleLandingModule = new ModuleLandingModule();
  });

  it('should create an instance', () => {
    expect(moduleLandingModule).toBeTruthy();
  });
});
