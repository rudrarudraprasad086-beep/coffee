export default function handler(req, res) {
  if (req.method === 'POST') {
    const { item } = req.body;
    return res.status(200).json({ message: "Notification sent", item });
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}
