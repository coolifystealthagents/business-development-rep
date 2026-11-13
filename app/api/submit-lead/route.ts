import { NextResponse } from 'next/server';

const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);

export async function POST(request: Request) {
  const form = await request.formData();
  if (form.get('website_url')) return NextResponse.json({ ok: true });
  const source = String(form.get('source') || '');
  const full = source.startsWith('contact-page');
  const firstName = String(form.get('first_name') || '').trim();
  const lastName = String(form.get('last_name') || '').trim();
  const legacyName = String(form.get('name') || '').trim();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const company = String(form.get('company') || '').trim();
  const companySize = String(form.get('company_size') || '').trim();
  const positions = String(form.get('positions_to_fill') || '').trim();
  const referral = String(form.get('referral_source') || '').trim();
  if (!/^\S+@\S+\.\S+$/.test(email) || (full ? (!firstName || !lastName || !company || !companySize || !positions || !referral) : !legacyName)) {
    return NextResponse.json({ ok: false, message: 'Please complete every required field.' }, { status: 400 });
  }
  if (full && personalDomains.has(email.split('@')[1])) {
    return NextResponse.json({ ok: false, message: 'Please use your business email address.' }, { status: 400 });
  }
  // Validation only. The client explicitly delivers one accepted lead through ACR.
  return NextResponse.json({ok:true});
}
