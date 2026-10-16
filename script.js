const propertyImagesByType = window.HOMEHUB_IMAGE_MANIFEST.propertyTypes;
const innerViewImages = window.HOMEHUB_IMAGE_MANIFEST.innerView;

const sampleProperties = [
  {
    id: 2, title: "Sunroom on 12th", propertyType: "Apartment", purpose: "Rent",
    location: "Kakkanad, Ernakulam", city: "Ernakulam", district: "Ernakulam", latitude: 10.0159, longitude: 76.3419,
    price: 28500, areaSqft: 1020, area: "1,020 sq. ft.", bedrooms: 2, bathrooms: 2,
    furnishing: "Semi-furnished", amenities: ["Balcony", "Lift", "Natural light"],
    description: "Sample listing: a bright apartment with a balcony, close to everyday neighbourhood conveniences.",
    ownerName: "Demo owner: Asha Rao", ownerContact: "demo.owner@example.test", ownerId: "demo-owner"
  },
  {
    id: 1, title: "The Fern House", propertyType: "Independent House", purpose: "Rent",
    location: "Kowdiar, Thiruvananthapuram", city: "Thiruvananthapuram", district: "Thiruvananthapuram", latitude: 8.5241, longitude: 76.9366,
    price: 42000, areaSqft: 1460, area: "1,460 sq. ft.", bedrooms: 3, bathrooms: 2,
    furnishing: "Semi-furnished", amenities: ["Courtyard", "Garden", "Covered parking"],
    description: "Sample listing: an independent home with a courtyard and garden space.",
    ownerName: "Demo owner: Asha Rao", ownerContact: "demo.owner@example.test", ownerId: "demo-owner"
  },
  {
    id: 7, title: "Palm Courtyard Villa", propertyType: "Villa", purpose: "Buy",
    location: "Panampilly Nagar, Kochi", city: "Kochi", district: "Ernakulam", latitude: 9.9582, longitude: 76.3021,
    price: 6800000, areaSqft: 2100, area: "2,100 sq. ft.", bedrooms: 4, bathrooms: 3,
    furnishing: "Unfurnished", amenities: ["Private pool", "Terrace", "Garden"],
    description: "Sample listing: a spacious villa with an open terrace and poolside area.",
    ownerName: "Demo agent: Ravi Kumar", ownerContact: "demo.agent@example.test", ownerId: "demo-agent"
  },
  {
    id: 8, title: "Greenfield Plot", propertyType: "Plot", purpose: "Buy",
    location: "Mannuthy, Thrissur", city: "Thrissur", district: "Thrissur", latitude: 10.5287, longitude: 76.2763,
    price: 3500000, areaSqft: 1200, area: "1,200 sq. ft.", bedrooms: 0, bathrooms: 0,
    furnishing: "Not applicable", amenities: ["Open land"],
    description: "Sample land listing for demonstration only. Verify land title, zoning, and measurements independently.",
    ownerName: "Demo agent: Ravi Kumar", ownerContact: "demo.agent@example.test", ownerId: "demo-agent"
  },
  {
    id: 3, title: "Little Olive Studio", propertyType: "Studio", purpose: "Rent",
    location: "Calicut Beach, Kozhikode", city: "Kozhikode", district: "Kozhikode", latitude: 11.2588, longitude: 75.7804,
    price: 16500, areaSqft: 520, area: "520 sq. ft.", bedrooms: 1, bathrooms: 1,
    furnishing: "Fully furnished", amenities: ["Kitchenette", "Wardrobe"],
    description: "Sample listing: a compact studio with an efficient layout and a kitchenette.",
    ownerName: "Demo owner: Neel Shah", ownerContact: "demo.owner@example.test", ownerId: "demo-owner"
  },
  {
    id: 4, title: "The Sunday Place", propertyType: "Apartment", purpose: "Rent",
    location: "Vyttila, Ernakulam", city: "Ernakulam", district: "Ernakulam", latitude: 9.9674, longitude: 76.3188,
    price: 32000, areaSqft: 1110, area: "1,110 sq. ft.", bedrooms: 2, bathrooms: 2,
    furnishing: "Unfurnished", amenities: ["Lift", "Balcony", "Security desk"],
    description: "Sample listing: a two-bedroom apartment with a balcony and roomy kitchen.",
    ownerName: "Demo owner: Neel Shah", ownerContact: "demo.owner@example.test", ownerId: "demo-owner"
  },
  {
    id: 5, title: "Mango Tree Cottage", propertyType: "Independent House", purpose: "Rent",
    location: "Edappally, Ernakulam", city: "Ernakulam", district: "Ernakulam", latitude: 10.0261, longitude: 76.3086,
    price: 38000, areaSqft: 1320, area: "1,320 sq. ft.", bedrooms: 3, bathrooms: 2,
    furnishing: "Semi-furnished", amenities: ["Garden", "Porch", "Storage"],
    description: "Sample listing: a family-sized home with a porch and a garden patch.",
    ownerName: "Demo owner: Asha Rao", ownerContact: "demo.owner@example.test", ownerId: "demo-owner"
  },
  {
    id: 6, title: "The Pocket Loft", propertyType: "Studio", purpose: "Rent",
    location: "Kazhakkoottam, Thiruvananthapuram", city: "Thiruvananthapuram", district: "Thiruvananthapuram", latitude: 8.5692, longitude: 76.8721,
    price: 24000, areaSqft: 610, area: "610 sq. ft.", bedrooms: 1, bathrooms: 1,
    furnishing: "Fully furnished", amenities: ["Work nook", "Lift", "Laundry area"],
    description: "Sample listing: an airy compact loft with a furnished living area.",
    ownerName: "Demo agent: Ravi Kumar", ownerContact: "demo.agent@example.test", ownerId: "demo-agent"
  },
  {
    id: 9, title: "Garden View Shared Room", propertyType: "PG & Rental", purpose: "Rent",
    location: "Palarivattom, Ernakulam", city: "Ernakulam", district: "Ernakulam", latitude: 10.0069, longitude: 76.3074,
    price: 12500, areaSqft: 240, area: "Private room · 240 sq. ft.", bedrooms: 1, bathrooms: 1,
    furnishing: "Fully furnished", amenities: ["Shared kitchen", "Wi-Fi (sample)", "Laundry"],
    description: "Sample listing: a private furnished room in a shared rental. Included services are demonstration details only.",
    ownerName: "Demo owner: Neel Shah", ownerContact: "demo.owner@example.test", ownerId: "demo-owner"
  },
  {
    id: 10, title: "Cedar Grove Villa", propertyType: "Villa", purpose: "Rent",
    location: "Kottooli, Kozhikode", city: "Kozhikode", district: "Kozhikode", latitude: 11.2588, longitude: 75.7804,
    price: 58000, areaSqft: 1850, area: "1,850 sq. ft.", bedrooms: 3, bathrooms: 3,
    furnishing: "Semi-furnished", amenities: ["Garden", "Balcony", "Parking"],
    description: "Sample listing: a three-bedroom villa with a small garden and balcony.",
    ownerName: "Demo owner: Asha Rao", ownerContact: "demo.owner@example.test", ownerId: "demo-owner"
  }
];

function assignSamplePropertyImages() {
  const keralaLocations = [
    { locality: "Kakkanad", district: "Ernakulam", latitude: 10.0159, longitude: 76.3419 },
    { locality: "Kowdiar", district: "Thiruvananthapuram", latitude: 8.5241, longitude: 76.9366 },
    { locality: "Panampilly Nagar", district: "Ernakulam", city: "Kochi", latitude: 9.9582, longitude: 76.3021 },
    { locality: "MG Road", district: "Thrissur", latitude: 10.5276, longitude: 76.2144 },
    { locality: "Calicut Beach", district: "Kozhikode", latitude: 11.2588, longitude: 75.7804 },
    { locality: "Vyttila", district: "Ernakulam", city: "Kochi", latitude: 9.9674, longitude: 76.3188 },
    { locality: "Edappally", district: "Ernakulam", city: "Kochi", latitude: 10.0261, longitude: 76.3086 },
    { locality: "Kazhakkoottam", district: "Thiruvananthapuram", latitude: 8.5692, longitude: 76.8721 },
    { locality: "Palarivattom", district: "Ernakulam", city: "Kochi", latitude: 10.0069, longitude: 76.3074 },
    { locality: "Kottooli", district: "Kozhikode", latitude: 11.2588, longitude: 75.7804 }
  ];
  let generatedPropertyIndex = 0;

  for (const [propertyType, images] of Object.entries(propertyImagesByType)) {
    const matchingProperties = sampleProperties.filter((property) => property.propertyType === propertyType);
    if (!matchingProperties.length) continue;

    images.forEach((image, index) => {
      if (index < matchingProperties.length) {
        matchingProperties[index].image = image;
        matchingProperties[index].gallery = [];
        matchingProperties[index].imageAlt = `${propertyType} sample property in ${matchingProperties[index].location}`;
        return;
      }

      const template = matchingProperties[index % matchingProperties.length];
      const place = keralaLocations[generatedPropertyIndex % keralaLocations.length];
      const titleNumber = index + 1;
      const areaSqft = template.areaSqft + (generatedPropertyIndex % 4) * 35;
      const property = {
        ...template,
        id: `asset-${propertyType.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-")}-${titleNumber}`,
        title: `${place.locality} ${propertyType} ${titleNumber}`,
        location: `${place.locality}, ${place.city || place.district}`,
        city: place.city || place.district,
        district: place.district,
        latitude: place.latitude,
        longitude: place.longitude,
        price: Math.round(template.price * (1 + (generatedPropertyIndex % 3) * 0.04)),
        areaSqft,
        area: `${areaSqft.toLocaleString("en-IN")} sq. ft.`,
        amenities: [...template.amenities],
        description: `Illustrative sample ${propertyType.toLocaleLowerCase()} listing in ${place.locality}, ${place.city || place.district}. Verify property details independently.`,
        image,
        gallery: [],
        imageAlt: `${propertyType} sample property in ${place.locality}, ${place.district}`
      };
      sampleProperties.push(property);
      generatedPropertyIndex += 1;
    });
  }
}

assignSamplePropertyImages();

const storageKeys = {
  wishlist: "homehub-demo-wishlist",
  searches: "homehub-demo-saved-searches",
  compare: "homehub-demo-compare",
  enquiries: "homehub-demo-enquiries",
  visits: "homehub-demo-visits",
  ownerListings: "homehub-demo-owner-listings",
  ownerOverrides: "homehub-demo-owner-overrides",
  adminListings: "homehub-demo-admin-listings",
  adminCategories: "homehub-demo-admin-categories",
  adminLocations: "homehub-demo-admin-locations",
  adminUsers: "homehub-demo-admin-users",
  propertyViews: "homehub-demo-property-views"
};

const defaultPropertyTypes = ["Apartment", "Independent House", "Villa", "Plot", "PG & Rental", "Studio"];
const defaultLocations = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki",
  "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
];

function getPropertyTypes() {
  return readStorage(storageKeys.adminCategories, defaultPropertyTypes);
}

function getLocations() {
  return readStorage(storageKeys.adminLocations, defaultLocations);
}

function updateHomeLocationOptions() {
  const options = document.querySelector("#home-location-options");
  if (options) options.innerHTML = getLocations().map((location) => `<option value="${escapeHTML(location)}"></option>`).join("");
}

const pageView = document.querySelector("#page-view");
const homePage = document.querySelector("#home-page");
const propertyGrid = document.querySelector("#property-grid");
const listingCount = document.querySelector("#listing-count");
const emptyState = document.querySelector("#empty-state");
const searchForm = document.querySelector("#search-form");
const locationInput = document.querySelector("#location-search");
const categoryButtons = document.querySelectorAll(".category-card");
const viewAllHomesButton = document.querySelector("#view-all-homes");
const viewAllCategoriesButton = document.querySelector("#view-all-categories");
const propertyDialog = document.querySelector("#property-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogCloseButton = document.querySelector("#dialog-close");
const menuToggle = document.querySelector("#menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");
const featureMenu = document.querySelector(".nav-more");
const headerSearchButton = document.querySelector("#header-search-button");
const wishlistedPropertyIds = new Set(readStorage(storageKeys.wishlist, []));
const backendWishlistIds = new Set();
let currentFilters = { purpose: "Any", location: "", district: "", locality: "", type: "all", minPrice: "", maxPrice: "", minArea: "", maxArea: "", bedrooms: "", furnishing: "", amenity: "", possessionStatus: "", sort: "recommended" };
let pendingListingFilters = null;
let pendingImageData = "";
let activeSellStep = 1;
let sellPhotoData = [];
let sellPhotoProcessing = Promise.resolve();
let lastViewedPropertyId = null;
let chatbotFlow = null;
const API_BASE_URL = window.HomeHubApi.baseUrl;
const apiRequest = window.HomeHubApi.request;
let dashboardData = null;
let adminUserSearch = "";
let apiProperties = [];
let apiPropertiesLoaded = false;
let authenticatedSessionUser = null;
const chatWindow = document.querySelector("#homehub-chat-window");
const chatLauncher = document.querySelector("#chat-launcher");
const chatCloseButton = document.querySelector("#chat-close");
const chatTranscript = document.querySelector("#chat-transcript");
const chatQuickReplies = document.querySelector("#chat-quick-replies");
const chatStepReplies = document.querySelector("#chat-step-replies");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatInputLabel = document.querySelector("#chat-input-label");

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Could not read HomeHub demo data (${key}).`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save HomeHub demo data (${key}).`, error);
    showToast("This browser could not save the demo data. Try a smaller image or free some browser storage.");
    return false;
  }
}

function showFormError(form, message) {
  const output = form.querySelector(".form-message");
  if (output) {
    output.textContent = message;
    output.dataset.kind = "error";
  } else {
    showToast(message, "error");
  }
}

function showToast(message, kind = "success") {
  let toast = document.querySelector("#app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "app-toast";
    toast.setAttribute("role", "status");
    document.body.append(toast);
  }
  toast.dataset.kind = kind;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 4000);
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function getProperties() {
  const ownerListings = readStorage(storageKeys.ownerListings, []);
  const ownerOverrides = readStorage(storageKeys.ownerOverrides, {});
  const overrides = readStorage(storageKeys.adminListings, {});
  const combinedSamples = sampleProperties.map((property) => ({
    ...property,
    ...(ownerOverrides[property.id] || {}),
    ...(overrides[property.id] || {})
  }));
  const samples = apiPropertiesLoaded
    ? combinedSamples.filter((property) => wishlistedPropertyIds.has(String(property.id)))
    : combinedSamples;
  const sampleIds = new Set(sampleProperties.map((property) => String(property.id)));
  return [
    ...samples,
    ...ownerListings.filter((property) => !sampleIds.has(String(property.id))),
    ...apiProperties
  ];
}

function mapApiProperty(record) {
  const locationParts = String(record.location || "").split(",");
  const backendId = record.id;
  const images = Array.isArray(record.photos) ? record.photos : [];
  const propertyType = record.property_type;
  const areaValue = Number(record.area_sqft || record.area_value || 0);
  return {
    id: `server-${backendId}`,
    backendId,
    title: record.title,
    propertyType,
    purpose: record.offer_type === "Rent Out" ? "Rent" : "Buy",
    location: record.location,
    city: locationParts.at(-1)?.trim() || "",
    price: record.price,
    areaSqft: areaValue,
    area: `${areaValue.toLocaleString("en-IN")} sq. ft.`,
    bedrooms: record.bedrooms,
    bathrooms: record.bathrooms,
    furnishing: record.furnishing || "Not specified",
    amenities: [],
    description: record.description || "",
    image: images[0] || getDefaultPropertyImage(propertyType),
    gallery: images.slice(1),
    imageAlt: `Owner-uploaded photo of ${record.title}`,
    status: record.status,
    views: record.views,
    ownerName: "Verified HomeHub account",
    ownerContact: "",
    ownerId: `account-${record.user_id || ""}`
  };
}

function updateBackendWishlist(records) {
  backendWishlistIds.forEach((id) => wishlistedPropertyIds.delete(id));
  backendWishlistIds.clear();
  records.forEach((record) => backendWishlistIds.add(`server-${record.id}`));
  backendWishlistIds.forEach((id) => wishlistedPropertyIds.add(id));
  const localIds = [...wishlistedPropertyIds].filter((id) => !String(id).startsWith("server-"));
  writeStorage(storageKeys.wishlist, localIds);
}

function clearBackendWishlist() {
  backendWishlistIds.forEach((id) => wishlistedPropertyIds.delete(id));
  backendWishlistIds.clear();
}

async function refreshApiWishlist() {
  try {
    const { user } = await apiRequest("/auth/me");
    authenticatedSessionUser = user;
    const guestBackendIds = readStorage(storageKeys.wishlist, [])
      .filter((id) => /^server-\d+$/.test(String(id)));
    for (const id of guestBackendIds) {
      try {
        await apiRequest("/users/me/wishlist", {
          method: "POST",
          body: JSON.stringify({ property_id: Number(String(id).slice("server-".length)), saved: true })
        });
      } catch (error) {
        if (error.status !== 404) throw error;
      }
    }
    const records = await apiRequest("/users/me/wishlist");
    updateBackendWishlist(records);
    return records;
  } catch (error) {
    if (error.status === 401) {
      authenticatedSessionUser = null;
      clearBackendWishlist();
      return [];
    }
    throw error;
  }
}

async function refreshApiProperties() {
  try {
    const records = await apiRequest("/properties");
    apiProperties = records.map(mapApiProperty);
    apiPropertiesLoaded = true;
    if (!homePage.hidden) updateHomeCards();
    else routePage();
  } catch (error) {
    console.warn("Live HomeHub listings could not be loaded; displaying sample listings.", error);
  }
  try {
    await refreshApiWishlist();
    if (window.location.hash === "#/wishlist") renderWishlist(false);
  } catch (error) {
    console.error("Saved properties could not be synchronized with the backend.", error);
  }
}

function getProperty(id) {
  return getProperties().find((property) => String(property.id) === String(id));
}

function getInnerViewImages(property) {
  const propertyType = String(property.propertyType || "").trim().toLocaleLowerCase();
  if (propertyType === "studio" || propertyType === "plot") return [];

  const builtProperties = sampleProperties.filter((item) => {
    const type = item.propertyType.trim().toLocaleLowerCase();
    return type !== "studio" && type !== "plot";
  });
  const propertyIndex = builtProperties.findIndex((item) => String(item.id) === String(property.id));
  const fallbackIndex = Number.isFinite(Number(property.id)) ? Math.abs(Number(property.id)) : 0;
  const firstImageIndex = ((propertyIndex >= 0 ? propertyIndex * 2 : fallbackIndex) % innerViewImages.length);
  return [
    innerViewImages[firstImageIndex],
    innerViewImages[(firstImageIndex + 1) % innerViewImages.length]
  ];
}

function getDefaultPropertyImage(propertyType) {
  return propertyImagesByType[propertyType]?.[0] || propertyImagesByType.Apartment[0];
}

function formatPrice(price) {
  const number = Number(price) || 0;
  return `₹${number.toLocaleString("en-IN")}`;
}

function isValidPhoneNumber(value) {
  const phone = String(value || "").trim();
  const digits = phone.replace(/\D/g, "");
  return /^[-+()\d ]+$/.test(phone) && digits.length >= 7 && digits.length <= 15;
}

function setChatOpen(isOpen) {
  chatWindow.hidden = !isOpen;
  chatWindow.setAttribute("aria-hidden", String(!isOpen));
  chatLauncher.setAttribute("aria-expanded", String(isOpen));
  chatLauncher.setAttribute("aria-label", isOpen ? "Close HomeHub Assistant" : "Open HomeHub Assistant");
  if (isOpen) {
    chatInput.focus();
    chatTranscript.scrollTop = chatTranscript.scrollHeight;
  } else {
    chatLauncher.focus();
  }
}

function addChatMessage(sender, text, action = null) {
  const message = document.createElement("div");
  message.className = `chat-message ${sender === "user" ? "user-message" : "assistant-message"}`;
  const content = document.createElement("p");
  content.textContent = text;
  message.append(content);
  if (action) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-inline-action";
    button.dataset.chatAction = action.value;
    if (action.purpose) button.dataset.chatPurpose = action.purpose;
    if (action.location) button.dataset.chatLocation = action.location;
    button.textContent = action.label;
    message.append(button);
  }
  chatTranscript.append(message);
  chatTranscript.scrollTop = chatTranscript.scrollHeight;
}

function setChatComposer({ type = "text", label = "Your message", placeholder = "Type a message…", enabled = true, required = true } = {}) {
  chatInput.value = "";
  chatInput.removeAttribute("min");
  chatInput.type = type;
  chatInput.disabled = !enabled;
  chatInput.required = required;
  chatInput.placeholder = placeholder;
  chatInputLabel.textContent = label;
  chatForm.querySelector('button[type="submit"]').disabled = !enabled;
}

function showChatIntents() {
  chatbotFlow = null;
  chatStepReplies.replaceChildren();
  chatStepReplies.hidden = true;
  chatQuickReplies.hidden = false;
  setChatComposer();
}

function showChatPrompt(prompt, options = {}) {
  addChatMessage("assistant", prompt);
  chatQuickReplies.hidden = true;
  chatStepReplies.hidden = false;
  chatStepReplies.replaceChildren();
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.dataset.chatAction = "cancel";
  cancel.textContent = "Start over";
  chatStepReplies.append(cancel);
  setChatComposer(options);
}

function addChatChoices(choices, dataAttribute, labelForChoice) {
  chatStepReplies.replaceChildren();
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.dataset.chatAction = "cancel";
  cancel.textContent = "Start over";
  chatStepReplies.append(cancel);
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset[dataAttribute] = String(choice.value);
    button.textContent = choice.label;
    if (labelForChoice) button.setAttribute("aria-label", labelForChoice(choice));
    chatStepReplies.append(button);
  });
}

function startChatIntent(intent) {
  const labels = {
    buy: "Find properties to buy",
    rent: "Find properties to rent",
    ask: "Ask about a property",
    visit: "Schedule a visit",
    enquiry: "Submit an enquiry"
  };
  addChatMessage("user", labels[intent] || "Start over");
  if (intent === "buy" || intent === "rent") {
    chatbotFlow = { kind: "search", step: "location", data: { purpose: intent === "buy" ? "Buy" : "Rent" } };
    showChatPrompt("Which city or neighbourhood would you like to explore?", {
      label: "City or neighbourhood",
      placeholder: "For example, Kakkanad, Ernakulam"
    });
    return;
  }
  if (["ask", "visit", "enquiry"].includes(intent)) {
    chatbotFlow = { kind: intent, step: "property", data: {} };
    const prompt = intent === "visit"
      ? "Which sample property would you like to request a visit for?"
      : intent === "ask"
        ? "Which sample property would you like to ask about?"
        : "Which sample property is your enquiry about?";
    showChatPrompt(prompt, {
      label: "Property name",
      placeholder: "Choose a sample home below",
      enabled: false,
      required: false
    });
    addChatChoices(
      getProperties().map((property) => ({ value: property.id, label: `${property.title} · ${property.city}` })),
      "chatProperty",
      (choice) => `Select ${choice.label}`
    );
    return;
  }
  showChatIntents();
}

function chooseChatProperty(propertyId) {
  const property = getProperty(propertyId);
  if (!property || !chatbotFlow) return;
  chatbotFlow.data.propertyId = property.id;
  chatbotFlow.data.propertyTitle = property.title;
  addChatMessage("user", property.title);

  if (chatbotFlow.kind === "visit") {
    chatbotFlow.step = "date";
    showChatPrompt("What date would you prefer? This is only a request; I can’t check or confirm availability.", {
      type: "date",
      label: "Preferred visit date",
      placeholder: "",
      required: true
    });
    chatInput.min = todayForDateInput();
    return;
  }

  if (chatbotFlow.kind === "ask") {
    const bedroomText = property.bedrooms ? `${property.bedrooms} bedroom(s)` : "bedroom count not applicable";
    addChatMessage(
      "assistant",
      `${property.title} is a sample ${property.propertyType} in ${property.location}, listed at ${formatPrice(property.price)}${property.purpose === "Buy" ? " total" : " per month"}. Its sample details show ${property.area} and ${bedroomText}. Live availability and owner responses are not available here.`
    );
  }
  chatbotFlow.step = "question";
  showChatPrompt(
    chatbotFlow.kind === "ask"
      ? "What would you like to ask about this sample property?"
      : "What would you like to include in your enquiry?",
    { label: "Your question", placeholder: "Type your question" }
  );
}

function advanceChatAfterDate(date) {
  chatbotFlow.data.date = date;
  addChatMessage("user", date);
  chatbotFlow.step = "time";
  showChatPrompt("Which time would you prefer?", { enabled: false, required: false, label: "Preferred time" });
  addChatChoices(
    ["10:00–11:00", "12:00–13:00", "15:00–16:00", "17:00–18:00"].map((time) => ({ value: time, label: time })),
    "chatTime"
  );
}

function advanceChatToContact() {
  chatbotFlow.step = "name";
  showChatPrompt("What name should I attach to this request?", {
    label: "Your name",
    placeholder: "Enter your name"
  });
}

function saveChatRequest() {
  const flow = chatbotFlow;
  if (!flow) return false;
  const property = getProperty(flow.data.propertyId);
  if (!property) {
    addChatMessage("assistant", "I can’t find that sample property now. Please start again and choose a property from the list.");
    showChatIntents();
    return false;
  }

  const createdAt = new Date().toISOString();
  if (flow.kind === "visit") {
    const visits = readStorage(storageKeys.visits, []);
    visits.unshift({
      id: Date.now(),
      propertyId: property.id,
      propertyTitle: property.title,
      location: property.location,
      name: flow.data.name,
      email: flow.data.email,
      phone: flow.data.phone,
      date: flow.data.date,
      time: flow.data.time,
      note: "Visit request submitted through the HomeHub Assistant.",
      createdAt,
      status: "Pending (local demo)",
      source: "chatbot"
    });
    if (!writeStorage(storageKeys.visits, visits)) return false;
    addChatMessage("assistant", "Your visit request has been saved in this browser only. It has not been sent to an owner, and the time is not confirmed.");
  } else {
    const enquiries = readStorage(storageKeys.enquiries, []);
    enquiries.unshift({
      id: Date.now(),
      propertyId: property.id,
      propertyTitle: property.title,
      location: property.location,
      name: flow.data.name,
      email: flow.data.email,
      phone: flow.data.phone,
      message: flow.data.question,
      createdAt,
      status: "Pending (local demo)",
      source: "chatbot"
    });
    if (!writeStorage(storageKeys.enquiries, enquiries)) return false;
    addChatMessage("assistant", "Your enquiry has been saved in this browser only. It has not been sent to the property owner.");
  }
  showChatIntents();
  return true;
}

function handleChatMessage(rawMessage) {
  const value = rawMessage.trim();
  if (!value) return;
  if (!chatbotFlow) {
    addChatMessage("user", value);
    addChatMessage("assistant", "I can help with sample homes, property questions, enquiries, or visit requests. Choose one of the options below to get started.");
    return;
  }

  const { step, data } = chatbotFlow;
  if (step === "location") {
    if (value.length < 2) {
      addChatMessage("assistant", "Please enter a city or neighbourhood with at least two characters.");
      return;
    }
    data.location = value;
    addChatMessage("user", value);
    const filters = { ...defaultListingFilters(), purpose: data.purpose, location: value };
    const matches = filterProperties(filters);
    const summary = matches.length
      ? `I found ${matches.length} matching sample listing(s): ${matches.slice(0, 3).map((property) => `${property.title} in ${property.location} (${formatPrice(property.price)}${property.purpose === "Buy" ? " total" : " / month"})`).join("; ")}. These are sample records, not live availability.`
      : `I couldn’t find a matching sample listing for ${value}. The demo does not have live inventory.`;
    addChatMessage("assistant", summary, {
      label: "Open property results",
      value: "open-search",
      purpose: data.purpose,
      location: data.location
    });
    showChatIntents();
    return;
  }
  if (step === "property") {
    const property = getProperties().find((record) =>
      record.title.toLocaleLowerCase() === value.toLocaleLowerCase()
      || record.location.toLocaleLowerCase() === value.toLocaleLowerCase()
      || String(record.id) === value
    );
    if (!property) {
      addChatMessage("assistant", "Please choose a property from the sample list above.");
      return;
    }
    chooseChatProperty(property.id);
    return;
  }
  if (step === "time") {
    addChatMessage("assistant", "Please select one of the example time slots above.");
    return;
  }
  if (step === "question") {
    if (value.length < 3) {
      addChatMessage("assistant", "Please enter a little more detail for your question.");
      return;
    }
    data.question = value;
    addChatMessage("user", value);
    advanceChatToContact();
    return;
  }
  if (step === "date") {
    const today = new Date();
    const todayValue = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < todayValue) {
      addChatMessage("assistant", "Choose today or a future date for your visit request.");
      return;
    }
    advanceChatAfterDate(value);
    return;
  }
  if (step === "name") {
    if (value.length < 2) {
      addChatMessage("assistant", "Please enter a name with at least two characters.");
      return;
    }
    data.name = value;
    addChatMessage("user", "Thanks, I’ve noted your name.");
    chatbotFlow.step = "email";
    showChatPrompt("What email address can be used for this demo request?", {
      type: "email",
      label: "Email address",
      placeholder: "name@example.com"
    });
    return;
  }
  if (step === "email") {
    if (!chatInput.checkValidity()) {
      chatInput.reportValidity();
      return;
    }
    data.email = value;
    addChatMessage("user", "Email address received.");
    chatbotFlow.step = "phone";
    showChatPrompt("What phone number can be attached to the request?", {
      type: "tel",
      label: "Phone number",
      placeholder: "Include your country code if needed"
    });
    return;
  }
  if (step === "phone") {
    if (!isValidPhoneNumber(value)) {
      addChatMessage("assistant", "Enter a phone number containing 7 to 15 digits.");
      return;
    }
    data.phone = value;
    addChatMessage("user", "Phone number received.");
    saveChatRequest();
  }
}

function todayForDateInput() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function dateLabel(value) {
  if (!value) return "Not selected";
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
}

function routeParts() {
  const hash = window.location.hash;
  if (!hash || hash === "#") return ["home"];
  if (hash.startsWith("#/")) return hash.slice(2).split("/").filter(Boolean);
  return ["home"];
}

function navigate(path) {
  const hash = path.startsWith("/") ? `#${path}` : `#/${path}`;
  if (window.location.hash === hash) routePage();
  else window.location.hash = hash;
}

function makeFiltersFromHome() {
  return {
    purpose: "Rent",
    location: locationInput.value.trim(),
    district: "",
    locality: "",
    type: "all",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    bedrooms: "",
    furnishing: "",
    amenity: "",
    possessionStatus: "",
    sort: "recommended"
  };
}

function defaultListingFilters() {
  return { purpose: "Any", location: "", district: "", locality: "", type: "all", minPrice: "", maxPrice: "", minArea: "", maxArea: "", bedrooms: "", furnishing: "", amenity: "", possessionStatus: "", sort: "recommended" };
}

function filterProperties(filters, records = getProperties()) {
  const location = (filters.location || "").trim().toLocaleLowerCase();
  const district = (filters.district || "").trim().toLocaleLowerCase();
  const locality = (filters.locality || "").trim().toLocaleLowerCase();
  return records.filter((property) => {
    const purposeMatches = !filters.purpose || filters.purpose === "Any" || property.purpose === filters.purpose;
    const locationMatches = !location || `${property.location} ${property.city}`.toLocaleLowerCase().includes(location);
    const districtMatches = !district || `${property.district || ""} ${property.city || ""} ${property.location || ""}`.toLocaleLowerCase().includes(district);
    const localityMatches = !locality || String(property.location || "").toLocaleLowerCase().includes(locality);
    const typeMatches = !filters.type || filters.type === "all"
      || (filters.type === "Residential Plot" ? property.propertyType === "Plot" : property.propertyType === filters.type);
    const priceMatches = (!filters.minPrice || property.price >= Number(filters.minPrice))
      && (!filters.maxPrice || property.price <= Number(filters.maxPrice));
    const areaMatches = (!filters.minArea || property.areaSqft >= Number(filters.minArea))
      && (!filters.maxArea || property.areaSqft <= Number(filters.maxArea));
    const bedroomsMatches = !filters.bedrooms || property.bedrooms >= Number(filters.bedrooms);
    const furnishingMatches = !filters.furnishing || property.furnishing === filters.furnishing;
    const amenityMatches = !filters.amenity || (property.amenities || []).includes(filters.amenity);
    const possessionMatches = !filters.possessionStatus || property.possessionStatus === filters.possessionStatus;
    return purposeMatches && locationMatches && districtMatches && localityMatches && typeMatches && priceMatches
      && areaMatches && bedroomsMatches && furnishingMatches && amenityMatches && possessionMatches;
  }).sort((left, right) => {
    if (filters.sort === "price-asc") return left.price - right.price;
    if (filters.sort === "price-desc") return right.price - left.price;
    if (filters.sort === "area-desc") return right.areaSqft - left.areaSqft;
    return 0;
  });
}

function makePropertyCard(property, options = {}) {
  const saved = wishlistedPropertyIds.has(String(property.id));
  const compared = readStorage(storageKeys.compare, []).map(String).includes(String(property.id));
  const badge = options.showStatus ? property.status || "Sample listing" : property.purpose || "Sample";
  const rooms = [
    property.bedrooms ? `${property.bedrooms} bed` : "Bedrooms N/A",
    property.bathrooms ? `${property.bathrooms} bath` : "Bathrooms N/A",
    property.area
  ].filter(Boolean).join(" · ");
  return `
    <article class="property-card" data-property-card="${escapeHTML(property.id)}">
      <div class="card-image-wrap">
        <img class="card-image" src="${escapeHTML(property.image)}" alt="${escapeHTML(property.imageAlt || property.title)}" loading="lazy">
        <span class="purpose-badge${options.showStatus ? " buy-property-status" : ""}">${escapeHTML(badge)}</span>
        <button class="wishlist-button${saved ? " is-saved" : ""}" type="button" data-action="wishlist" data-id="${escapeHTML(property.id)}" aria-label="${saved ? "Remove" : "Add"} ${escapeHTML(property.title)} ${saved ? "from" : "to"} wishlist" aria-pressed="${saved}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 4.4-8.8 10-8.8 10S3.2 13.2 3.2 8.8a4.6 4.6 0 0 1 8.8-1.7 4.6 4.6 0 0 1 8.8 1.7Z"/></svg>
        </button>
      </div>
      <div class="card-body">
        <p class="card-location"><span aria-hidden="true">⌖</span>${escapeHTML(property.location)}</p>
        <h3 class="card-title">${escapeHTML(property.title)}</h3>
        <p class="listing-type-line">${escapeHTML(property.propertyType)} · ${escapeHTML(property.furnishing || "Furnishing not specified")}</p>
        <div class="card-meta">${escapeHTML(rooms)}</div>
        <div class="card-bottom">
          <p class="card-price">${formatPrice(property.price)}<small>${property.purpose === "Buy" ? ` total${property.backendId ? "" : " · sample"}` : ` / month${property.backendId ? "" : " · sample"}`}</small></p>
          <div class="card-actions">
            <button class="details-button" type="button" data-action="quick-view" data-id="${escapeHTML(property.id)}" aria-label="Quick view ${escapeHTML(property.title)}">Quick view</button>
            <a class="details-button detail-link" href="#/property/${encodeURIComponent(property.id)}">Details ↗</a>
            ${options.contactLink ? `<a class="details-button detail-link" href="#/property/${encodeURIComponent(property.id)}">Contact</a>` : ""}
          </div>
          <button class="compare-toggle${compared ? " is-selected" : ""}" type="button" data-action="compare" data-id="${escapeHTML(property.id)}" aria-pressed="${compared}">${compared ? "✓ Comparing" : "+ Compare"}</button>
        </div>
      </div>
    </article>`;
}

function renderCards(container, records, options = {}) {
  if (!container) return;
  const items = options.limit ? records.slice(0, options.limit) : records;
  container.innerHTML = items.map((property) => makePropertyCard(property, options)).join("");
}

function updateHomeCards(records = getProperties()) {
  renderCards(propertyGrid, records, { limit: 4 });
  listingCount.textContent = `Showing ${Math.min(4, records.length)} of ${records.length} property listings`;
  emptyState.hidden = records.length > 0;
  viewAllHomesButton.innerHTML = 'View all <span aria-hidden="true">→</span>';
}

function renderPageShell(title, intro, body, options = {}) {
  pageView.hidden = false;
  homePage.hidden = true;
  pageView.innerHTML = `
    <div class="app-page-heading">
      <div><p class="eyebrow">${escapeHTML(options.eyebrow || "HomeHub · Frontend demonstration")}</p><h1>${escapeHTML(title)}</h1><p>${escapeHTML(intro)}</p></div>
      <a class="back-link" href="#home">← Home</a>
    </div>
    ${options.showPrototypeWarning === false ? "" : '<p class="demo-banner"><strong>Prototype only:</strong> this page uses sample or locally stored browser data. It is not connected to the API or database.</p>'}
    ${body}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderFilterControls(filters, compact = false) {
  const selected = (value, target) => value === target ? " selected" : "";
  return `
    <form class="filter-form${compact ? " compact-filter" : ""}" id="filter-form">
      <label>Purpose
        <select name="purpose">
          <option value="Any"${selected(filters.purpose, "Any")}>Buy or rent</option>
          <option value="Buy"${selected(filters.purpose, "Buy")}>Buy</option>
          <option value="Sell"${selected(filters.purpose, "Sell")}>Sell</option>
          <option value="Rent"${selected(filters.purpose, "Rent")}>Rent</option>
        </select>
      </label>
      <label>Location
        <input name="location" list="property-location-options" value="${escapeHTML(filters.location)}" placeholder="City or neighbourhood">
        <datalist id="property-location-options">${getLocations().map((location) => `<option value="${escapeHTML(location)}"></option>`).join("")}</datalist>
      </label>
      <label>Property type
        <select name="type">
          <option value="all"${selected(filters.type, "all")}>Any type</option>
          ${getPropertyTypes().map((type) => `<option value="${escapeHTML(type)}"${selected(filters.type, type)}>${escapeHTML(type)}</option>`).join("")}
        </select>
      </label>
      <label>Minimum price (₹)<input name="minPrice" type="number" min="0" value="${escapeHTML(filters.minPrice)}" placeholder="No minimum"></label>
      <label>Maximum price (₹)<input name="maxPrice" type="number" min="0" value="${escapeHTML(filters.maxPrice)}" placeholder="No maximum"></label>
      <label>Minimum area (sq. ft.)<input name="minArea" type="number" min="0" value="${escapeHTML(filters.minArea)}" placeholder="Any size"></label>
      <label>Maximum area (sq. ft.)<input name="maxArea" type="number" min="0" value="${escapeHTML(filters.maxArea)}" placeholder="Any size"></label>
      <label>Bedrooms
        <select name="bedrooms">
          <option value="">Any</option>
          ${[1, 2, 3, 4, 5].map((count) => `<option value="${count}"${selected(String(filters.bedrooms), String(count))}>${count}+ bedrooms</option>`).join("")}
        </select>
      </label>
      <label>Furnishing
        <select name="furnishing">
          <option value="">Any</option>
          ${["Fully furnished", "Semi-furnished", "Unfurnished", "Not applicable"].map((value) => `<option value="${escapeHTML(value)}"${selected(filters.furnishing, value)}>${escapeHTML(value)}</option>`).join("")}
        </select>
      </label>
      <label>Sort by
        <select name="sort">
          <option value="recommended"${selected(filters.sort, "recommended")}>Recommended</option>
          <option value="price-asc"${selected(filters.sort, "price-asc")}>Price: low to high</option>
          <option value="price-desc"${selected(filters.sort, "price-desc")}>Price: high to low</option>
          <option value="area-desc"${selected(filters.sort, "area-desc")}>Largest area first</option>
        </select>
      </label>
      <div class="filter-actions">
        <button class="primary-button" type="submit">Apply filters</button>
        <button class="secondary-button" type="reset" data-action="clear-filters">Clear filters</button>
        <button class="secondary-button" type="button" data-action="save-search">Save this search</button>
      </div>
    </form>`;
}

function readFilters(form) {
  const data = new FormData(form);
  return Object.fromEntries([
    "purpose", "location", "district", "locality", "type", "minPrice", "maxPrice", "minArea", "maxArea",
    "bedrooms", "furnishing", "amenity", "possessionStatus", "sort"
  ].map((key) => [key, String(data.get(key) || (key === "type" ? "all" : ""))]));
}

function renderPropertyImageBrowser(selectedType) {
  const groups = selectedType && selectedType !== "all"
    ? [[selectedType, propertyImagesByType[selectedType] || []]]
    : Object.entries(propertyImagesByType);
  const availableGroups = groups.filter(([, images]) => images.length);

  if (!availableGroups.length) return "";

  return `
    <section class="asset-photo-browser" aria-labelledby="asset-photo-browser-title">
      <div class="asset-photo-browser-heading">
        <div>
          <h2 id="asset-photo-browser-title">Browse property photos</h2>
          <p>These are photos from your local asset folders, not separate property listings.</p>
        </div>
        <span>${availableGroups.reduce((total, [, images]) => total + images.length, 0)} photos</span>
      </div>
      ${availableGroups.map(([type, images]) => `
        <section class="asset-photo-category" aria-labelledby="asset-photo-${escapeHTML(type).replace(/[^a-z0-9]/gi, "-").toLowerCase()}">
          <div class="asset-photo-category-heading">
            <h3 id="asset-photo-${escapeHTML(type).replace(/[^a-z0-9]/gi, "-").toLowerCase()}">${escapeHTML(type)}</h3>
            <span>${images.length} photos</span>
          </div>
          <div class="asset-photo-grid">
            ${images.map((image, index) => `
              <figure class="asset-photo">
                <a href="${escapeHTML(image)}" target="_blank" rel="noopener" aria-label="Open ${escapeHTML(type)} photo ${index + 1} in a new tab">
                  <img src="${escapeHTML(image)}" alt="${escapeHTML(type)} folder photo ${index + 1} of ${images.length}" loading="lazy">
                </a>
                <figcaption>${escapeHTML(image.split("/").pop())}</figcaption>
              </figure>`).join("")}
          </div>
        </section>`).join("")}
    </section>`;
}

function renderListings(filters = {}) {
  const activeFilters = { ...defaultListingFilters(), ...filters };
  currentFilters = activeFilters;
  const results = filterProperties(activeFilters);
  renderPageShell("Explore homes", "Filter live backend listings and clearly labelled sample homes by location, price, size, rooms, type, and furnishing.", `
    <div class="listing-layout">
      <aside class="filter-panel"><h2>Find your fit</h2>${renderFilterControls(activeFilters)}</aside>
      <section class="results-panel" aria-label="Property search results">
        <div class="results-heading"><h2>Property listings</h2><span id="results-count">${results.length} results</span></div>
        <div class="property-grid app-property-grid" id="page-property-grid"></div>
        <p class="empty-state" id="page-empty-state"${results.length ? " hidden" : ""}>No listings match these filters. Try clearing one or more filters.</p>
      </section>
    </div>
    ${activeFilters.type === "all" ? renderPropertyImageBrowser(activeFilters.type) : ""}`,
    { showPrototypeWarning: false, eyebrow: "HomeHub · Live & sample listings" });
  renderCards(document.querySelector("#page-property-grid"), results);
  document.querySelector("#filter-form").addEventListener("submit", (event) => {
    event.preventDefault();
    renderListings(readFilters(event.currentTarget));
  });
}

function renderBuyFilterControls(filters) {
  const selected = (value, target) => value === target ? " selected" : "";
  return `
    <form class="filter-form buy-filter-form" id="buy-filter-form">
      <input type="hidden" name="purpose" value="Buy">
      <label>District
        <select name="district">
          <option value="">Any district</option>
          ${getLocations().map((district) => `<option value="${escapeHTML(district)}"${selected(filters.district, district)}>${escapeHTML(district)}</option>`).join("")}
        </select>
      </label>
      <label>Locality
        <input name="locality" value="${escapeHTML(filters.locality)}" placeholder="City or neighbourhood">
      </label>
      <label>Property type
        <select name="type">
          <option value="all"${selected(filters.type, "all")}>Any type</option>
          ${["Villa", "Apartment", "Independent House", "Residential Plot", "Commercial"].map((type) => `<option value="${escapeHTML(type)}"${selected(filters.type, type)}>${escapeHTML(type)}</option>`).join("")}
        </select>
      </label>
      <label>Minimum price (₹)<input name="minPrice" type="number" min="0" value="${escapeHTML(filters.minPrice)}" placeholder="No minimum"></label>
      <label>Maximum price (₹)<input name="maxPrice" type="number" min="0" value="${escapeHTML(filters.maxPrice)}" placeholder="No maximum"></label>
      <label>Bedrooms / BHK
        <select name="bedrooms">
          <option value="">Any BHK</option>
          <option value="1"${selected(String(filters.bedrooms), "1")}>1 BHK</option>
          <option value="2"${selected(String(filters.bedrooms), "2")}>2 BHK</option>
          <option value="3"${selected(String(filters.bedrooms), "3")}>3 BHK</option>
          <option value="4"${selected(String(filters.bedrooms), "4")}>4+ BHK</option>
        </select>
      </label>
      <label>Possession status
        <select name="possessionStatus">
          <option value="">Any status</option>
          <option value="Ready to Move"${selected(filters.possessionStatus, "Ready to Move")}>Ready to Move</option>
          <option value="Under Construction"${selected(filters.possessionStatus, "Under Construction")}>Under Construction</option>
        </select>
      </label>
      <label>Minimum area (sq. ft.)<input name="minArea" type="number" min="0" value="${escapeHTML(filters.minArea)}" placeholder="No minimum"></label>
      <label>Maximum area (sq. ft.)<input name="maxArea" type="number" min="0" value="${escapeHTML(filters.maxArea)}" placeholder="No maximum"></label>
      <label>Furnishing
        <select name="furnishing">
          <option value="">Any furnishing</option>
          ${["Fully furnished", "Semi-furnished", "Unfurnished", "Not applicable"].map((value) => `<option value="${escapeHTML(value)}"${selected(filters.furnishing, value)}>${escapeHTML(value)}</option>`).join("")}
        </select>
      </label>
      <label>Property features
        <select name="amenity">
          <option value="">Any feature</option>
          ${[...new Set(getProperties().flatMap((property) => property.amenities || []))].sort().map((amenity) => `<option value="${escapeHTML(amenity)}"${selected(filters.amenity, amenity)}>${escapeHTML(amenity)}</option>`).join("")}
        </select>
      </label>
      <label>Sort by
        <select name="sort">
          <option value="recommended"${selected(filters.sort, "recommended")}>Recommended</option>
          <option value="price-asc"${selected(filters.sort, "price-asc")}>Price: low to high</option>
          <option value="price-desc"${selected(filters.sort, "price-desc")}>Price: high to low</option>
          <option value="area-desc"${selected(filters.sort, "area-desc")}>Largest area first</option>
        </select>
      </label>
      <div class="filter-actions">
        <button class="primary-button" type="submit">Apply filters</button>
        <button class="secondary-button" type="button" data-action="clear-buy-filters">Clear filters</button>
        <button class="secondary-button" type="button" data-action="save-search">Save this search</button>
      </div>
    </form>`;
}

function renderBuyPage(filters = {}) {
  const activeFilters = { ...defaultListingFilters(), ...filters, purpose: "Buy" };
  currentFilters = activeFilters;
  const results = filterProperties(activeFilters);
  renderPageShell("Buy properties", "Search homes and land listed for sale using location, price, size, and property features.", `
    <div class="demo-banner">Live listings are loaded from the HomeHub API. Some frontend sample homes may not have possession-status details.</div>
    <div class="listing-layout buy-listing-layout">
      <aside class="filter-panel buy-filter-panel"><h2>Find a property</h2>${renderBuyFilterControls(activeFilters)}</aside>
      <section class="results-panel" aria-label="Properties for sale">
        <div class="results-heading"><h2>Properties for sale</h2><span id="results-count">${results.length} results</span></div>
        <div class="property-grid app-property-grid" id="buy-property-grid"></div>
        <p class="empty-state" id="buy-empty-state"${results.length ? " hidden" : ""}>No properties match these filters. Try changing or clearing a filter.</p>
      </section>
    </div>`, { showPrototypeWarning: false, eyebrow: "HomeHub · Property search" });
  renderCards(document.querySelector("#buy-property-grid"), results, { showStatus: true, contactLink: true });
}

function defaultRentFilters() {
  return {
    purpose: "Rent", district: "", locality: "", type: "all", minPrice: "", maxPrice: "",
    bedrooms: "", furnishing: "", tenantPreference: "", leaseDuration: "", petFriendly: false,
    availability: ""
  };
}

function readRentFilters(form) {
  const data = new FormData(form);
  return {
    ...defaultRentFilters(),
    district: String(data.get("district") || ""),
    locality: String(data.get("locality") || "").trim(),
    type: String(data.get("type") || "all"),
    minPrice: String(data.get("minPrice") || ""),
    maxPrice: String(data.get("maxPrice") || ""),
    bedrooms: String(data.get("bedrooms") || ""),
    furnishing: String(data.get("furnishing") || ""),
    tenantPreference: String(data.get("tenantPreference") || ""),
    leaseDuration: String(data.get("leaseDuration") || ""),
    petFriendly: data.get("petFriendly") === "on",
    availability: String(data.get("availability") || "")
  };
}

function rentalMatchesPreferences(property, filters) {
  if (filters.tenantPreference && !(property.tenantPreferences || []).includes(filters.tenantPreference)) return false;
  if (filters.leaseDuration && property.leaseDuration !== filters.leaseDuration) return false;
  if (filters.petFriendly && property.petFriendly !== true) return false;
  if (filters.availability && property.availability !== filters.availability) return false;
  return true;
}

function renderRentFilterControls(filters) {
  const selected = (value, target) => value === target ? " selected" : "";
  return `
    <form class="filter-form rent-filter-form" id="rent-filter-form">
      <label>District
        <select name="district">
          <option value="">Any district</option>
          ${getLocations().map((district) => `<option value="${escapeHTML(district)}"${selected(filters.district, district)}>${escapeHTML(district)}</option>`).join("")}
        </select>
      </label>
      <label>Locality
        <input name="locality" value="${escapeHTML(filters.locality)}" placeholder="City or neighbourhood">
      </label>
      <label>Property type
        <select name="type">
          <option value="all"${selected(filters.type, "all")}>Any type</option>
          ${["Apartment", "Villa", "Independent House", "Commercial"].map((type) => `<option value="${escapeHTML(type)}"${selected(filters.type, type)}>${escapeHTML(type)}</option>`).join("")}
        </select>
      </label>
      <label>Minimum monthly rent (₹)<input name="minPrice" type="number" min="0" value="${escapeHTML(filters.minPrice)}" placeholder="No minimum"></label>
      <label>Maximum monthly rent (₹)<input name="maxPrice" type="number" min="0" value="${escapeHTML(filters.maxPrice)}" placeholder="No maximum"></label>
      <label>Bedrooms / BHK
        <select name="bedrooms">
          <option value="">Any bedrooms</option>
          ${[1, 2, 3, 4].map((count) => `<option value="${count}"${selected(String(filters.bedrooms), String(count))}>${count}${count === 4 ? "+" : ""} BHK</option>`).join("")}
        </select>
      </label>
      <label>Furnishing
        <select name="furnishing">
          <option value="">Any furnishing</option>
          ${["Fully furnished", "Semi-furnished", "Unfurnished"].map((value) => `<option value="${escapeHTML(value)}"${selected(filters.furnishing, value)}>${escapeHTML(value)}</option>`).join("")}
        </select>
      </label>
      <label>Tenant preference
        <select name="tenantPreference">
          <option value="">Any tenant</option>
          ${["Family", "Bachelors", "Company Lease", "Female", "Male"].map((value) => `<option value="${escapeHTML(value)}"${selected(filters.tenantPreference, value)}>${escapeHTML(value)}</option>`).join("")}
        </select>
      </label>
      <label>Lease duration
        <select name="leaseDuration">
          <option value="">Any duration</option>
          <option value="Short-term"${selected(filters.leaseDuration, "Short-term")}>Short-term</option>
          <option value="Long-term"${selected(filters.leaseDuration, "Long-term")}>Long-term (e.g. 11 months)</option>
        </select>
      </label>
      <label>Availability
        <select name="availability">
          <option value="">Any date</option>
          <option value="immediate"${selected(filters.availability, "immediate")}>Available immediately</option>
          <option value="next-month"${selected(filters.availability, "next-month")}>Available next month</option>
        </select>
      </label>
      <label class="rent-pet-filter"><input name="petFriendly" type="checkbox"${filters.petFriendly ? " checked" : ""}> Pet-friendly only</label>
      <div class="filter-actions rent-filter-actions">
        <button class="primary-button" type="submit">Apply filters</button>
        <button class="secondary-button" type="button" data-action="clear-rent-filters">Clear filters</button>
      </div>
    </form>`;
}

function makeRentalCard(property) {
  const amenities = property.amenities || [];
  const bedrooms = property.bedrooms ? `${property.bedrooms} BHK` : "Bedrooms not specified";
  const saved = wishlistedPropertyIds.has(String(property.id));
  const compared = readStorage(storageKeys.compare, []).map(String).includes(String(property.id));
  return `
    <article class="property-card rental-property-card" data-property-card="${escapeHTML(property.id)}">
      <div class="card-image-wrap">
        <img class="card-image" src="${escapeHTML(property.image)}" alt="${escapeHTML(property.imageAlt || property.title)}" loading="lazy">
        <span class="purpose-badge">${escapeHTML(property.furnishing || "Furnishing not specified")}</span>
        <button class="wishlist-button${saved ? " is-saved" : ""}" type="button" data-action="wishlist" data-id="${escapeHTML(property.id)}" aria-label="${saved ? "Remove" : "Add"} ${escapeHTML(property.title)} ${saved ? "from" : "to"} wishlist" aria-pressed="${saved}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 4.4-8.8 10-8.8 10S3.2 13.2 3.2 8.8a4.6 4.6 0 0 1 8.8-1.7 4.6 4.6 0 0 1 8.8 1.7Z"/></svg>
        </button>
      </div>
      <div class="card-body">
        <p class="card-location"><span aria-hidden="true">⌖</span>${escapeHTML(property.location)}</p>
        <h3 class="card-title">${escapeHTML(property.title)}</h3>
        <p class="listing-type-line">${escapeHTML(property.propertyType)} · ${escapeHTML(bedrooms)} · ${escapeHTML(property.area)}</p>
        <p class="rental-deposit">${property.securityDeposit == null ? "Deposit: Not specified in sample listing" : `Deposit: ${formatPrice(property.securityDeposit)}`}</p>
        <ul class="rental-amenities">${amenities.map((amenity) => `<li>${escapeHTML(amenity)}</li>`).join("") || "<li>Amenities not specified</li>"}</ul>
        <div class="card-bottom">
          <p class="card-price">${formatPrice(property.price)}<small> / month${property.backendId ? "" : " · sample"}</small></p>
          <div class="card-actions">
            <button class="details-button" type="button" data-action="quick-view" data-id="${escapeHTML(property.id)}">Quick view</button>
            <a class="details-button detail-link" href="#/property/${encodeURIComponent(property.id)}">Details ↗</a>
            <a class="details-button detail-link" href="#/property/${encodeURIComponent(property.id)}">Contact</a>
          </div>
          <button class="compare-toggle${compared ? " is-selected" : ""}" type="button" data-action="compare" data-id="${escapeHTML(property.id)}" aria-pressed="${compared}">${compared ? "✓ Comparing" : "+ Compare"}</button>
        </div>
      </div>
    </article>`;
}

function renderRentPage(filters = {}) {
  const activeFilters = { ...defaultRentFilters(), ...filters, purpose: "Rent" };
  const allRentals = getProperties().filter((property) => property.purpose === "Rent");
  const results = filterProperties(activeFilters, allRentals).filter((property) => rentalMatchesPreferences(property, activeFilters));
  renderPageShell("Rental properties", "Find a rental by location, monthly budget, home type, and tenant preferences.", `
    <div class="demo-banner">Live listings are loaded from the HomeHub API. Deposit, tenant, lease, pet, and availability information is shown only when the listing data provides it.</div>
    <div class="listing-layout rent-listing-layout">
      <aside class="filter-panel rent-filter-panel"><h2>Rental search</h2>${renderRentFilterControls(activeFilters)}</aside>
      <section class="results-panel" aria-label="Rental search results">
        <div class="results-heading"><h2>Available rentals</h2><span id="rent-results-count">${results.length} results</span></div>
        <div class="property-grid app-property-grid rent-property-grid" id="rent-property-grid">${results.map(makeRentalCard).join("")}</div>
        <p class="empty-state"${results.length ? " hidden" : ""}>No rentals match these filters. Try clearing a filter or selecting an option for which listing details are available.</p>
      </section>
    </div>`, { showPrototypeWarning: false, eyebrow: "HomeHub · Rental search" });
}

function renderSellPage() {
  activeSellStep = 1;
  sellPhotoData = [];
  sellPhotoProcessing = Promise.resolve();
  renderPageShell("List your property", "Share the property details and contact information required to submit a listing.", `
    <div class="demo-banner">Submitting this form sends listing details and photo data to the HomeHub FastAPI backend and SQLite database. The API must be running at ${API_BASE_URL}.</div>
    <ol class="sell-progress" aria-label="Listing steps">
      ${["Basic info", "Property & location", "Price & conditions", "Photos & media", "Contact details"].map((label, index) => `<li data-sell-progress="${index + 1}" aria-current="${index === 0 ? "step" : "false"}"><span>${index + 1}</span>${label}</li>`).join("")}
    </ol>
    <form id="sell-listing-form" class="form-card stacked-form sell-wizard" novalidate>
      <fieldset data-sell-step="1">
        <legend>Step 1 · Basic info</legend>
        <div class="form-grid">
          <label>Offer type
            <select name="offerType" required><option value="Sell">Sell</option><option value="Rent Out">Rent Out</option></select>
          </label>
          <label>Property type
            <select name="propertyType" required><option value="">Choose a type</option>${["Apartment", "Villa", "Plot", "Commercial"].map((type) => `<option value="${escapeHTML(type)}">${escapeHTML(type)}</option>`).join("")}</select>
          </label>
          <label>Property title<input name="title" required minlength="3" maxlength="120" placeholder="e.g. Sunny 2-bedroom apartment"></label>
        </div>
      </fieldset>
      <fieldset data-sell-step="2" hidden>
        <legend>Step 2 · Property details &amp; location</legend>
        <div class="form-grid">
          <label>District
            <select name="district" required><option value="">Choose a district</option>${getLocations().map((district) => `<option value="${escapeHTML(district)}">${escapeHTML(district)}</option>`).join("")}</select>
          </label>
          <label>City / locality<input name="locality" required maxlength="120" placeholder="e.g. Kakkanad"></label>
          <label>Area<input name="areaValue" type="number" min="1" step="any" required placeholder="Enter property area"></label>
          <label>Area unit<select name="areaUnit"><option value="sq. ft.">Square feet</option><option value="cents">Cents</option></select></label>
          <label>Bedrooms<input name="bedrooms" type="number" min="0" max="30" step="1" value="1" required></label>
          <label>Bathrooms<input name="bathrooms" type="number" min="0" max="30" step="1" value="1" required></label>
          <label>Balconies<input name="balconies" type="number" min="0" max="30" step="1" value="0" required></label>
          <label>Floor number<input name="floorNumber" type="number" min="-5" max="200" step="1" placeholder="Optional"></label>
        </div>
        <label>Property description<textarea name="description" rows="4" maxlength="2000" placeholder="Describe the layout, condition, and notable details"></textarea></label>
      </fieldset>
      <fieldset data-sell-step="3" hidden>
        <legend>Step 3 · Pricing &amp; conditions</legend>
        <label>Expected asking price / monthly rent (₹)<input name="price" type="number" min="1" step="1" required placeholder="Enter amount in rupees"></label>
        <label class="sell-checkbox"><input name="priceNegotiable" type="checkbox"> Price is negotiable</label>
      </fieldset>
      <fieldset data-sell-step="4" hidden>
        <legend>Step 4 · Photos &amp; media</legend>
        <label class="sell-upload-zone" id="sell-upload-zone">
          <input name="photos" type="file" accept="image/*" multiple data-action="sell-photos">
          <strong>Drop property photos here or browse files</strong>
          <span>Up to 5 images; each image must be 1.5 MB or smaller.</span>
        </label>
        <div class="sell-photo-preview-grid" id="sell-photo-previews" aria-live="polite"></div>
      </fieldset>
      <fieldset data-sell-step="5" hidden>
        <legend>Step 5 · Contact details</legend>
        <div class="form-grid">
          <label>Owner name<input name="ownerName" required minlength="2" maxlength="120" autocomplete="name"></label>
          <label>Phone number<input name="phone" type="tel" required minlength="7" maxlength="20" autocomplete="tel"></label>
          <label>WhatsApp number<input name="whatsappNumber" type="tel" maxlength="20" autocomplete="tel"></label>
          <label>Email<input name="email" type="email" required maxlength="254" autocomplete="email"></label>
        </div>
      </fieldset>
      <div class="sell-wizard-actions">
        <button class="secondary-button" type="button" data-action="sell-back-step" hidden>Back</button>
        <button class="primary-button" type="button" data-action="sell-next-step">Continue</button>
        <button class="primary-button" type="submit" data-action="submit-sell-listing" hidden>List Property</button>
      </div>
      <p class="form-message" id="sell-form-message" aria-live="polite"></p>
    </form>`, { showPrototypeWarning: false, eyebrow: "HomeHub · Property submission" });
  updateSellStep();
}

function updateSellStep() {
  const form = document.querySelector("#sell-listing-form");
  if (!form) return;
  form.querySelectorAll("[data-sell-step]").forEach((panel) => {
    panel.hidden = Number(panel.dataset.sellStep) !== activeSellStep;
  });
  form.querySelectorAll("[data-sell-progress]").forEach((item) => {
    const step = Number(item.dataset.sellProgress);
    item.dataset.state = step < activeSellStep ? "complete" : step === activeSellStep ? "current" : "upcoming";
    item.setAttribute("aria-current", step === activeSellStep ? "step" : "false");
  });
  form.querySelector('[data-action="sell-back-step"]').hidden = activeSellStep === 1;
  form.querySelector('[data-action="sell-next-step"]').hidden = activeSellStep === 5;
  form.querySelector('[data-action="submit-sell-listing"]').hidden = activeSellStep !== 5;
}

function validateSellStep() {
  const form = document.querySelector("#sell-listing-form");
  const currentPanel = form.querySelector(`[data-sell-step="${activeSellStep}"]`);
  const invalidField = [...currentPanel.querySelectorAll("input, select, textarea")].find((field) => !field.checkValidity());
  if (invalidField) {
    invalidField.reportValidity();
    return false;
  }
  return true;
}

function readImageAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result)));
    reader.addEventListener("error", () => reject(new Error(`Could not read image ${file.name}.`)));
    reader.readAsDataURL(file);
  });
}

async function addSellPhotos(files) {
  const selectedFiles = [...files];
  if (sellPhotoData.length + selectedFiles.length > 5) {
    showToast("Choose no more than five property photos.", "error");
    return;
  }
  if (selectedFiles.some((file) => !file.type.startsWith("image/"))) {
    showToast("Only image files can be added.", "error");
    return;
  }
  if (selectedFiles.some((file) => file.size > 1500000)) {
    showToast("Each photo must be 1.5 MB or smaller.", "error");
    return;
  }
  try {
    const dataUrls = await Promise.all(selectedFiles.map(readImageAsDataUrl));
    sellPhotoData.push(...dataUrls);
    renderSellPhotoPreviews();
  } catch (error) {
    console.error("Could not prepare property photos for upload.", error);
    showToast(error.message, "error");
  }
}

function renderSellPhotoPreviews() {
  const container = document.querySelector("#sell-photo-previews");
  if (!container) return;
  container.innerHTML = sellPhotoData.map((image, index) => `
    <figure><img src="${image}" alt="Selected property photo ${index + 1}">
      <button class="secondary-button" type="button" data-action="sell-remove-photo" data-id="${index}">Remove</button>
    </figure>`).join("");
}

async function submitSellListing(form) {
  await sellPhotoProcessing;
  const data = new FormData(form);
  const phone = String(data.get("phone")).trim();
  const whatsappNumber = String(data.get("whatsappNumber") || "").trim();
  if (!isValidPhoneNumber(phone) || (whatsappNumber && !isValidPhoneNumber(whatsappNumber))) {
    const message = document.querySelector("#sell-form-message");
    message.textContent = "Enter phone and WhatsApp numbers using 7 to 15 digits.";
    message.dataset.kind = "error";
    return;
  }
  const areaValue = Number(data.get("areaValue"));
  const areaUnit = String(data.get("areaUnit"));
  const areaSqft = areaUnit === "cents" ? areaValue * 435.6 : areaValue;
  const locality = String(data.get("locality")).trim();
  const district = String(data.get("district"));
  const payload = {
    title: String(data.get("title")).trim(),
    property_type: String(data.get("propertyType")),
    location: `${locality}, ${district}`,
    price: Number(data.get("price")),
    bedrooms: Number(data.get("bedrooms")),
    bathrooms: Number(data.get("bathrooms")),
    description: String(data.get("description") || ""),
    offer_type: String(data.get("offerType")),
    area_value: areaValue,
    area_unit: areaUnit,
    area_sqft: areaSqft,
    balconies: Number(data.get("balconies")),
    floor_number: data.get("floorNumber") === "" ? null : Number(data.get("floorNumber")),
    price_negotiable: data.get("priceNegotiable") === "on",
    owner_name: String(data.get("ownerName")).trim(),
    phone,
    whatsapp_number: whatsappNumber || null,
    email: String(data.get("email")).trim(),
    photos: sellPhotoData
  };
  const message = document.querySelector("#sell-form-message");
  const submitButton = form.querySelector('[data-action="submit-sell-listing"]');
  message.textContent = "Submitting the property to the backend…";
  message.dataset.kind = "pending";
  submitButton.disabled = true;
  try {
    const result = await apiRequest("/properties", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    message.textContent = `Property submitted and saved in the database (listing ID ${result.id}).`;
    message.dataset.kind = "success";
    submitButton.textContent = "Listing submitted";
    showToast("Your property listing was submitted to the HomeHub backend.");
  } catch (error) {
    console.error("Property submission failed.", error);
    submitButton.disabled = false;
    message.textContent = error instanceof TypeError
      ? `Could not reach ${API_BASE_URL}. Start the FastAPI server and try again.`
      : `The listing was not saved: ${error.message}`;
    message.dataset.kind = "error";
    showToast("Property submission failed. Check the message below the form.", "error");
  }
}

function renderWishlist(syncWithBackend = true) {
  const saved = getProperties().filter((property) => wishlistedPropertyIds.has(String(property.id)));
  renderPageShell("Wishlist", "Keep the homes you like together. Account listings sync with the backend; sample listings are saved in this browser.", `
    <div class="results-heading"><h2>Saved homes</h2><span>${saved.length} saved</span></div>
    <div class="property-grid app-property-grid" id="page-property-grid"></div>
    <p class="empty-state"${saved.length ? " hidden" : ""}>No saved properties yet. Click the heart icon on any property to save it here!</p>`,
    { showPrototypeWarning: false, eyebrow: "HomeHub · Saved properties" });
  renderCards(document.querySelector("#page-property-grid"), saved);
  if (syncWithBackend && authenticatedSessionUser) {
    refreshApiWishlist().then(() => {
      if (window.location.hash === "#/wishlist") renderWishlist(false);
    }).catch((error) => {
      console.error("Could not load your account wishlist.", error);
      if (window.location.hash === "#/wishlist") {
        showToast(`Could not load your saved properties: ${error.message}`, "error");
      }
    });
  }
}

function renderSavedSearches() {
  const saved = readStorage(storageKeys.searches, []);
  renderPageShell("Saved searches", "Save, reopen, or remove your search criteria using local browser storage.", `
    <div class="saved-search-list">${saved.map((item) => `
      <article class="saved-search-card">
        <div><h2>${escapeHTML(item.name)}</h2><p>${escapeHTML(describeFilters(item.filters))}</p><small>Saved ${escapeHTML(new Date(item.savedAt).toLocaleString())}</small></div>
        <div class="inline-actions"><button class="primary-button" type="button" data-action="open-search" data-id="${escapeHTML(item.id)}">Open search</button><button class="secondary-button" type="button" data-action="delete-search" data-id="${escapeHTML(item.id)}">Delete</button></div>
      </article>`).join("")}</div>
    <p class="empty-state"${saved.length ? " hidden" : ""}>No saved searches yet. Use “Save this search” on the listings page.</p>`);
}

function describeFilters(filters) {
  return [
    filters.purpose && filters.purpose !== "Any" ? filters.purpose : "",
    filters.location,
    filters.district,
    filters.locality,
    filters.type && filters.type !== "all" ? filters.type : "",
    filters.maxPrice ? `Up to ${formatPrice(filters.maxPrice)}` : "",
    filters.minPrice ? `From ${formatPrice(filters.minPrice)}` : "",
    filters.bedrooms ? `${filters.bedrooms}+ bedrooms` : "",
    filters.furnishing,
    filters.amenity,
    filters.possessionStatus
  ].filter(Boolean).join(" · ") || "All sample properties";
}

function renderCompare() {
  const ids = readStorage(storageKeys.compare, []).map(String);
  const records = ids.map(getProperty).filter(Boolean);
  const rows = [
    ["Property", (property) => property.title],
    ["Purpose", (property) => property.purpose],
    ["Price", (property) => `${formatPrice(property.price)}${property.purpose === "Buy" ? " total" : " / month"}`],
    ["Area", (property) => property.area],
    ["Location", (property) => property.location],
    ["Property type", (property) => property.propertyType],
    ["Bedrooms", (property) => property.bedrooms || "Not applicable"],
    ["Bathrooms", (property) => property.bathrooms || "Not applicable"],
    ["Furnishing", (property) => property.furnishing],
    ["Amenities", (property) => property.amenities.join(", ")]
  ];
  renderPageShell("Compare properties", "Select two or three sample homes and compare their details side by side.", `
    <p class="helper-note">Choose listings from the cards using “Compare”. You can compare a maximum of three at once.</p>
    ${records.length >= 2 ? `<div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>Feature</th>${records.map((property) => `<th>${escapeHTML(property.title)}<button class="table-remove" type="button" data-action="remove-compare" data-id="${escapeHTML(property.id)}" aria-label="Remove ${escapeHTML(property.title)}">×</button></th>`).join("")}</tr></thead><tbody>${rows.map(([label, getValue]) => `<tr><th scope="row">${escapeHTML(label)}</th>${records.map((property) => `<td>${escapeHTML(getValue(property))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : `<div class="empty-panel"><h2>Select at least two homes</h2><p>${records.length} of 2 minimum selected. Go to listings and press “Compare” on the homes you want.</p><a class="primary-button" href="#/listings">Browse listings</a></div>`}
    ${records.length >= 3 ? '<p class="helper-note">You have reached the three-property comparison limit.</p>' : ""}`);
}

function renderDetails(id) {
  const property = getProperty(id);
  if (!property) {
    renderPageShell("Property not found", "This property is not in the current sample listings.", '<a class="primary-button" href="#/listings">Browse listings</a>');
    return;
  }
  if (lastViewedPropertyId !== String(id)) {
    const views = readStorage(storageKeys.propertyViews, {});
    views[id] = (Number(views[id]) || 0) + 1;
    writeStorage(storageKeys.propertyViews, views);
    lastViewedPropertyId = String(id);
    if (property.backendId) {
      apiRequest(`/properties/${encodeURIComponent(property.backendId)}`)
        .then((record) => {
          property.views = record.views;
          const count = document.querySelector(`[data-property-card="${CSS.escape(String(property.id))}"] .listing-view-count`);
          if (count) count.textContent = `${record.views} views`;
        })
        .catch((error) => console.error("Could not record this listing view.", error));
    }
  }
  const saved = wishlistedPropertyIds.has(String(property.id));
  const imageList = [property.image, ...(property.gallery || [])];
  const interiorImages = getInnerViewImages(property);
  renderPageShell(property.title, `${property.propertyType} · ${property.location} · ${property.purpose} sample listing`, `
    <div class="detail-page">
      <div class="detail-gallery detail-gallery--listing-photos">${imageList.map((image, index) => `<img src="${escapeHTML(image)}" alt="${escapeHTML(property.title)} sample photo ${index + 1}">`).join("")}</div>
      ${interiorImages.length ? `<section class="detail-interiors" aria-labelledby="detail-interiors-title">
        <div><h2 id="detail-interiors-title">Inside the property</h2><p>Sample interior photos; images may be shared between listings.</p></div>
        <div class="interior-image-grid">${interiorImages.map((image, index) => `<img src="${escapeHTML(image)}" alt="Sample interior view ${index + 1} for ${escapeHTML(property.title)}">`).join("")}</div>
      </section>` : ""}
      <div class="detail-columns">
        <article class="detail-main">
          <div class="detail-title-row"><div><p class="card-location">⌖ ${escapeHTML(property.location)}</p><h2>${escapeHTML(property.title)}</h2></div><button class="secondary-button" type="button" data-action="wishlist" data-id="${escapeHTML(property.id)}">${saved ? "♥ Saved" : "♡ Add to wishlist"}</button></div>
          <p class="detail-price">${formatPrice(property.price)} <small>${property.purpose === "Buy" ? "total · sample price" : "/ month · sample price"}</small></p>
          <p>${escapeHTML(property.description)}</p>
          <dl class="detail-facts">
            <div><dt>Area</dt><dd>${escapeHTML(property.area)}</dd></div>
            <div><dt>Bedrooms</dt><dd>${property.bedrooms || "Not applicable"}</dd></div>
            <div><dt>Bathrooms</dt><dd>${property.bathrooms || "Not applicable"}</dd></div>
            <div><dt>Furnishing</dt><dd>${escapeHTML(property.furnishing)}</dd></div>
            <div><dt>Type</dt><dd>${escapeHTML(property.propertyType)}</dd></div>
            <div><dt>Location</dt><dd>${escapeHTML(property.location)}</dd></div>
          </dl>
          <h3>Amenities (sample details)</h3><ul class="amenity-list">${property.amenities.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
          <div class="detail-actions"><a class="secondary-button" href="#/listings">← Back to listings</a><button class="secondary-button" type="button" data-action="add-compare" data-id="${escapeHTML(property.id)}">Add to compare</button><a class="primary-button" href="#/visits/${encodeURIComponent(property.id)}">Schedule a visit</a></div>
        </article>
        <aside class="contact-panel">
          <h2>Contact (sample)</h2><p>${escapeHTML(property.ownerName)}<br>${escapeHTML(property.ownerContact)}</p>
          <p class="prototype-warning">These are demonstration contact details. No message is sent to this address.</p>
          ${property.backendId ? `<form id="enquiry-form" data-property-id="${escapeHTML(property.backendId)}" class="stacked-form">
            <h3>Send an enquiry</h3>
            <p>Sign in to send an enquiry and keep it in your dashboard.</p>
            <label>Message<textarea name="message" required minlength="8" maxlength="2000" rows="4" placeholder="Ask the owner a question"></textarea></label>
            <button class="primary-button" type="submit">Send enquiry</button>
            <p class="form-message" aria-live="polite"></p>
          </form>` : '<p class="prototype-warning">This sample property is for demonstration only; enquiries are available on approved live listings.</p>'}
        </aside>
      </div>
    </div>`);
}

function renderMap() {
  renderPageShell("Map explorer", "View the Kerala regional map.", `
    <section class="regional-map-card" aria-labelledby="regional-map-title">
      <h2 id="regional-map-title">Kerala Regional Map</h2>
      <img src="assets/Kerala%20Map.jpg" alt="Static map of Kerala and its districts">
      <p>This is a static reference image. It does not show live property locations.</p>
    </section>`);
}

function renderVisits(propertyId = "") {
  const property = propertyId ? getProperty(propertyId) : null;
  const visits = readStorage(storageKeys.visits, []);
  const today = new Date().toISOString().slice(0, 10);
  renderPageShell("Schedule a visit", "Request a sample viewing time. Availability is illustrative and is not checked against a server.", `
    ${property ? `<article class="visit-property-card"><img src="${escapeHTML(property.image)}" alt="${escapeHTML(property.imageAlt)}"><div><h2>${escapeHTML(property.title)}</h2><p>${escapeHTML(property.location)} · ${formatPrice(property.price)}${property.purpose === "Buy" ? " total" : " / month"}</p></div></article>` : `<label class="field-block">Choose a property<select id="visit-property">${getProperties().map((item) => `<option value="${escapeHTML(item.id)}">${escapeHTML(item.title)} — ${escapeHTML(item.location)}</option>`).join("")}</select></label>`}
    <form class="form-card stacked-form" id="visit-form" data-property-id="${escapeHTML(property?.id || "")}">
      <h2>Request a visit</h2>
      <div class="form-grid">
        <label>Your name<input name="name" required minlength="2" autocomplete="name"></label>
        <label>Email<input name="email" type="email" required autocomplete="email"></label>
        <label>Phone<input name="phone" type="tel" required minlength="7" maxlength="20" autocomplete="tel"></label>
        <label>Date<input name="date" type="date" min="${today}" required></label>
        <label>Sample time slot<select name="time" required><option value="">Choose a time</option><option>10:00–11:00</option><option>12:00–13:00</option><option>15:00–16:00</option><option>17:00–18:00</option></select></label>
      </div>
      <label>Note<textarea name="note" rows="3" placeholder="Optional message"></textarea></label>
      <button class="primary-button" type="submit">Save visit request</button><p class="form-message" aria-live="polite"></p>
    </form>
    <h2 class="subsection-title">Your saved requests (${visits.length})</h2><div id="visit-records"></div>
    <p class="helper-note">Requests are stored in this browser only; no real appointment is booked.</p>`);
  renderActivityCards(document.querySelector("#visit-records"), visits, "visit");
}

function renderEnquiries() {
  const enquiries = readStorage(storageKeys.enquiries, []);
  const visits = readStorage(storageKeys.visits, []);
  renderPageShell("My enquiries & visits", "Review requests saved locally from this browser. These are not sent to a property owner.", `
    <div class="dashboard-stats"><div><strong>${enquiries.length}</strong><span>Demo enquiries</span></div><div><strong>${visits.length}</strong><span>Demo visit requests</span></div></div>
    <h2 class="subsection-title">Enquiries</h2><div id="enquiry-records"></div>
    <h2 class="subsection-title">Visit requests</h2><div id="visit-records"></div>`);
  renderActivityCards(document.querySelector("#enquiry-records"), enquiries, "enquiry");
  renderActivityCards(document.querySelector("#visit-records"), visits, "visit");
}

function renderActivityCards(container, records, kind) {
  if (!container) return;
  if (!records.length) {
    container.innerHTML = `<p class="empty-state">No ${kind === "visit" ? "visit requests" : "enquiries"} have been saved in this browser yet.</p>`;
    return;
  }
  container.innerHTML = records.map((record) => {
    const property = getProperty(record.propertyId);
    return `<article class="activity-card">
      <div><h3>${escapeHTML(property?.title || record.propertyTitle || "Property listing")}</h3><p>${escapeHTML(property?.location || record.location || "Location not available")}</p>
      <p>${kind === "visit" ? `Requested ${dateLabel(record.date)} · ${escapeHTML(record.time)}` : `Sent ${escapeHTML(new Date(record.createdAt).toLocaleString())}`}</p>
      ${kind === "enquiry" ? `<p>${escapeHTML(record.message)}</p>` : ""}
      <span class="status-pill">${escapeHTML(record.status || "Pending (demo)")}</span>
      ${container.id === "owner-enquiries" ? `<button class="secondary-button" type="button" data-action="edit-status" data-id="${escapeHTML(record.id)}" data-status="${record.status === "Reviewed (local)" ? "Resolved (local)" : "Reviewed (local)"}">${record.status === "Reviewed (local)" ? "Mark resolved" : "Mark reviewed"}</button>` : ""}</div>
      <a class="secondary-button" href="#/property/${encodeURIComponent(record.propertyId)}">View property</a>
    </article>`;
  }).join("");
}

function renderOwnerDashboard() {
  const records = getProperties().filter((property) => property.ownerId === "demo-owner");
  const enquiries = readStorage(storageKeys.enquiries, []);
  renderPageShell("Owner dashboard", "Demonstration workspace for sample-owner listings. Changes stay in this browser only.", `
    <div class="dashboard-stats"><div><strong>${records.length}</strong><span>Owner demo listings</span></div><div><strong>${records.filter((item) => item.status !== "Rented").length}</strong><span>Marked available</span></div><div><strong>${enquiries.length}</strong><span>Local enquiries</span></div></div>
    <div class="section-heading app-section-heading"><h2>Your demo listings</h2><button class="primary-button" type="button" data-action="new-listing">+ Add listing</button></div>
    <div class="owner-list" id="owner-list">${records.map((property) => `<article class="owner-row">
      <img src="${escapeHTML(property.image)}" alt="${escapeHTML(property.imageAlt)}">
      <div><h3>${escapeHTML(property.title)}</h3><p>${escapeHTML(property.location)} · ${formatPrice(property.price)}</p><span class="status-pill">${escapeHTML(property.status || "Available (demo)")}</span></div>
      <div class="inline-actions"><button class="secondary-button" type="button" data-action="edit-listing" data-id="${escapeHTML(property.id)}">Edit</button><button class="secondary-button" type="button" data-action="toggle-status" data-id="${escapeHTML(property.id)}">${property.status === "Rented" ? "Mark available" : "Mark rented"}</button>${!sampleProperties.some((item) => item.id === property.id) ? `<button class="danger-button" type="button" data-action="delete-listing" data-id="${escapeHTML(property.id)}">Delete</button>` : ""}</div>
    </article>`).join("")}</div>
    <details class="form-card owner-form-details" id="owner-form-details"><summary id="owner-form-summary">Add a sample listing</summary>${ownerListingForm()}</details>
    <h2 class="subsection-title">Enquiries saved in this browser</h2><div id="owner-enquiries"></div>`);
  renderActivityCards(document.querySelector("#owner-enquiries"), enquiries, "enquiry");
}

function ownerListingForm(property = {}) {
  const furnishingOptions = ["Fully furnished", "Semi-furnished", "Unfurnished"];
  return `<form id="owner-listing-form" class="stacked-form">
    <input type="hidden" name="id" value="${escapeHTML(property.id || "")}">
    <div class="form-grid">
      <label>Property name<input name="title" required value="${escapeHTML(property.title || "")}"></label>
      <label>Type<select name="propertyType" required>${getPropertyTypes().map((value) => `<option${property.propertyType === value ? " selected" : ""}>${escapeHTML(value)}</option>`).join("")}</select></label>
      <label>Purpose<select name="purpose"><option${property.purpose !== "Buy" ? " selected" : ""}>Rent</option><option${property.purpose === "Buy" ? " selected" : ""}>Buy</option></select></label>
      <label>Location<input name="location" required value="${escapeHTML(property.location || "")}"></label>
      <label>Price in ₹<input name="price" type="number" min="1" required value="${escapeHTML(property.price || "")}"></label>
      <label>Area in sq. ft.<input name="areaSqft" type="number" min="1" required value="${escapeHTML(property.areaSqft || "")}"></label>
      <label>Bedrooms<input name="bedrooms" type="number" min="0" value="${escapeHTML(property.bedrooms ?? 1)}"></label>
      <label>Bathrooms<input name="bathrooms" type="number" min="0" value="${escapeHTML(property.bathrooms ?? 1)}"></label>
      <label>Furnishing<select name="furnishing">${furnishingOptions.map((value) => `<option${property.furnishing === value ? " selected" : ""}>${value}</option>`).join("")}</select></label>
      <label>Amenities (comma separated)<input name="amenities" value="${escapeHTML((property.amenities || []).join(", "))}"></label>
    </div>
    <label>Description<textarea name="description" rows="4" required>${escapeHTML(property.description || "")}</textarea></label>
    <label>Listing photo<input name="photo" type="file" accept="image/*" data-action="preview-photo"></label>
    <p class="helper-note">Image preview only: a small image may be stored in this browser. No file is uploaded to a server.</p>
    <img class="upload-preview" id="upload-preview" alt="Listing image preview"${property.image ? ` src="${escapeHTML(property.image)}"` : " hidden"}>
    <button class="primary-button" type="submit">Save demo listing</button><p class="form-message" aria-live="polite"></p>
  </form>`;
}

function renderLoginPage(admin = false) {
  renderPageShell(admin ? "Administrator sign in" : "Welcome back", admin
    ? "Sign in with an administrator account configured by the server owner."
    : "Sign in to manage your listings, saved properties, enquiries, and profile.", `
    <form id="login-form" class="form-card stacked-form auth-card" data-admin="${admin}">
      <label>Email<input name="email" type="email" autocomplete="username" required></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required></label>
      <button class="primary-button" type="submit">${admin ? "Sign in to admin" : "Sign in"}</button>
      <p class="form-message" aria-live="polite"></p>
      ${admin ? '<p class="helper-note">Public signup cannot create administrator accounts.</p>' : '<p>New to HomeHub? <a class="inline-link" href="#/signup">Create an account</a>.</p>'}
    </form>`, { showPrototypeWarning: false, eyebrow: "HomeHub · Account setup" });
}

function renderSignupPage() {
  renderPageShell("Create your HomeHub account", "Sign up as a buyer, seller, or tenant. Public signup never grants administrator access.", `
    <form id="signup-form" class="form-card stacked-form auth-card">
      <label>Full name<input name="name" minlength="2" maxlength="120" autocomplete="name" required></label>
      <label>Email<input name="email" type="email" maxlength="254" autocomplete="email" required></label>
      <label>Password<input name="password" type="password" minlength="12" maxlength="128" autocomplete="new-password" required><small>Use at least 12 characters.</small></label>
      <label>Account type<select name="accountType"><option value="buyer">Buyer</option><option value="seller">Seller</option><option value="tenant">Tenant</option></select></label>
      <label>Phone<input name="phone" type="tel" maxlength="20" autocomplete="tel"></label>
      <label>WhatsApp number<input name="whatsappNumber" type="tel" maxlength="20"></label>
      <button class="primary-button" type="submit">Create account</button><p class="form-message" aria-live="polite"></p>
      <p>Already registered? <a class="inline-link" href="#/login">Sign in</a>.</p>
    </form>`, { showPrototypeWarning: false });
}

function renderUserDashboard() {
  renderPageShell("Your HomeHub dashboard", "Manage your listings, saved properties, enquiries, and account settings.", `
    <div class="dashboard-tabs" role="tablist" aria-label="Dashboard sections">
      ${["listings", "saved", "inquiries", "profile"].map((tab, index) => `<button type="button" role="tab" aria-selected="${index === 0}" data-action="dashboard-tab" data-dashboard-tab="${tab}">${["My listings", "Saved properties", "My inquiries", "Profile settings"][index]}</button>`).join("")}
      <button class="secondary-button" type="button" data-action="logout">Sign out</button>
    </div>
    <div id="user-dashboard-content"><p class="helper-note">Loading your account…</p></div>`, { showPrototypeWarning: false, eyebrow: "HomeHub · Your account" });
  apiRequest("/auth/me").then(async ({ user }) => {
    if (window.location.hash !== "#/dashboard") return;
    authenticatedSessionUser = user;
    if (user.role === "admin") {
      navigate("admin");
      return;
    }
    try {
      const [listings, inquiries, savedProperties] = await Promise.all([
        apiRequest("/users/me/listings"),
        apiRequest("/users/me/inquiries"),
        apiRequest("/users/me/wishlist")
      ]);
      if (window.location.hash !== "#/dashboard") return;
      updateBackendWishlist(savedProperties);
      dashboardData = { user, listings, inquiries };
      renderDashboardTab("listings");
    } catch (error) {
      if (window.location.hash === "#/dashboard") {
        document.querySelector("#user-dashboard-content").innerHTML = `<p class="security-notice">${escapeHTML(error.message)}</p>`;
      }
    }
  }).catch(() => {
    if (window.location.hash === "#/dashboard") navigate("login");
  });
}

function renderDashboardTab(tab) {
  const content = document.querySelector("#user-dashboard-content");
  if (!content || !dashboardData) return;
  document.querySelectorAll("[data-dashboard-tab]").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.dashboardTab === tab));
  });
  if (tab === "listings") {
    const listings = dashboardData.listings;
    content.innerHTML = `<section role="tabpanel"><div class="dashboard-topline"><h2>My listings</h2><a class="primary-button" href="#/sell">+ List a property</a></div>
      ${listings.length ? `<div class="user-listing-list">${listings.map((property) => `<article class="owner-row">
        <div><h3>${escapeHTML(property.title)}</h3><p>${escapeHTML(property.location)} · ${formatPrice(property.price)}</p>
          <span class="status-pill">${escapeHTML(property.status)}</span><small>${Number(property.views) || 0} views</small></div>
        <details><summary>Edit listing</summary><form class="stacked-form dashboard-listing-edit" data-id="${property.id}">
          <label>Title<input name="title" value="${escapeHTML(property.title)}" required minlength="3"></label>
          <label>Price in ₹<input name="price" type="number" min="1" value="${property.price}" required></label>
          <label>Description<textarea name="description" rows="3">${escapeHTML(property.description || "")}</textarea></label>
          <button class="secondary-button" type="submit">Save changes</button><p class="form-message" aria-live="polite"></p>
        </form></details>
        ${property.status === "Live" || property.status === "Sold/Rented" ? `<label class="dashboard-status-field">Listing status<select data-listing-status="${property.id}"><option value="Live"${property.status === "Live" ? " selected" : ""}>Live</option><option value="Sold/Rented"${property.status === "Sold/Rented" ? " selected" : ""}>Sold / Rented</option></select></label>` : ""}
        <button class="danger-button" type="button" data-action="user-delete-listing" data-id="${property.id}">Delete</button>
      </article>`).join("")}</div>` : '<p class="empty-state">You have no listings yet. Use “List a property” to submit one for review.</p>'}
    </section>`;
  } else if (tab === "saved") {
    const saved = getProperties().filter((property) => wishlistedPropertyIds.has(String(property.id)));
    content.innerHTML = `<section role="tabpanel"><h2>Saved properties</h2><p class="helper-note">Backend listings are saved to your account. Sample listings stay in this browser.</p>
      <div class="property-grid app-property-grid" id="dashboard-saved-grid"></div>
      <p class="empty-state"${saved.length ? " hidden" : ""}>You have no saved properties in this browser.</p></section>`;
    renderCards(document.querySelector("#dashboard-saved-grid"), saved);
  } else if (tab === "inquiries") {
    const inquiries = dashboardData.inquiries;
    content.innerHTML = `<section role="tabpanel"><h2>My inquiries</h2>${inquiries.length
      ? `<div class="activity-list">${inquiries.map((inquiry) => `<article class="activity-card"><div><h3>${escapeHTML(inquiry.title)}</h3><p>${escapeHTML(inquiry.location)}</p><p>${escapeHTML(inquiry.message)}</p><small>${escapeHTML(inquiry.created_at)}</small></div><span class="status-pill">${escapeHTML(inquiry.status)}</span></article>`).join("")}</div>`
      : '<p class="empty-state">No inquiries have been submitted from this account yet.</p>'}</section>`;
  } else {
    const user = dashboardData.user;
    content.innerHTML = `<section role="tabpanel" class="profile-settings"><h2>Profile settings</h2>
      <form id="profile-form" class="form-card stacked-form">
        <label>Name<input name="name" value="${escapeHTML(user.name)}" minlength="2" required></label>
        <label>Phone<input name="phone" type="tel" value="${escapeHTML(user.phone || "")}"></label>
        <label>WhatsApp<input name="whatsappNumber" type="tel" value="${escapeHTML(user.whatsapp_number || "")}"></label>
        <label>Email<input name="email" type="email" value="${escapeHTML(user.email)}" required></label>
        <button class="primary-button" type="submit">Save profile</button><p class="form-message" aria-live="polite"></p>
      </form>
      <form id="password-form" class="form-card stacked-form">
        <h3>Change password</h3>
        <label>Current password<input name="currentPassword" type="password" autocomplete="current-password" required></label>
        <label>New password<input name="newPassword" type="password" minlength="12" maxlength="128" autocomplete="new-password" required></label>
        <button class="secondary-button" type="submit">Update password</button><p class="form-message" aria-live="polite"></p>
      </form></section>`;
  }
}

async function renderAdmin() {
  try {
    const { user } = await apiRequest("/auth/me");
    if (window.location.hash !== "#/admin") return;
    authenticatedSessionUser = user;
    if (user.role !== "admin") {
      navigate("home");
      return;
    }
    const [overview, listings, users, districts, inquiries] = await Promise.all([
      apiRequest("/admin/overview"),
      apiRequest("/admin/listings"),
      apiRequest(`/admin/users?search=${encodeURIComponent(adminUserSearch)}`),
      apiRequest("/admin/districts"),
      apiRequest("/admin/inquiries")
    ]);
    if (window.location.hash !== "#/admin") return;
    const pending = listings.filter((listing) => listing.status === "Under Review");
    renderPageShell("Admin dashboard", "Review listings and manage accounts. Backend endpoints enforce administrator access.", `
      <div class="dashboard-topline"><span>Signed in as ${escapeHTML(user.email)}</span><button class="secondary-button" type="button" data-action="logout">Sign out</button></div>
      <section class="analytics-grid" aria-label="Platform metrics">
        ${[["Active listings", overview.active_listings], ["Pending approvals", overview.pending_listings], ["Registered users", overview.registered_users], ["Inquiries", overview.inquiries]].map(([label, value]) => `<article class="metric-card"><span>${label}</span><strong>${value}</strong></article>`).join("")}
      </section>
      <section class="admin-section"><h2>Property moderation (${pending.length} pending)</h2>
        ${pending.length ? `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Property</th><th>Owner</th><th>Offer</th><th>Price</th><th>Status</th><th>Action</th></tr></thead><tbody>
          ${pending.map((property) => `<tr><td>${escapeHTML(property.title)}<small>${escapeHTML(property.location)}</small></td><td>${escapeHTML(property.owner_account_name || property.owner_name || "Owner")}<small>${escapeHTML(property.owner_account_email || "")}</small></td><td>${escapeHTML(property.offer_type)}</td><td>${formatPrice(property.price)}</td><td>${escapeHTML(property.status)}</td><td><button class="primary-button" type="button" data-action="admin-moderate" data-id="${property.id}" data-status="Live">Approve</button> <button class="danger-button" type="button" data-action="admin-moderate" data-id="${property.id}" data-status="Rejected">Reject</button></td></tr>`).join("")}
        </tbody></table></div>` : '<p class="empty-state">There are no listings waiting for approval.</p>'}
      </section>
      <section class="admin-section"><h2>User management</h2>
        <form id="admin-user-search" class="inline-form"><label>Search users<input name="search" placeholder="Name or email"></label><button class="secondary-button" type="submit">Search</button></form>
        <div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>User</th><th>Account type</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead><tbody>
          ${users.map((account) => `<tr><td>${escapeHTML(account.name)}<small>${escapeHTML(account.email)}</small></td><td>${escapeHTML(account.account_type)}</td><td>${escapeHTML(account.role)}</td><td>${account.is_active ? "Active" : "Blocked"}</td><td>
            <button class="secondary-button" type="button" data-action="admin-user-update" data-id="${account.id}" data-role="${account.role}" data-active="${!account.is_active}">${account.is_active ? "Block" : "Unblock"}</button>
            <button class="secondary-button" type="button" data-action="admin-user-role" data-id="${account.id}" data-role="${account.role === "admin" ? "user" : "admin"}">Set ${account.role === "admin" ? "user" : "admin"} role</button>
          </td></tr>`).join("")}
        </tbody></table></div>
      </section>
      <section class="admin-section"><h2>District listing distribution</h2>
        ${districts.length ? `<ul class="district-analytics">${districts.map((item) => `<li><span>${escapeHTML(item.district)}</span><strong>${item.listings}</strong></li>`).join("")}</ul>` : '<p class="empty-state">No property district data is available.</p>'}
      </section>
      <section class="admin-section"><h2>Recent inquiries (${inquiries.length})</h2>
        ${inquiries.length ? `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Property</th><th>Account</th><th>Inquiry</th><th>Submitted</th></tr></thead><tbody>${inquiries.map((inquiry) => `<tr><td>${escapeHTML(inquiry.property_title)}</td><td>${escapeHTML(inquiry.user_name)}<small>${escapeHTML(inquiry.user_email)}</small></td><td>${escapeHTML(inquiry.message)}</td><td>${escapeHTML(inquiry.created_at)}</td></tr>`).join("")}</tbody></table></div>` : '<p class="empty-state">There are no inquiries yet.</p>'}
      </section>`, { showPrototypeWarning: false, eyebrow: "HomeHub · Administration" });
  } catch (error) {
    if (window.location.hash !== "#/admin") return;
    if (/log in|session|account/i.test(error.message)) {
      renderPageShell("Access denied", "An active administrator account is required to open this page.", '<a class="primary-button" href="#/admin/login">Administrator sign in</a>', { showPrototypeWarning: false });
      return;
    }
    renderPageShell("Admin dashboard unavailable", error.message, '<a class="primary-button" href="#/admin/login">Administrator sign in</a>');
  }
}

function renderAnalytics() {
  const enquiries = readStorage(storageKeys.enquiries, []);
  const visits = readStorage(storageKeys.visits, []);
  const views = readStorage(storageKeys.propertyViews, {});
  const properties = getProperties();
  const areaViews = properties.reduce((totals, property) => {
    totals[property.city] = (totals[property.city] || 0) + (Number(views[property.id]) || 0);
    return totals;
  }, {});
  const popularAreas = Object.entries(areaViews).sort((left, right) => right[1] - left[1]).slice(0, 5);
  const metrics = [
    ["Property views", Object.values(views).reduce((total, count) => total + Number(count || 0), 0), 72],
    ["Enquiries", enquiries.length, 49],
    ["Visit requests", visits.length, 36],
    ["Active sample listings", properties.filter((item) => item.status !== "Rented").length, 58]
  ];
  const areas = popularAreas.length ? popularAreas : [["No views yet", 0]];
  renderPageShell("Analytics", "Illustrative demonstration figures only. These are not real or live user metrics.", `
    <div class="demo-banner">Views, enquiries, and visit requests are counted from this browser's local demo activity. They are not shared with the backend or other users.</div>
    <div class="analytics-grid">${metrics.map(([label, value, percent]) => `<article class="metric-card"><span>${escapeHTML(label)}</span><strong>${value}</strong><div class="metric-track"><i style="width:${value ? Math.max(percent, 10) : 0}%"></i></div><small>Local demonstration count</small></article>`).join("")}</div>
    <section class="chart-card"><h2>Property views by area</h2><div class="area-chart" role="img" aria-label="Local demonstration property views by area">${areas.map(([area, value]) => `<div class="area-bar"><span>${escapeHTML(area)}</span><div><i style="width:${value ? Math.min(value * 10, 100) : 0}%"></i></div><strong>${value}</strong></div>`).join("")}</div></section>`);
}

function saveSearch(filters) {
  const current = readStorage(storageKeys.searches, []);
  const name = describeFilters(filters);
  current.unshift({ id: Date.now(), name, filters, savedAt: new Date().toISOString() });
  if (writeStorage(storageKeys.searches, current)) showToast("Search saved in this browser.");
}

function toggleWishlist(id) {
  const key = String(id);
  const property = getProperty(key);
  if (property?.backendId && authenticatedSessionUser) {
    const saved = !wishlistedPropertyIds.has(key);
    apiRequest("/users/me/wishlist", {
      method: "POST",
      body: JSON.stringify({ property_id: property.backendId, saved })
    }).then(() => {
      if (saved) {
        backendWishlistIds.add(key);
        wishlistedPropertyIds.add(key);
      } else {
        backendWishlistIds.delete(key);
        wishlistedPropertyIds.delete(key);
      }
      showToast(saved ? "Home saved to your account wishlist." : "Home removed from your account wishlist.");
      routePage();
    }).catch((error) => {
      if (error.status === 401) authenticatedSessionUser = null;
      showToast(`Wishlist was not synchronized: ${error.message}`, "error");
    });
    return;
  }

  const nextWishlist = new Set(wishlistedPropertyIds);
  if (nextWishlist.has(key)) nextWishlist.delete(key);
  else nextWishlist.add(key);
  if (!writeStorage(storageKeys.wishlist, [...nextWishlist])) return;
  wishlistedPropertyIds.clear();
  nextWishlist.forEach((savedId) => wishlistedPropertyIds.add(savedId));
  showToast(wishlistedPropertyIds.has(key) ? "Home saved to your browser wishlist." : "Home removed from your browser wishlist.");
  routePage();
}

function toggleCompare(id) {
  const key = String(id);
  const selected = readStorage(storageKeys.compare, []).map(String);
  if (selected.includes(key)) {
    writeStorage(storageKeys.compare, selected.filter((item) => item !== key));
    showToast("Home removed from comparison.");
  } else if (selected.length >= 3) {
    showToast("You can compare up to three homes. Remove one first.", "error");
    return;
  } else {
    writeStorage(storageKeys.compare, [...selected, key]);
    showToast("Home added to comparison.");
  }
  routePage();
}

function renderQuickView(id) {
  const property = getProperty(id);
  if (!property) return;
  dialogContent.innerHTML = `
    <img class="dialog-image" src="${escapeHTML(property.image)}" alt="${escapeHTML(property.imageAlt)}">
    <div class="dialog-body"><p class="card-location">⌖ ${escapeHTML(property.location)}</p>
      <h2 id="dialog-title">${escapeHTML(property.title)}</h2>
      <p class="dialog-price">${formatPrice(property.price)} <small>${property.purpose === "Buy" ? "total · sample" : "/ month · sample"}</small></p>
      <p>${escapeHTML(property.area)} · ${escapeHTML(property.propertyType)} · ${escapeHTML(property.furnishing)}</p>
      <a class="primary-button" href="#/property/${encodeURIComponent(property.id)}">Full property details</a>
    </div>`;
  propertyDialog.showModal();
}

function routePage() {
  const [route = "home", id] = routeParts();
  if (route === "home") {
    lastViewedPropertyId = null;
    pageView.hidden = true;
    homePage.hidden = false;
    updateHomeLocationOptions();
    updateHomeCards();
    closeMobileNavigation();
    return;
  }
  if (route !== "property") lastViewedPropertyId = null;
  if (route === "listings") {
    const filters = pendingListingFilters || currentFilters;
    pendingListingFilters = null;
    renderListings(filters);
  }
  else if (route === "buy") {
    const filters = pendingListingFilters || { ...defaultListingFilters(), purpose: "Buy" };
    pendingListingFilters = null;
    renderBuyPage(filters);
  }
  else if (route === "rent") renderRentPage();
  else if (route === "sell") renderSellPage();
  else if (route === "login") renderLoginPage(false);
  else if (route === "signup") renderSignupPage();
  else if (route === "dashboard") renderUserDashboard();
  else if (route === "admin" && id === "login") renderLoginPage(true);
  else if (route === "property") renderDetails(id);
  else if (route === "map") renderMap();
  else if (route === "wishlist") renderWishlist();
  else if (route === "saved-searches") renderSavedSearches();
  else if (route === "compare") renderCompare();
  else if (route === "visits") renderVisits(id);
  else if (route === "enquiries") renderEnquiries();
  else if (route === "owner") renderOwnerDashboard();
  else if (route === "admin") void renderAdmin();
  else if (route === "analytics") renderAnalytics();
  else renderPageShell("Page not found", "Choose a page using the navigation.", '<a href="#home" class="primary-button">Return home</a>');
  closeMobileNavigation();
}

function closeMobileNavigation() {
  mainNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  document.querySelector(".nav-more")?.removeAttribute("open");
}

chatLauncher.addEventListener("click", () => setChatOpen(chatWindow.hidden));
chatCloseButton.addEventListener("click", () => setChatOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatWindow.hidden) setChatOpen(false);
});

chatQuickReplies.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-chat-intent]");
  if (choice) startChatIntent(choice.dataset.chatIntent);
});

chatStepReplies.addEventListener("click", (event) => {
  const choice = event.target.closest("button");
  if (!choice) return;
  if (choice.dataset.chatAction === "cancel") {
    addChatMessage("assistant", "No problem. Choose another way I can help.");
    showChatIntents();
  } else if (choice.dataset.chatProperty) {
    chooseChatProperty(choice.dataset.chatProperty);
  } else if (choice.dataset.chatTime && chatbotFlow) {
    chatbotFlow.data.time = choice.dataset.chatTime;
    addChatMessage("user", choice.dataset.chatTime);
    advanceChatToContact();
  }
});

chatTranscript.addEventListener("click", (event) => {
  const action = event.target.closest('[data-chat-action="open-search"]');
  if (!action) return;
  pendingListingFilters = {
    ...defaultListingFilters(),
    purpose: action.dataset.chatPurpose,
    location: action.dataset.chatLocation
  };
  setChatOpen(false);
  navigate("listings");
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!chatInput.checkValidity()) {
    chatInput.reportValidity();
    return;
  }
  handleChatMessage(chatInput.value);
  if (chatInput.type !== "date" || !chatbotFlow || chatbotFlow.step !== "date") chatInput.value = "";
  chatTranscript.scrollTop = chatTranscript.scrollHeight;
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  pendingListingFilters = makeFiltersFromHome();
  navigate("listings");
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pendingListingFilters = { ...defaultListingFilters(), type: button.dataset.category };
    navigate("listings");
  });
});

document.querySelectorAll("[data-purpose-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    pendingListingFilters = {
      ...defaultListingFilters(),
      purpose: link.dataset.purposeLink
    };
    navigate("listings");
  });
});

headerSearchButton.addEventListener("click", () => {
  const focusSearch = () => {
    document.querySelector(".search-section").scrollIntoView({ behavior: "smooth", block: "center" });
    locationInput.focus({ preventScroll: true });
  };
  if (homePage.hidden) {
    window.location.hash = "#home";
    window.setTimeout(focusSearch, 100);
  } else {
    focusSearch();
  }
});

viewAllCategoriesButton.addEventListener("click", () => {
  pendingListingFilters = defaultListingFilters();
  navigate("listings");
});
viewAllHomesButton.addEventListener("click", () => {
  pendingListingFilters = defaultListingFilters();
  navigate("listings");
});
dialogCloseButton.addEventListener("click", () => propertyDialog.close());
propertyDialog.addEventListener("click", (event) => {
  if (event.target === propertyDialog) propertyDialog.close();
});
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menuToggle.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
  mainNavigation.classList.toggle("is-open", !open);
  featureMenu.open = !open;
});
mainNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileNavigation();
});
window.addEventListener("hashchange", routePage);
window.addEventListener("storage", (event) => {
  if (event.key !== storageKeys.wishlist) return;
  wishlistedPropertyIds.clear();
  readStorage(storageKeys.wishlist, []).forEach((id) => wishlistedPropertyIds.add(String(id)));
  const [route = "home"] = routeParts();
  if (["home", "listings", "buy", "rent", "wishlist"].includes(route)) routePage();
});

document.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const { action, id } = actionButton.dataset;

  if (action === "logout") {
    apiRequest("/auth/logout", { method: "POST" })
      .then(() => {
        dashboardData = null;
        authenticatedSessionUser = null;
        clearBackendWishlist();
        wishlistedPropertyIds.clear();
        readStorage(storageKeys.wishlist, []).forEach((savedId) => wishlistedPropertyIds.add(String(savedId)));
        navigate("home");
        showToast("You have signed out.");
      })
      .catch((error) => {
        console.error("Could not clear the server session.", error);
        dashboardData = null;
        navigate("home");
        showToast(`Could not confirm sign out: ${error.message}`, "error");
      });
  } else if (action === "wishlist") toggleWishlist(id);
  else if (action === "quick-view") renderQuickView(id);
  else if (action === "compare" || action === "add-compare") toggleCompare(id);
  else if (action === "remove-compare") toggleCompare(id);
  else if (action === "save-search") {
    const form = actionButton.closest("#filter-form, #buy-filter-form");
    if (form) saveSearch(readFilters(form));
  } else if (action === "clear-buy-filters") {
    renderBuyPage({ ...defaultListingFilters(), purpose: "Buy" });
  } else if (action === "clear-rent-filters") {
    renderRentPage();
  } else if (action === "sell-next-step") {
    if (validateSellStep()) {
      activeSellStep = Math.min(activeSellStep + 1, 5);
      updateSellStep();
    }
  } else if (action === "sell-back-step") {
    activeSellStep = Math.max(activeSellStep - 1, 1);
    updateSellStep();
  } else if (action === "sell-remove-photo") {
    sellPhotoData.splice(Number(id), 1);
    renderSellPhotoPreviews();
  } else if (action === "dashboard-tab") {
    renderDashboardTab(actionButton.dataset.dashboardTab);
  } else if (action === "user-delete-listing") {
    if (!window.confirm("Delete this property listing? This cannot be undone.")) return;
    apiRequest(`/users/me/listings/${encodeURIComponent(id)}`, { method: "DELETE" })
      .then(() => {
        dashboardData.listings = dashboardData.listings.filter((property) => String(property.id) !== String(id));
        renderDashboardTab("listings");
        showToast("Listing deleted.");
      })
      .catch((error) => showToast(error.message, "error"));
  } else if (action === "admin-moderate") {
    apiRequest(`/admin/listings/${encodeURIComponent(id)}/moderation`, {
      method: "PATCH",
      body: JSON.stringify({ status: actionButton.dataset.status })
    }).then(() => {
      showToast(actionButton.dataset.status === "Live" ? "Listing approved." : "Listing rejected.");
      void renderAdmin();
    }).catch((error) => showToast(error.message, "error"));
  } else if (action === "admin-user-update" || action === "admin-user-role") {
    const current = actionButton.closest("tr");
    const role = action === "admin-user-role" ? actionButton.dataset.role : current.querySelector('[data-action="admin-user-role"]').dataset.role;
    const isActive = action === "admin-user-update" ? actionButton.dataset.active === "true" : current.querySelector('[data-action="admin-user-update"]').dataset.active !== "true";
    apiRequest(`/admin/users/${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: JSON.stringify({ role, is_active: isActive })
    }).then(() => {
      showToast("User account updated.");
      void renderAdmin();
    }).catch((error) => showToast(error.message, "error"));
  } else if (action === "open-search") {
    const search = readStorage(storageKeys.searches, []).find((item) => String(item.id) === String(id));
    if (search) {
      pendingListingFilters = search.filters;
      navigate(search.filters.purpose === "Buy" ? "buy" : "listings");
    }
  } else if (action === "delete-search") {
    writeStorage(storageKeys.searches, readStorage(storageKeys.searches, []).filter((item) => String(item.id) !== String(id)));
    renderSavedSearches();
  } else if (action === "new-listing") {
    const formDetails = document.querySelector("#owner-form-details");
    formDetails.open = true;
    document.querySelector("#owner-form-summary").textContent = "Add a sample listing";
    document.querySelector("#owner-listing-form").reset();
    document.querySelector("#owner-listing-form [name=id]").value = "";
    pendingImageData = "";
    formDetails.scrollIntoView({ behavior: "smooth" });
  } else if (action === "edit-listing") {
    const property = getProperty(id);
    if (!property) return;
    const details = document.querySelector("#owner-form-details");
    details.open = true;
    document.querySelector("#owner-form-summary").textContent = `Edit ${property.title}`;
    details.querySelector("form").outerHTML = ownerListingForm(property);
    details.scrollIntoView({ behavior: "smooth" });
  } else if (action === "toggle-status") {
    const ownerListings = readStorage(storageKeys.ownerListings, []);
    const ownerOverrides = readStorage(storageKeys.ownerOverrides, {});
    if (ownerListings.some((item) => String(item.id) === String(id))) {
      const listing = ownerListings.find((item) => String(item.id) === String(id));
      listing.status = listing.status === "Rented" ? "Available" : "Rented";
      writeStorage(storageKeys.ownerListings, ownerListings);
    } else {
      ownerOverrides[id] = { ...(ownerOverrides[id] || {}), status: ownerOverrides[id]?.status === "Rented" ? "Available" : "Rented" };
      writeStorage(storageKeys.ownerOverrides, ownerOverrides);
    }
    renderOwnerDashboard();
  } else if (action === "delete-listing") {
    const records = readStorage(storageKeys.ownerListings, []).filter((item) => String(item.id) !== String(id));
    writeStorage(storageKeys.ownerListings, records);
    renderOwnerDashboard();
    showToast("Local demo listing removed.");
  } else if (action === "clear-filters") {
    window.setTimeout(() => renderListings(), 0);
  } else if (action === "edit-status") {
    const enquiries = readStorage(storageKeys.enquiries, []);
    const record = enquiries.find((item) => String(item.id) === String(id));
    if (record) {
      record.status = actionButton.dataset.status;
      writeStorage(storageKeys.enquiries, enquiries);
      renderOwnerDashboard();
    }
  }
});

document.addEventListener("change", (event) => {
  const input = event.target;
  if (input.matches("[data-listing-status]")) {
    apiRequest(`/users/me/listings/${encodeURIComponent(input.dataset.listingStatus)}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: input.value })
    }).then((updated) => {
      dashboardData.listings = dashboardData.listings.map((listing) => String(listing.id) === String(updated.id) ? updated : listing);
      showToast("Listing status updated.");
      renderDashboardTab("listings");
    }).catch((error) => showToast(error.message, "error"));
    return;
  }
  if (input.matches('[data-action="sell-photos"]')) {
    if (input.files?.length) sellPhotoProcessing = addSellPhotos(input.files);
    input.value = "";
    return;
  }
  if (input.matches('[data-action="preview-photo"]')) {
    const file = input.files?.[0];
    const preview = document.querySelector("#upload-preview");
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Choose an image file.", "error");
      input.value = "";
      return;
    }
    if (file.size > 1500000) {
      showToast("For browser storage, choose an image smaller than 1.5 MB.", "error");
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      pendingImageData = String(reader.result);
      preview.src = pendingImageData;
      preview.hidden = false;
    });
    reader.addEventListener("error", () => showToast("The image preview could not be read.", "error"));
    reader.readAsDataURL(file);
  }
});

document.addEventListener("dragover", (event) => {
  if (event.target.closest("#sell-upload-zone")) event.preventDefault();
});

document.addEventListener("drop", (event) => {
  if (!event.target.closest("#sell-upload-zone")) return;
  event.preventDefault();
  if (event.dataTransfer?.files.length) sellPhotoProcessing = addSellPhotos(event.dataTransfer.files);
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  const formId = form.getAttribute("id");
  if (formId === "login-form") {
    event.preventDefault();
    const data = new FormData(form);
    const admin = form.dataset.admin === "true";
    const endpoint = admin ? "/auth/admin/login" : "/auth/login";
    apiRequest(endpoint, {
      method: "POST",
      body: JSON.stringify({ email: data.get("email"), password: data.get("password") })
    }).then(async ({ user }) => {
      authenticatedSessionUser = user;
      try {
        await refreshApiWishlist();
      } catch (error) {
        console.error("Could not synchronize saved properties after sign in.", error);
        showToast(`Signed in, but saved properties could not be loaded: ${error.message}`, "error");
      }
      showToast("Signed in successfully.");
      navigate(admin && user.role === "admin" ? "admin" : "dashboard");
    }).catch((error) => showFormError(form, error.message));
    return;
  }
  if (formId === "signup-form") {
    event.preventDefault();
    const data = new FormData(form);
    apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        account_type: data.get("accountType"),
        phone: data.get("phone") || null,
        whatsapp_number: data.get("whatsappNumber") || null
      })
    }).then(async ({ user }) => {
      authenticatedSessionUser = user;
      try {
        await refreshApiWishlist();
      } catch (error) {
        console.error("Could not load saved properties after account creation.", error);
      }
      showToast("Account created.");
      navigate("dashboard");
    }).catch((error) => showFormError(form, error.message));
    return;
  }
  if (formId === "profile-form") {
    event.preventDefault();
    const data = new FormData(form);
    apiRequest("/users/me", {
      method: "PATCH",
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone") || null,
        whatsapp_number: data.get("whatsappNumber") || null
      })
    }).then(({ user }) => {
      dashboardData.user = user;
      showToast("Profile updated.");
      renderDashboardTab("profile");
    }).catch((error) => showFormError(form, error.message));
    return;
  }
  if (formId === "password-form") {
    event.preventDefault();
    const data = new FormData(form);
    apiRequest("/users/me/password", {
      method: "POST",
      body: JSON.stringify({
        current_password: data.get("currentPassword"),
        new_password: data.get("newPassword")
      })
    }).then((result) => {
      showToast(result.message);
      dashboardData = null;
      navigate("login");
    }).catch((error) => showFormError(form, error.message));
    return;
  }
  if (form.matches(".dashboard-listing-edit")) {
    event.preventDefault();
    const data = new FormData(form);
    const propertyId = form.dataset.id;
    apiRequest(`/users/me/listings/${encodeURIComponent(propertyId)}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: data.get("title"),
        price: Number(data.get("price")),
        description: data.get("description")
      })
    }).then((updated) => {
      dashboardData.listings = dashboardData.listings.map((listing) => String(listing.id) === String(updated.id) ? updated : listing);
      renderDashboardTab("listings");
      showToast("Listing updated.");
    }).catch((error) => showFormError(form, error.message));
    return;
  }
  if (formId === "admin-user-search") {
    event.preventDefault();
    adminUserSearch = String(new FormData(form).get("search") || "").trim();
    void renderAdmin();
    return;
  }
  if (formId === "rent-filter-form") {
    event.preventDefault();
    renderRentPage(readRentFilters(form));
    return;
  }
  if (formId === "sell-listing-form") {
    event.preventDefault();
    if (!validateSellStep()) return;
    void submitSellListing(form);
    return;
  }
  if (formId === "buy-filter-form") {
    event.preventDefault();
    renderBuyPage(readFilters(form));
    return;
  }
  if (formId === "filter-form") {
    event.preventDefault();
    renderListings(readFilters(form));
    return;
  }
  if (formId === "enquiry-form") {
    event.preventDefault();
    const data = new FormData(form);
    apiRequest("/inquiries", {
      method: "POST",
      body: JSON.stringify({
        property_id: Number(form.dataset.propertyId),
        message: String(data.get("message")).trim()
      })
    }).then(() => {
      showToast("Your inquiry has been sent.");
      navigate("dashboard");
      window.setTimeout(() => {
        if (dashboardData) renderDashboardTab("inquiries");
      }, 250);
    }).catch((error) => {
      if (error.status === 401) {
        sessionStorage.setItem("homehub-return-after-login", "dashboard");
        navigate("login");
      } else {
        showFormError(form, error.message);
      }
    });
    return;
  }
  if (formId === "visit-form") {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (!isValidPhoneNumber(data.get("phone"))) {
      showToast("Enter a phone number with 7 to 15 digits.", "error");
      return;
    }
    const propertyId = form.dataset.propertyId || document.querySelector("#visit-property").value;
    const property = getProperty(propertyId);
    const date = String(data.get("date"));
    if (date < new Date().toISOString().slice(0, 10)) {
      showToast("Choose today or a future date.", "error");
      return;
    }
    const visits = readStorage(storageKeys.visits, []);
    visits.unshift({
      id: Date.now(), propertyId: property.id, propertyTitle: property.title, location: property.location,
      name: data.get("name"), email: data.get("email"), phone: data.get("phone"),
      date, time: data.get("time"), note: data.get("note"), status: "Pending (local demo)"
    });
    if (writeStorage(storageKeys.visits, visits)) {
      showToast("Visit request saved locally. No appointment has been booked.");
      navigate("enquiries");
    }
    return;
  }
  if (formId === "owner-listing-form") {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const id = data.get("id") ? Number(data.get("id")) : Date.now();
    const old = getProperty(id);
    const areaSqft = Number(data.get("areaSqft"));
    const listing = {
      id, title: data.get("title"), propertyType: data.get("propertyType"), purpose: data.get("purpose"),
      location: data.get("location"), city: data.get("location").split(",").pop().trim(),
      price: Number(data.get("price")), areaSqft, area: `${areaSqft.toLocaleString("en-IN")} sq. ft.`,
      bedrooms: Number(data.get("bedrooms")), bathrooms: Number(data.get("bathrooms")),
      furnishing: data.get("furnishing"), amenities: String(data.get("amenities")).split(",").map((value) => value.trim()).filter(Boolean),
      description: data.get("description"), image: pendingImageData || old?.image || getDefaultPropertyImage(data.get("propertyType")),
      imageAlt: `Sample image for ${data.get("title")}`, ownerName: "Demo owner (local)", ownerContact: "demo.owner@example.test",
      ownerId: "demo-owner", status: old?.status || "Available (demo)", latitude: old?.latitude || 12.9716, longitude: old?.longitude || 77.5946
    };
    const ownerListings = readStorage(storageKeys.ownerListings, []);
    const isSampleListing = sampleProperties.some((item) => String(item.id) === String(id));
    const existingIndex = ownerListings.findIndex((item) => String(item.id) === String(id));
    let saved;
    if (isSampleListing) {
      const overrides = readStorage(storageKeys.ownerOverrides, {});
      overrides[id] = listing;
      saved = writeStorage(storageKeys.ownerOverrides, overrides);
    } else {
      if (existingIndex === -1) ownerListings.push(listing);
      else ownerListings[existingIndex] = listing;
      saved = writeStorage(storageKeys.ownerListings, ownerListings);
    }
    if (saved) {
      pendingImageData = "";
      showToast("Demo listing saved in this browser only.");
      renderOwnerDashboard();
    }
    return;
  }
});

renderCards(propertyGrid, getProperties().slice(0, 4));
listingCount.textContent = `Showing 4 of ${getProperties().length} sample listings`;
routePage();
void refreshApiProperties();
