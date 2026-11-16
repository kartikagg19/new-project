export const BUSINESS = {
    name: "Angel Empire Salon & Academy",
    hindiName: "एंजेल एम्पायर सैलून & एकेडमी",
    phoneDisplay: "+91 92118 92610",
    phoneRaw: "919211892610",
    instagram: "https://www.instagram.com/angeltheluxurysalon",
    instagramHandle: "@angeltheluxurysalon",
    address: "Arya Samaj Rd, near Grover Sweets, Uttam Nagar East, Uttam Nagar, Delhi, 110059",
    plusCode: "J3C5+8W Delhi",
    hours: "Open daily · Closes 9 PM",
    rating: "4.7",
    reviewCount: "126",
    mapLink:
        "https://www.google.com/maps/search/?api=1&query=Angel+Empire+Salon+and+Academy+Arya+Samaj+Rd+Uttam+Nagar+East+Delhi+110059",
    mapDirections:
        "https://www.google.com/maps/dir/?api=1&destination=Angel+Empire+Salon+and+Academy+Arya+Samaj+Rd+Uttam+Nagar+East+Delhi+110059",
    mapEmbed:
        "https://www.google.com/maps?q=Angel+Empire+Salon+and+Academy,+Arya+Samaj+Rd,+Uttam+Nagar+East,+Delhi+110059&output=embed",
    badges: ["Women-owned", "LGBTQ+ friendly", "Unisex salon"],
};

export const IMAGES = {
    reception: { src: "/images/salon-1.webp", title: "The Reception", caption: "Curved gold reception desk" },
    studio: { src: "/images/salon-2.webp", title: "The Gold Studio", caption: "Daylight styling studio with arched mirrors" },
    hall: { src: "/images/salon-3.webp", title: "The Styling Hall", caption: "Arched mirrors & gold-trimmed styling stations" },
    lounge: { src: "/images/salon-4.webp", title: "The Blush Lounge", caption: "Flower-ring product wall & velvet lounge" },
    pedicure: { src: "/images/salon-5.webp", title: "The Pedicure Throne", caption: "Massaging pedicure thrones under the ring chandelier" },
    nailbar: { src: "/images/salon-6.webp", title: "The Nail Studio", caption: "Arched nail bar & polish showcase" },
};

export const VIDEOS = [
    {
        id: "video-1",
        title: "Studio Tour & Arched Stations",
        duration: "0:21",
        src: "/videos/video-1.mp4",
        poster: "/videos/posters/video-1.webp",
        tag: "Atmosphere",
        desc: "Walkthrough of our daylight styling studio with warm wave ceiling and gold stations.",
    },
    {
        id: "video-2",
        title: "Hair Transformation & Artistry",
        duration: "0:25",
        src: "/videos/video-2.mp4",
        poster: "/videos/posters/video-2.webp",
        tag: "Hair Artistry",
        desc: "Signature hair styling, smoothing and texture refinement by our senior artists.",
    },
    {
        id: "video-3",
        title: "The Luxury Salon Experience",
        duration: "0:28",
        src: "/videos/video-3.mp4",
        poster: "/videos/posters/video-3.webp",
        tag: "Rituals",
        desc: "Bespoke beauty rituals crafted for ultimate relaxation and glow.",
    },
    {
        id: "video-4",
        title: "The Amber Glow & Fluted Desk",
        duration: "0:08",
        src: "/videos/video-4.mp4",
        poster: "/videos/posters/video-4.webp",
        tag: "Interior",
        desc: "Golden ambient lighting, fluted curved reception and calm interiors.",
    },
    {
        id: "video-5",
        title: "Hair Care & Finishing Blowout",
        duration: "0:19",
        src: "/videos/video-5.mp4",
        poster: "/videos/posters/video-5.webp",
        tag: "Hair Care",
        desc: "Professional hair chemical care, blowout and silky gloss finish.",
    },
];

export const REVIEWS = [
    {
        name: "Lia Goyal",
        meta: "9 months ago · Google",
        text: "I had an absolutely amazing experience. I opted for Brazilian therapy, and my hair was extremely dry earlier, but now it has become very shiny and smooth. My overall look has completely changed.",
    },
    {
        name: "Payal Soni",
        meta: "3 months ago · Google",
        text: "Its my first experience really love my haircut and style. All thanks to Ms. Tanu — she is very kind and understanding for the type of hair I wanted, and she did exactly the same.",
        ownerReply:
            "Thank you so much for the wonderful review! We're thrilled you had a great experience with us. We can't wait to welcome you back again soon!",
    },
    {
        name: "Angeleen Kaur",
        meta: "8 months ago · Google",
        text: "The service was really good... the staff was really humble and kind... enjoyed the whole process. First time had my nails and the quality of products they use was also great and of known brands. The best salon in Uttam Nagar.",
    },
];

export const REVIEW_QUOTES = [
    "I got my lashes and haircut done. Staff was very polite and love their work.",
    "Personal favouriteee place for every beauty service.",
    "Tanu and Neha — excellent experience and staff will take care of the customer.",
];

export const REVIEW_TAGS = ["nail extensions", "polite staff", "hair colour", "hair spa"];

export const COURSES = [
    {
        id: "makeup",
        title: "Professional Makeup Artistry",
        tagline: "Basic & Advance Level Training",
        intro: "From skin prep to HD bridal — master brush theory, face & eye geometry, airbrush machine work and every signature look clients ask for.",
        basic: [
            "CTM & Basics Theory", "Brush knowledge & theory", "Theory of Supra, Durma & practical",
            "Colour correction", "Concealing & skin knowledge", "Theory of face shapes",
            "Theory of eye shapes", "Contouring & highlighting — cream & powder", "Smokey eyes",
            "Party eyes with glittery eyes", "Half cut crease", "Smudged & wing liner",
            "Eye brow defining", "Different types of blush application", "Lip shades & lipstick application",
            "Self makeup", "Day makeup", "Evening makeup", "Party makeup", "Evening party makeup",
            "Haldi makeup", "Mehandi makeup", "Engagement makeup",
        ],
        advance: [
            "Colour wheel theory", "Product knowledge", "Airbrush machine knowledge", "Bridal look",
            "HD bridal look", "Airbrush makeup", "Reception makeup", "Indo-western bridal",
            "Glam look", "Portfolio looks", "Arabic eye", "Full cut crease", "Hallow eye",
            "Glam eye", "Retro look", "Saree draping", "Lehnga draping — 22 inches",
        ],
    },
    {
        id: "hairstyling",
        title: "Professional Hair Styling",
        tagline: "Basic & Advance Level Training",
        intro: "Braids to Hollywood waves — sectioning, thermal tools, buns and bridal setting with tikka, passa & matha patti placements.",
        basic: [
            "Basic hair theory", "Hair sectioning", "Basic braids (out or in)", "One strand braid",
            "Two strand braid", "Three strand braid", "Four strand braid", "Dutch braid", "French braid",
            "Basic ponytail", "Ironing", "Crimping", "Straight dryer", "Basic curls", "Loose curls",
            "Tight curls", "Basic buns", "Messy bun", "High bun", "Front variation", "Crown section puff",
            "Basic open straight hairstyle", "Curling technique with straightener", "Sleek hair styling",
            "Messy front hair styling",
        ],
        advance: [
            "Advance hair theory", "Hair styling products knowledge", "Hair teasing", "Back combing",
            "French braid (advance)", "Fish tail", "Haldi / mehndi messy braid", "High ponytail",
            "Hollywood waves", "Front styling", "Half-tie front styling", "Full-tie front styling",
            "Side hair styling", "Donut setting / padding", "Extensions setting",
            "Bun setting with tikka, passa, matha patti", "Rose bun", "Braid bun",
        ],
    },
    {
        id: "hairchemical",
        title: "Professional Hair Chemical",
        tagline: "Basic & Advance Level Training",
        intro: "The science of colour and care — shade theory, foil techniques, keratin, botox and L'Oréal colour keys on real salon chemistry.",
        basic: [
            "Hair chemical basics", "Details of base shades & fashion shades",
            "Foil wrapping techniques — weaving & slice", "Colour wheel theory", "Product knowledge",
            "Hair & scalp analysis", "Hair spa", "Hair smoothening / rebonding",
        ],
        advance: [
            "Hair extensions & theory knowledge", "Keratin treatment", "Keratin theory knowledge",
            "Botox treatment with theory knowledge", "Hair fall treatment", "Dandruff treatment",
            "Treatment for dry or damaged hair", "Colour change techniques",
            "Scientific approach to colour", "L'Oréal colour key",
        ],
    },
    {
        id: "haircutting",
        title: "Professional Hair Cutting",
        tagline: "Basic & Advance Level Training",
        intro: "One-length to graduated bobs and men's barbering — clean geometry, tool mastery and dryer finishing on every cut.",
        basic: [
            "Basic theory", "One length cutting", "Straight cut", "U-cut", "V-cut", "Deep U-cut",
            "Deep V-cut", "Classic cutting", "Forward graduated cut", "Layer cut",
            "Short square layer cut", "Cutting tools knowledge",
        ],
        advance: [
            "Advance cutting theory", "Classic bob cut", "Graduated bob cut",
            "Dryer settings on cuttings", "Out-turns", "In-turns", "Men's barbering",
        ],
    },
];

export const TIME_SLOTS = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
    "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

export const ARTISTS = ["No preference", "Tanu", "Neha"];

export const SERVICE_MENU = [
    {
        group: "Hair", tabs: ["HAIR"],
        items: [
            { name: "Hair Wash", price: 249 }, { name: "Hair Cut", price: 349 },
            { name: "Advance Hair Cut", price: 499 }, { name: "Keratin", price: 1999 },
            { name: "Advance Keratin", price: 2499 }, { name: "Hair Botox", price: 2999 },
            { name: "Ombré", price: 2999 }, { name: "Smoothening", price: 3999 },
            { name: "Nanoplastia", price: 3999 }, { name: "Balayage", price: 3999 },
            { name: "Kerasmooth", price: 3999 }, { name: "Kerashine", price: 3999 },
            { name: "Global Base Colour", price: 3999 }, { name: "Highlights", price: 4999 },
            { name: "G.K. Keratin", price: 6999 },
        ],
    },
    {
        group: "Hair Spa", tabs: ["HAIR"],
        items: [
            { name: "Hair Spa", price: 499 }, { name: "Schwarzkopf Spa", price: 999 },
            { name: "Fiber Spa", price: 1499 }, { name: "Protein Spa", price: 1499 },
            { name: "Botox Spa", price: 1999 }, { name: "Plex", price: 1999 },
        ],
    },
    {
        group: "Root Touch Up", tabs: ["HAIR"],
        items: [
            { name: "Streax", price: 699 }, { name: "L'Oréal", price: 999 },
            { name: "Inoa", price: 1499 }, { name: "Schwarzkopf", price: 1499 },
        ],
    },
    {
        group: "Hair Extensions", tabs: ["HAIR"],
        items: [
            { name: "Hair Extensions — 22 inches", price: 7000 },
            { name: "Hair Extensions — 24 inches", price: 9999 },
            { name: "Hair Extensions — 26 inches", price: 13000 },
            { name: "Hair Extensions — 30 inches", price: 16000 },
        ],
    },
    {
        group: "Facials", tabs: ["SKIN"],
        items: [
            { name: "Fruit Facial", price: 999 }, { name: "Aroma Facial", price: 1499 },
            { name: "Lotus Facial", price: 1499 }, { name: "Fyc Facial", price: 1499 },
            { name: "Red Wine Facial", price: 1499 }, { name: "Raga Facial", price: 1999 },
            { name: "O3 Facial", price: 2499 }, { name: "Hydra Facial", price: 2999 },
            { name: "Jeannot Facial", price: 4999 },
        ],
    },
    {
        group: "Cleanups", tabs: ["SKIN"],
        items: [
            { name: "Fruit Cleanup", price: 399 }, { name: "Lotus Cleanup", price: 499 },
            { name: "O3 Cleanup", price: 799 }, { name: "Raga Cleanup", price: 999 },
        ],
    },
    {
        group: "Lips & BB Glow", tabs: ["SKIN"],
        items: [
            { name: "Lip Concealing (per sitting)", price: 2499 },
            { name: "Lip Shading (per sitting)", price: 2999 },
            { name: "BB Glow", price: 3499 }, { name: "BB Glow with Derma", price: 5999 },
            { name: "BB Glow with Water Shine", price: 6999 },
        ],
    },
    {
        group: "Nails", tabs: ["NAILS"],
        items: [
            { name: "Gel Nail Paint", price: 199 }, { name: "Permanent Nail Paint", price: 199 },
            { name: "Extensions Removal", price: 249 }, { name: "Temporary Nail Extensions", price: 299 },
            { name: "Acrylic Nail Extensions with Paint", price: 399 },
            { name: "Temporary Nail Extensions with Art", price: 499 },
            { name: "Gel Nail Extensions with Paint", price: 599 },
            { name: "Gel Nail Extensions with Art", price: 699 },
        ],
    },
    {
        group: "Manicure & Pedicure", tabs: ["NAILS"],
        items: [
            { name: "Basic Manicure / Pedicure", price: 449 },
            { name: "Luxury Manicure / Pedicure", price: 599 },
            { name: "Crystal Manicure / Pedicure", price: 999 },
        ],
    },
    {
        group: "Eyelashes", tabs: ["LASHES & PMU"],
        items: [
            { name: "Classic Eyelashes", price: 799 }, { name: "Hybrid Eyelashes", price: 999 },
            { name: "Volume Eyelashes", price: 1799 }, { name: "Heavy Volume Eyelashes", price: 2999 },
        ],
    },
    {
        group: "PMU Services", tabs: ["LASHES & PMU"],
        items: [
            { name: "Microblading", price: 4999 }, { name: "Shading", price: 7999 },
            { name: "Nanoblading", price: 9999 }, { name: "Combination", price: 14999 },
        ],
    },
    {
        group: "Waxing", tabs: ["BODY"],
        note: "Alive Era base prices — Dark Chocolate, White Chocolate & Rica options at the salon",
        items: [
            { name: "Upper Lip", price: 49 }, { name: "Forehead", price: 49 },
            { name: "Side Locks", price: 79 }, { name: "Underarms", price: 99 },
            { name: "Half Arms", price: 149 }, { name: "Half Legs", price: 199 },
            { name: "Full Face", price: 199 }, { name: "Full Body Wax", price: 1199 },
        ],
    },
    {
        group: "Bleach & D-Tan", tabs: ["BODY"],
        items: [
            { name: "Face Bleach", price: 399 }, { name: "Feet Bleach", price: 499 },
            { name: "Arms Bleach", price: 799 }, { name: "Full Body Bleach", price: 2499 },
        ],
    },
    {
        group: "Body Therapy", tabs: ["BODY"],
        items: [
            { name: "Body Scrub", price: 1499 }, { name: "Body Massage", price: 2999 },
            { name: "Body Polishing", price: 3999 }, { name: "Body Silk", price: 4999 },
        ],
    },
    {
        group: "Head Massage", tabs: ["BODY"],
        items: [
            { name: "Mustard Oil Massage", price: 249 }, { name: "Coconut Oil Massage", price: 249 },
            { name: "Olive Oil Massage", price: 349 }, { name: "Almond Oil Massage", price: 349 },
        ],
    },
    {
        group: "Bridal & Makeup", tabs: ["BRIDAL"],
        items: [
            { name: "Bridal Makeup" }, { name: "HD Bridal Makeup" }, { name: "Party Makeup" },
            { name: "Engagement Makeup" }, { name: "Haldi Makeup" }, { name: "Mehndi Makeup" },
            { name: "Reception Makeup" },
        ],
    },
];
