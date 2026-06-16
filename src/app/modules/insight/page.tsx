import { permanentRedirect } from 'next/navigation';

/**
 * Fortrix Insight was renamed to Fortrix Clarity.
 * Permanent redirect for legacy /modules/insight links.
 */
export default function InsightRedirect() {
  permanentRedirect('/modules/clarity');
}
