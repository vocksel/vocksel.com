FROM rust:1.75.0 AS build

WORKDIR /tmp

RUN apt-get update && apt-get install -y git gcc
RUN git clone https://github.com/vocksel/swatch

# HACK: Need to install Lune from its main branch to bind servers to 0.0.0.0
RUN git clone https://github.com/lune-org/lune
RUN cargo build --release --manifest-path lune/Cargo.toml

FROM ubuntu:24.04 AS server

VOLUME [ "/app/server" ]

# The server spawns processes for these commands
RUN apt-get update && apt-get install -y curl unzip

WORKDIR /app

COPY --from=build /tmp/lune/target/release/lune /usr/local/bin
COPY --from=build /tmp/swatch/server/src /app/server

EXPOSE 8080
CMD ["lune", "run", "server/server.luau"]
