import { BuiltinPipe } from './builtin.pipe';

describe('BuiltinPipe', () => {
  it('create an instance', () => {
    const pipe = new BuiltinPipe();
    expect(pipe).toBeTruthy();
  });
});
