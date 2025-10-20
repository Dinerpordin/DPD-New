import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const { input, domain, mode } = JSON.parse(body || '{}');
    if (!client) return new NextResponse('AI not configured. Add OPENAI_API_KEY in Vercel → Settings.', { status: 200 });
    const system = domain==='health'
      ? 'You are a careful health educator. Provide safe, general information only. Include "This is not medical advice."'
      : 'You are a helpful, concise assistant for general questions.';
    const style = mode==='concise' ? 'Answer in 4-6 bullet points.' : mode==='bangla' ? 'Answer in Bengali (বাংলা).' : '';
    const msg = `${style}\n\nQuestion: ${input}`;
    const resp = await client.responses.create({
      model: 'gpt-4.1-mini',
      input: [{ role:'system', content: system }, { role:'user', content: msg }],
    } as any);
    const text = (resp as any)?.output_text || 'No response';
    return new NextResponse(text);
  } catch (e:any) {
    return new NextResponse('Error: '+e.message, { status: 200 });
  }
}
