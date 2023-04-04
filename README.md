```shell
export ALCHEMY_API_KEY=
export GOERLI_PRIVATE_KEY=
npx hardhat test
npx hardhat compile
npx hardhat test test/HelloWorld.js
npx hardhat run --network goerli scripts/deploy.js
```

- `env` 명령어를 통해 위에 `export` 명령어로 등록한 환경변수를 shell에서 확인할 수 있다
