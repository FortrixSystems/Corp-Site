import { redirect } from 'next/navigation';

/**
 * Fortrix Clarity was replaced by Fortrix Insight.
 * Redirect old /modules/clarity links to /modules/insight.
 */
export default function ClarityRedirect() {
  redirect('/modules/insight');
}
