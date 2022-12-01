include .env

prsm:
	npx prisma generate

prsmpush:
	npx prisma db push 

up:
	yarn dev

build:
	docker-compose up --build

dup:
	docker-compose up -d

down:
	docker-compose down

db:
	clear && docker exec -it serviceshop_db_1  bash

logs:
	clear && docker-compose logs -f

clear:
	clear && docker container stop $(docker container ls -a -q) && docker system prune -a -f --volumes
