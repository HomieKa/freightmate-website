export type EventPayload = Record<string, unknown> & { page?: string; section?: string };

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  __consent__?: boolean;
};

function dntEnabled(): boolean {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }
  return navigator.doNotTrack === '1' || window.doNotTrack === '1';
}

function hasConsent(): boolean {
  if (typeof window === 'undefined') return true;
  const win = window as TrackingWindow;
  return win.__consent__ !== false;
}

export function track(event: string, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return;
  if (dntEnabled() || !hasConsent()) return;
  const win = window as TrackingWindow;
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({ event, ...payload, ts: Date.now() });
  if (import.meta.dev) {
    console.debug('[track]', event, payload);
  }
}
