default: test

test: node_modules $(wildcard test/*.js)
	@node_modules/.bin/mocha test/test.js

clean:
	@rm -rf node_modules

node_modules: package.json
	@npm install

.PHONY: clean test