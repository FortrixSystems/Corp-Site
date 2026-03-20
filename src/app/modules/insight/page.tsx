import { redirect } from 'next/navigation';

/**
 * Fortrix Insight was renamed to Fortrix Clarity.
 * Redirect old /modules/insight links to /modules/clarity.
 */
export default function InsightRedirect() {
  redirect('/modules/clarity');
}
