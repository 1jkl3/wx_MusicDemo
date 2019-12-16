//请求方法
const GET_REQ = "GET"
const POST_REQ = "POST"
const PUT_REQ = "PUT"
const DELETE_REQ = "DELETE"
const TRACE_REQ = "TRACE"
const CONNECT_REQ = "CONNECT"
const HEAD_REQ = "HEAD"
const OPTIONS_REQ = "OPTIONS"
//header头信息
const JSON_HEADER = { 'content-type': 'application/json'}
const FROM_HEADER = { 'content-type':'application/x-www-form-urlencoded'}
const FLIE_HEADER = { 'content-type':'multipart/form-data'}
const XML_HEADER = { 'content-type':'text/xml'}
module.exports = {
  GET_REQ,
  POST_REQ,
  PUT_REQ,
  DELETE_REQ,
  TRACE_REQ,
  CONNECT_REQ,
  HEAD_REQ,
  OPTIONS_REQ,
  JSON_HEADER,
  FROM_HEADER,
  FLIE_HEADER,
  XML_HEADER
}