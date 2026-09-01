import { TransformInterceptor } from './transform.interceptor';
import { of } from 'rxjs';

describe('TransformInterceptor', () => {
  it('should wrap response in standard envelope', (done) => {
    const interceptor = new TransformInterceptor();
    const contextMock: any = {
      switchToHttp: () => ({
        getResponse: () => ({ statusCode: 200 }),
      }),
    };
    const nextMock: any = {
      handle: () => of({ test: 'data' }),
    };

    interceptor.intercept(contextMock, nextMock).subscribe((result) => {
      expect(result.success).toBe(true);
      expect(result.data).toEqual({ test: 'data' });
      expect(result.statusCode).toBe(200);
      expect(result.timestamp).toBeDefined();
      done();
    });
  });
});
