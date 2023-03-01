import { AsPercentagePipe } from './as-percentage.pipe';

describe('AsPercentagePipe', () => {
  const pipe = new AsPercentagePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it("should return 0 when given a 0 max value (division by 0)",()=>{
    expect(pipe.transform(1,0)).toEqual(0);
  });
  it("should return 10 when given 1 and 10",()=>{
    expect(pipe.transform(1,10)).toEqual(10);
  });
  it("should return 100 when given 10 and 10",()=>{
    expect(pipe.transform(10,10)).toEqual(100);
  });
  it("should return 100 when given 20 and 10",()=>{
    expect(pipe.transform(20,10)).toEqual(100);
  });
  it("should return 33 when given 1 and 3",()=>{
    expect(pipe.transform(1,3)).toEqual(33);
  });
});
