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