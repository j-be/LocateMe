build: clean
	npm install
	npm audit fix
	ng build --prod

clean:
	rm -rf dist/

clean-all: clean
	rm -rf node_modules/

deploy: build
	scp -r dist/locateMe/ root@owly.duckdns.org:/var/www/owly
