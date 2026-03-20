export default function handler(req, res) {
  const data = req.body;

  console.log("TRACK:", data);

  res.status(200).json({ success: true });
}
