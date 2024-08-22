import { createClient } from '@/libs/supabase/server';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Missing quote ID' });
    }

    const supabase = createClient();
    const { data, error } = await supabase
      .from('quotes')
      .update({ likes: supabase.raw('likes + 1') })
      .eq('id', id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data[0]);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}