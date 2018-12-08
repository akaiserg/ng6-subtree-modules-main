let { describe, it, beforeEach, expect } = global;
import { Module1Module } from './module-1.module';

describe('Module1Module', () => {
  let module1Module: Module1Module;

  beforeEach(() => {
    module1Module = new Module1Module();
  });

  it('should create an instance', () => {
    expect(module1Module).toBeTruthy();
  });
});
