FROM node:10-buster-slim AS build
ADD . /app
WORKDIR /app
RUN yarn install && \
    yarn build

FROM node:10-alpine
COPY --from=build /app/build /app/build
WORKDIR /app
RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "-s", "build", "-l", "8080"]