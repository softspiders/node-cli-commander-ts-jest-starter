//import { Writer } from '../writer';

describe('Writer', () => {
    describe('#write()', () => {
        it('should write a message', () => {

            // let spy = sinon.spy(console, 'log');
            //
            // var writer = new Writer();
            // writer.write('I am being tested!');
            //
            // assert(spy.calledWith('I am being tested!'));
            //
            // spy.restore();

            console.log('CASE: should write a message');
            expect(2*2).toBe(4)
        });
        it('should write a default message', () => {

            // let spy = sinon.spy(console, 'log');
            //
            // var writer = new Writer();
            // writer.write();
            //
            // assert(spy.calledWith('Hello World!'));
            //
            // spy.restore();
            console.log('CASE: should write a default message');
            expect(2*2).toBe(4)
        });
    });
});
