IMAGE_NAME=web-starter-project

pipeline/image/base/build:
	docker build --build-arg NPM_TOKEN=$(NPM_TOKEN) --tag $(IMAGE_NAME):base --target base .

pipeline/test/type_check:
	make pipeline/image/base/build
	docker run --rm $(IMAGE_NAME):base npx tsc -p src/tsconfig.json --noemit

pipeline/lint:
	make pipeline/image/base/build
	docker run --rm $(IMAGE_NAME):base npm run lint -- --quiet

pipeline/test/unit/coverage:
	make pipeline/image/base/build
	docker run --rm -v $$GITHUB_WORKSPACE/coverage:/app/coverage $(IMAGE_NAME):base npm run test:coverage

pipeline/test/e2e:
	docker load --input $(IMAGE_NAME).docker
	npm run e2e:ci
