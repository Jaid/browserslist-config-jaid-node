import configure from "webpack-config-jaid"

export default configure({
  publishimo: {fetchGithub: true},
  terserOptions: false,
  output: {
    umdNamedDefine: false,
    library: null,
  },
})