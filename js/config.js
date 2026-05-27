/* config.js Copyright (c) 2026:a@cov.in. All Rights Reserved. Do Not Distribute. */

const BOOKING_URL  = 'https://secure.helloalma.com/providers/katherine-didonato/';
const INSURANCE_URL = 'https://secure.helloalma.com/check-my-insurance-coverage/?provider=katherine-didonato&providerFirstName=Katherine&providerOffersSlidingScale=true';

document.querySelectorAll('[data-href="booking"]').forEach(el  => { el.href = BOOKING_URL; });
document.querySelectorAll('[data-href="insurance"]').forEach(el => { el.href = INSURANCE_URL; });
