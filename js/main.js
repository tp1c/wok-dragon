/**
 * Wok Dragon - Modern Interactive JavaScript
 * Responsive Navigation, Menu Filtering, Live Hours Status & Location Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMenuFilter();
  initLocationSwitcher();
  initLiveHours();
  initHiringModal();
  initScrollEffects();
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
    phone: '404-239-0088',
    hoursMonSat: '10:00 am - 08:00 pm',
    hoursSun: '12:00 pm - 07:00 pm',
    features: ['Food Court Seating', 'Lenox MARTA Station Adjacent', 'Fast Pickup Available'],
    mapEmbed: 'https://maps.google.com/maps?q=3393%20Peachtree%20Rd%20NE,%20Atlanta,%20GA%2030326&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  chamblee: {
    name: 'Chamblee Location (Walmart Shopping Center)',
    address: '1891 Chamblee Tucker Rd Ste 4-2, Chamblee, GA 30341',
    directionsUrl: 'https://www.google.com/maps/place/1891+Chamblee+Tucker+Rd+Ste+4-2,+Chamblee,+GA+30341,+USA/@33.8885917,-84.3123581,17z/',
    phone: '404-239-0088',
    hoursMonSat: '10:00 am - 08:00 pm',
    hoursSun: '12:00 pm - 07:00 pm',
    features: ['Free Spacious Parking', 'Walmart Shopping Center', 'Convenient Curbside & Pickup'],
    mapEmbed: 'https://maps.google.com/maps?q=1891%20Chamblee%20Tucker%20Rd%20Ste%204-2,%20Chamblee,%20GA%2030341&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
};

function initLocationSwitcher() {
  const tabs = document.querySelectorAll('.loc-tab-btn');
  const locTitle = document.getElementById('loc-title');
  const locAddress = document.getElementById('loc-address');
  const locDirections = document.getElementById('loc-directions');
  const locFeatures = document.getElementById('loc-features');
  const mapFrame = document.getElementById('loc-map-frame');

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
   Hiring / Application Modal
   ========================================================================== */
function initHiringModal() {
  const modal = document.getElementById('hiring-modal');
  const openBtns = document.querySelectorAll('.open-hiring-btn');
  const closeBtn = document.querySelector('.modal-close-btn');
  const form = document.getElementById('hiring-form');
  const successNotice = document.getElementById('hiring-success');

  function openModal() {
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      if (form) form.reset();
      if (successNotice) successNotice.style.display = 'none';
      if (form) form.style.display = 'block';
    }
  }

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successNotice) {
        successNotice.style.display = 'block';
      }
      setTimeout(closeModal, 3000);
    });
  }
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
