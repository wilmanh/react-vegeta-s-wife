FROM node:24.4.1

RUN corepack enable
RUN apt-get update && apt-get install -y xdg-utils

RUN corepack prepare pnpm --activate
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /src/

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm i

COPY . /src/


EXPOSE 6006

CMD ["pnpm", "run", "storybook"]