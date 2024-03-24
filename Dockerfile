FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 3000

CMD ["node","dist/index.js"]