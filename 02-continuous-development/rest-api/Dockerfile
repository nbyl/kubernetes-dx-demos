# ---- Base Node ----
FROM node:8-alpine
# install node
RUN apk add --no-cache tini
# set working directory
WORKDIR /root/rest
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 8080
CMD npm start