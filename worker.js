export default {
  async fetch(request) {
    // 商品数据
    const productList = [
      {
        "title": "手机",
        "subtitle": "云端精选商品",
        "price": "6999",
        "tag": "推荐",
        "imageUrl": "https://picsum.photos/id/3/300/300"
      }
    ];

    return new Response(JSON.stringify(productList), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }
}