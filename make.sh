#!/bin/bash

# Output colors
NORMAL="\\033[0;39m"
BLUE="\\033[1;93m"

log() {
  echo -e "$BLUE > $1 $NORMAL"
}

logs() {
    log "Container logs"
    docker-compose logs -f $1
}

build() {
    log "Build images"
    docker-compose build
}

up() {
    log "Start services"
    docker-compose up --build -d
}

down() {
    log "Down services" && \
    docker-compose down
}

rmi() {
    log "Remove unused images"
    docker rmi $(docker images -f dangling=true -q) --force
}


help() {
  echo "-------------------------------------------------------------"
  echo "                      commands                               "
  echo "-------------------------------------------------------------"
  echo -e -n "$BLUE"
  echo " - build        build the Docker image"
  echo " - logs         logs container"
  echo " - up           up services"
  echo " - down         down services"
  echo " - rmi          remove unused Docker images"
  echo -e -n "$NORMAL"
  echo "--------------------------------------------------------------"

}

$*
