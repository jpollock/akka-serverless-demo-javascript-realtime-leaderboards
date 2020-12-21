

## Akka Serverless

### Deploy



## Clients

Web

protoc --include_imports --proto_path=./service/node_modules/cloudstate/proto --proto_path=./service/node_modules/cloudstate/protoc/include  --js_out=import_style=commonjs:./ui/src/_proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./ui/src/_proto --proto_path=. ./protos/LeaderboardService.proto


protoc  --proto_path=./service/node_modules/cloudstate/proto --proto_path=./service/node_modules/cloudstate/protoc/include  --js_out=import_style=commonjs:./ui/src/_proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./ui/src/_proto --proto_path=./protos/ LeaderboardService.proto


protoc  --proto_path=./node_modules/cloudstate/proto --proto_path=./node_modules/cloudstate/protoc/include  --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. --proto_path=/Users/jeremypollock/development/lightbend/scratch/leaderboard_test_app/protos/ LeaderboardService.proto

