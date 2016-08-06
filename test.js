import test from 'ava';
import fn from './';

// TODO: Write real tests, testing in and outputs (maybe with one input file and multiple output / config targets)
test('title', t => {
	t.is(fn('unicorns'), 'unicorns & rainbows');
});
