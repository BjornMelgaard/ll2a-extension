.DEFAULT_GOAL := crx

#############################
dev:
	cd packages/extension && yarn run dev

#############################
lingualeo-api:
	cd packages/lingualeo-api && yarn run build
metalib:
	cd packages/metalib && yarn run build
extension: metalib lingualeo-api
	cd packages/extension && yarn run build
crx: extension
	cd packages/extension && yarn run crx:compress

#############################
format-fix-lingualeo-api:
	cd packages/lingualeo-api && yarn run format-fix
format-fix-metalib:
	cd packages/metalib && yarn run format-fix
format-fix-extension:
	cd packages/extension && yarn run format-fix
format-fix: format-fix-lingualeo-api format-fix-metalib format-fix-extension

#############################
lint-lingualeo-api:
	cd packages/lingualeo-api && yarn run lint
lint-metalib:
	cd packages/metalib && yarn run lint
lint-extension:
	cd packages/extension && yarn run lint
lint: lint-lingualeo-api lint-metalib lint-extension
