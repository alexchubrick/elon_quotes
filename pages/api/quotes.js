// File: pages/api/quotes.js
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function handler(req, res) {
  const supabase = createServerClient({ req, res });
  const { data, error } = await supabase.from("quotes").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
