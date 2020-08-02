# Makefile

SHELL := /bin/bash
DEPLOY_TARGET ?= root@owly.duckdns.org

build: clean
	npm install
	npm audit fix
	ng build --prod

ansible-build: clean
	source ../node-env/bin/activate && npm install
	source ../node-env/bin/activate && npm audit fix
	source ../node-env/bin/activate && ng build --prod

clean:
	rm -rf dist/

clean-all: clean
	rm -rf node_modules/

deploy: build
	scp -r dist/locateMe/ $(DEPLOY_TARGET):/var/www/owly
