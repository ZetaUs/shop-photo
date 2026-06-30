// 统一跨域头配置
const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "86400"
};

export default {
  async fetch(request) {
    // 处理跨域预检 OPTIONS 请求（关键，缺失会跨域失败）
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders
        });
    }

    // 你的商品JSON数据
    const productList = [
      {
        "title": "手机",
        "subtitle": "云端精选商品",
        "price": "6999",
        "tag": "推荐",
        "imageUrl": "https://picsum.photos/id/3/300/300"
      },
      {
        "title": "平板",
        "subtitle": "大屏影音设备",
        "price": "3299",
        "tag": "热销",
        "imageUrl": "https://picsum.photos/id/60/300/300"
      }
    ];

    // 返回JSON并附加跨域头
    return new Response(JSON.stringify(productList), {
        headers: corsHeaders
    });
  }
}