import { SITE_URL } from '@/lib/site-constants';

export const GA_MEASUREMENT_ID = 'G-4M0YNE0XE0';

export type ConversionEvent =
  | 'tel_click'
  | 'mailto_click'
  | 'contact_form_submit'
  | 'work_with_us_submit'
  | 'request_demo_click';

type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | undefined {
  if (typeof window === 'undefined') return undefined;
  const fn = (window as Window & { gtag?: GtagFn }).gtag;
  return typeof fn === 'function' ? fn : undefined;
}

/** Fire a GA4 page_view (used on route changes in the App Router). */
export function trackPageView(pagePath: string): void {
  const send = gtag();
  if (!send) return;
  send('config', GA_MEASUREMENT_ID, { page_path: pagePath });
}

/** Fire a GA4 event intended for conversion marking in admin. */
export function trackConversion(
  event: ConversionEvent,
  params?: Record<string, string>
): void {
  const send = gtag();
  if (!send) return;
  send('event', event, {
    event_category: 'conversion',
    ...params,
  });
}

export function isRequestDemoHref(href: string): boolean {
  try {
    const url = new URL(href, SITE_URL);
    return (
      url.pathname === '/contact' &&
      (url.searchParams.get('interest') === 'demo' ||
        url.searchParams.get('topic') === 'Request a demo')
    );
  } catch {
    return href.includes('interest=demo');
  }
}
