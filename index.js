export default {
  async fetch(request) {
    return new Response("Filestore Bot is Live!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
