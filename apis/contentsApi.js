import request from './request.js'

class contentsApi {
  constructor() {
    const app = getApp();
    console.log(app);
    this._baseUrl = 'http://localhost:5300';
    this._defaultHeader = { 'data-tupe': 'application/json' }
    this._request = new request
    this._request.setErrorHandler(this.errorHander)
  }
  /**
* 统一的异常处理方法
*/
  errorHander(res) {
    console.error(res)
  }

  /**
   * 获取所有信息
   */
  getMessage(content_id, key = null) {
    let data = key != null ? { content_id: content_id, queryValue: key } : { content_id: content_id }
    return this._request.getRequest(this._baseUrl + '/contents', data).then(res => res.data)
  }

  /**
   * HTTP 请求中的 PUT 、DELETE、POST等网络类型等等函数
  */
}
export default contentsApi;
