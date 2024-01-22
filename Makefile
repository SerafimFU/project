create:
	docker run --rm --tty \
	-v ./web:/dk \
	-w /dk \
	node:lts yarn create vite . --template react-ts

yarn: 
	docker run --rm --tty \
	-v ./web:/dk \
	-w /dk \
	node:lts yarn

dev:
	docker run --rm -ti \
	-v ./web:/dk \
	-w /dk \
	-p "5173:5173" \
	node:lts yarn dev --host 0.0.0.0

installback: 
	docker run --rm --tty \
	-v ./nest:/bg \
	-w /bg \
	node:lts npm install

runback: 
	docker run --rm --tty \
	-v ./nest:/bg \
	-w /bg \
	-p "3000:3000" \
	node:lts npm run start:dev	

nestcli: 
	docker run --rm --tty \
	-v ./nest:/bg \
	-w /bg \
	node:lts node node_modules/@nestjs/cli/bin/nest.js $(filter-out $@,$(MAKECMDGOALS))

%:
	@:
