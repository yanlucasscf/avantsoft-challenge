#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[1;34m'
NC='\033[0m' 

echo -e "${BLUE}Instalando dependências do backend...${NC}"
cd backend
npm install
npm run start:dev &
cd ..

echo -e "${BLUE}Instalando dependências do frontend...${NC}"
cd frontend
npm install
npm run dev &
cd ..

wait

echo -e "${GREEN}Front-end e backend iniciados com sucesso!${NC}"
