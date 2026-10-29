/**
 * Wok Dragon - Modern Interactive JavaScript
 * Responsive Navigation, Menu Filtering, Live Hours Status & Location Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMenuFilter();
  initLocationSwitcher();
  initLiveHours();
  initContactForm();
  initScrollEffects();
  initOrderModal();
  initAnalyticsTracking();
});

/* ==========================================================================
   Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  function openDrawer() {
    toggleBtn.classList.add('is-active');
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    toggleBtn.classList.remove('is-active');
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('is-open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   Interactive Menu Category Filter
   ========================================================================== */
function initMenuFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const dishCards = document.querySelectorAll('.dish-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active state on buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      dishCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        const categories = cardCategory.trim().split(/\s+/);
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Location Tab Switcher
   ========================================================================== */
const locationData = {
  lenox: {
    name: 'Lenox Square Mall (Food Court)',
    address: '3393 Peachtree Rd, Atlanta, GA 30326, USA',
    directionsUrl: 'https://www.google.com/maps/dir//3393+Peachtree+Rd+NE,+Atlanta,+GA+30326,+United+States/@33.8466952,-84.4461499,12z/',
    hoursMonSat: '10:00 am - 08:00 pm',
    hoursSun: '12:00 pm - 07:00 pm',
    features: ['Food Court Seating', 'Lenox MARTA Station Adjacent', 'Fast Pickup Available'],
    mapEmbed: 'https://maps.google.com/maps?q=3393%20Peachtree%20Rd%20NE,%20Atlanta,%20GA%2030326&t=&z=15&ie=UTF8&iwloc=&output=embed',
    platforms: [
      {
        name: 'DoorDash',
        url: 'https://www.doordash.com/store/wokdragon-atlanta-1108545/1638594/?srsltid=AfmBOorkehzisPOrJtu10zrl5aYhxTYKJkxMZjz05ZZuDPOXT1faexH0',
        btnClass: 'btn-doordash',
        icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.071 8.41a6.09 6.09 0 0 0-5.397-3.328H1.615A1.614 1.614 0 0 0 .2 7.424a1.614 1.614 0 0 0 1.415 1.728h16.059a2.868 2.868 0 0 1 2.868 2.868 2.868 2.868 0 0 1-2.868 2.868H9.68a1.614 1.614 0 0 0-1.415 1.728 1.614 1.614 0 0 0 1.415 1.728h7.994a6.09 6.09 0 0 0 5.397-3.328 6.09 6.09 0 0 0 0-6.606z"/></svg>'
      },
      {
        name: 'Uber Eats',
        url: 'https://www.ubereats.com/store/wokdragon-lenox/JG9YA1eBW3e7_UIakWSRRg',
        btnClass: 'btn-ubereats',
        icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>'
      }
    ]
  },
  chamblee: {
    name: 'Chamblee Location (Walmart Shopping Center)',
    address: '1891 Chamblee Tucker Rd Ste 4-2, Chamblee, GA 30341',
    directionsUrl: 'https://www.google.com/maps/place/1891+Chamblee+Tucker+Rd+Ste+4-2,+Chamblee,+GA+30341,+USA/@33.8885917,-84.3123581,17z/',
    hoursMonSat: '10:00 am - 08:00 pm',
    hoursSun: '12:00 pm - 07:00 pm',
    features: ['Free Spacious Parking', 'Walmart Shopping Center', 'Convenient Curbside & Pickup'],
    mapEmbed: 'https://maps.google.com/maps?q=1891%20Chamblee%20Tucker%20Rd%20Ste%204-2,%20Chamblee,%20GA%2030341&t=&z=15&ie=UTF8&iwloc=&output=embed',
    platforms: [
      {
        name: 'DoorDash',
        url: 'https://www.doordash.com/store/wokdragon-chamblee-31642151/48371165/',
        btnClass: 'btn-doordash',
        icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.071 8.41a6.09 6.09 0 0 0-5.397-3.328H1.615A1.614 1.614 0 0 0 .2 7.424a1.614 1.614 0 0 0 1.415 1.728h16.059a2.868 2.868 0 0 1 2.868 2.868 2.868 2.868 0 0 1-2.868 2.868H9.68a1.614 1.614 0 0 0-1.415 1.728 1.614 1.614 0 0 0 1.415 1.728h7.994a6.09 6.09 0 0 0 5.397-3.328 6.09 6.09 0 0 0 0-6.606z"/></svg>'
      },
      {
        name: 'Uber Eats',
        url: 'https://www.ubereats.com/store/wok-dragon-chamblee-1891-chamblee-tucker-road/efYsOINGVsCq7TD7JLxNog',
        btnClass: 'btn-ubereats',
        icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>'
      },
      {
        name: 'Grubhub',
        url: 'https://www.grubhub.com/restaurant/wokdragon-1891-chamblee-tucker-rd-ste-4-2-chamblee/12688616',
        btnClass: 'btn-grubhub',
        icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/></svg>'
      }
    ]
  }
};

function initLocationSwitcher() {
  const tabs = document.querySelectorAll('.loc-tab-btn');
  const locTitle = document.getElementById('loc-title');
  const locAddress = document.getElementById('loc-address');
  const locDirections = document.getElementById('loc-directions');
  const locFeatures = document.getElementById('loc-features');
  const mapFrame = document.getElementById('loc-map-frame');
  const locDeliveryBtns = document.getElementById('loc-delivery-buttons');

  function renderDeliveryButtons(platforms) {
    if (!locDeliveryBtns || !platforms) return;
    locDeliveryBtns.innerHTML = platforms.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn ${p.btnClass} btn-sm">
        ${p.icon}
        <span>${p.name}</span>
      </a>
    `).join('');
  }

  // Initial render with default active store (lenox)
  renderDeliveryButtons(locationData.lenox.platforms);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const locKey = tab.getAttribute('data-loc');
      const data = locationData[locKey];

      if (!data) return;

      if (locTitle) locTitle.textContent = data.name;
      if (locAddress) locAddress.textContent = data.address;
      if (locDirections) locDirections.href = data.directionsUrl;
      if (mapFrame) mapFrame.src = data.mapEmbed;

      if (locFeatures) {
        locFeatures.innerHTML = data.features.map(f => `
          <div class="loc-detail-row">
            <span class="icon">✓</span>
            <span>${f}</span>
          </div>
        `).join('');
      }

      renderDeliveryButtons(data.platforms);
      trackEvent('location_tab_switch', {
        store_selected: data.name
      });
    });
  });
}

/* ==========================================================================
   Live Business Hours Status (Atlanta Eastern Time)
   ========================================================================== */
function initLiveHours() {
  function updateStatus() {
    const statusPill = document.getElementById('live-status-pill');
    const statusText = document.getElementById('live-status-text');
    if (!statusPill || !statusText) return;

    try {
      // Get current Atlanta time
      const atlantaTimeStr = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
      const atlantaDate = new Date(atlantaTimeStr);
      const day = atlantaDate.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
      const hour = atlantaDate.getHours();
      const min = atlantaDate.getMinutes();
      const currentMinutes = hour * 60 + min;

      let isOpen = false;
      let closingTimeStr = '';
      let openTimeStr = '';

      if (day === 0) { // Sunday: 12:00 PM (720 min) - 7:00 PM (1140 min)
        if (currentMinutes >= 720 && currentMinutes < 1140) {
          isOpen = true;
          closingTimeStr = '7:00 PM';
        } else {
          openTimeStr = currentMinutes < 720 ? '12:00 PM today' : '10:00 AM Mon';
        }
      } else { // Monday - Saturday: 10:00 AM (600 min) - 8:00 PM (1200 min)
        if (currentMinutes >= 600 && currentMinutes < 1200) {
          isOpen = true;
          closingTimeStr = '8:00 PM';
        } else {
          openTimeStr = currentMinutes < 600 ? '10:00 AM today' : (day === 6 ? '12:00 PM Sun' : '10:00 AM tomorrow');
        }
      }

      if (isOpen) {
        statusPill.className = 'live-status-pill open';
        statusText.innerHTML = `<span class="status-indicator-dot"></span> Open Now • Closes ${closingTimeStr}`;
      } else {
        statusPill.className = 'live-status-pill closed';
        statusText.innerHTML = `<span class="status-indicator-dot"></span> Closed • Opens ${openTimeStr}`;
      }
    } catch (e) {
      console.warn('Live hours computation error', e);
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000); // Check every minute
}

/* ==========================================================================
   Contact Us Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successNotice = document.getElementById('contact-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    trackEvent('contact_form_submit', { form_id: 'contact-form' });

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';
    }

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => { formObject[key] = value; });

    // Format customized subject line
    const subjectSelect = form.querySelector('#contact-subject');
    const subjectText = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : 'General Question';
    formObject._subject = `[Wokdragon Web] ${subjectText} from ${formObject.name || 'Customer'}`;
    formObject._template = 'table';
    formObject._captcha = 'false';

    try {
      const response = await fetch("https://formsubmit.co/ajax/wokdragonsupport@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successNotice) successNotice.style.display = 'block';
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          if (successNotice) successNotice.style.display = 'none';
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
          }
        }, 6000);
      } else {
        // Fallback to standard form submission if AJAX needs activation page
        form.submit();
      }
    } catch (err) {
      // Fallback on network or CORS errors
      form.submit();
    }
  });
}


/* ==========================================================================
   Scroll Effects & Active Link Highlighter
   ========================================================================== */
function initScrollEffects() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Header shadow & blur
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav link highlight
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Order Online / Location Delivery Modal
   ========================================================================== */
function initOrderModal() {
  const modal = document.getElementById('order-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.order-modal-close');
  const triggers = document.querySelectorAll('.trigger-order-modal');

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Website Analytics & Custom Event Tracking (Google Analytics 4 / GA4)
   ========================================================================== */
function trackEvent(eventName, params = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
    // Custom DOM event for optional local debugging
    window.dispatchEvent(new CustomEvent('wokdragon_analytics', { detail: { event: eventName, params } }));
    console.debug('[Analytics Event]', eventName, params);
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
}

function initAnalyticsTracking() {
  document.addEventListener('click', (e) => {
    // 1. Track Menu Item Clicks (Which dish gets most clicks)
    const triggerBtn = e.target.closest('.trigger-order-modal');
    if (triggerBtn) {
      const dishCard = triggerBtn.closest('.dish-card');
      const dishName = triggerBtn.getAttribute('data-dish') || (dishCard ? dishCard.querySelector('.dish-title')?.textContent.trim() : null);
      const dishCategory = triggerBtn.getAttribute('data-category') || (dishCard ? dishCard.getAttribute('data-category') : null);

      if (dishName) {
        trackEvent('menu_item_click', {
          dish_name: dishName,
          category: dishCategory || 'General',
          click_source: dishCard ? 'menu_grid' : 'hero_card'
        });
      }
    }

    // 2. Track Delivery Platform Outbound Clicks
    const platformBtn = e.target.closest('.btn-doordash, .btn-ubereats, .btn-grubhub');
    if (platformBtn) {
      const storeCard = platformBtn.closest('.order-store-card');
      const storeName = storeCard ? storeCard.querySelector('h4')?.textContent.trim() : (document.getElementById('loc-title')?.textContent.trim() || 'Active Store');
      const platformName = platformBtn.classList.contains('btn-doordash') ? 'DoorDash' : (platformBtn.classList.contains('btn-ubereats') ? 'Uber Eats' : 'Grubhub');

      trackEvent('delivery_platform_click', {
        store_location: storeName,
        platform_name: platformName,
        outbound_url: platformBtn.href
      });
    }

    // 3. Track Directions Clicks (Google Maps)
    const directionsBtn = e.target.closest('#loc-directions');
    if (directionsBtn) {
      const activeStore = document.getElementById('loc-title')?.textContent.trim() || 'Store Location';
      trackEvent('get_directions_click', {
        store_location: activeStore,
        maps_url: directionsBtn.href
      });
    }
  });
}
