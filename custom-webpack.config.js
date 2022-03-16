// export default {
// 	module: {
//     rules: [
// 			{ //this rule will only be used for any vendors
// 			   test: /\.css$/,
// 			   loaders: ['style-loader', 'css-loader'],
// 			   include: [/node_modules/]
// 			 },
// 			 {
// 			   test: /\.css$/,
// 			   loaders: ['to-string-loader', 'css-loader'],
// 			   exclude: [/node_modules/] //add this line so we ignore css coming from node_modules
// 			 }
// 		]
// 	}
// }