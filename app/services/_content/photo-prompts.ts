const sharedPhotoStyle =
  "Photorealistic candid editorial healthcare photography in Melbourne, Australia. Use varied authentic environments across the collection, including leafy gardens, local parks, neighbourhood streets, community venues, real homes, welcoming clinics, warm treatment rooms, accessible hydrotherapy pools and bright community-hospital outpatient spaces where appropriate. Warm natural or window light with sunlit yellow-green highlights, eucalyptus green, honey, soft ochre and restrained teal accents. Respectful person-centred interaction with diverse Australian adults and families, realistic skin texture and lived-in details. Show genuine expressions such as attentive concentration, reassurance, curiosity, effort, relief, quiet laughter and warm connection. Vary camera distance, viewpoint, age mix, wardrobe and group composition between pages. No visible logos, no text, no watermark, no staged stock-photo poses, no disability stereotypes, no sterile operating theatre, no distress, no invasive procedure, no forceful neck manipulation and no dramatic body twisting.";

const heroPhotoPrompt = (scene: string, composition: string) =>
  `${scene}. ${composition}. This is a service-page background behind a title and copy card: keep the visual story simple, use only the essential people and action, avoid small props and clutter, place the focal activity away from the text area, and preserve broad calm negative space with readable tonal contrast. Outdoor or open transitional environments are preferred where they suit the service. ${sharedPhotoStyle}`;

const detailPhotoPrompt = (scene: string, composition: string) =>
  `${scene}. ${composition}. This is a supporting content-card image: show a richer close or medium-distance story with specific hands, tools, objects, environmental details and a clearly understandable care activity. Keep the interaction natural and clinically credible rather than decorative. Treatment scenes may include supervised aquatic rehabilitation, therapeutic massage, a client comfortably positioned on a professional treatment table, instrument-assisted soft-tissue work and controlled physiotherapy manual therapy or gentle joint mobilisation. ${sharedPhotoStyle}`;

const photoPrompt = (scene: string, composition: string) =>
  composition.includes("16:9")
    ? heroPhotoPrompt(scene, composition)
    : detailPhotoPrompt(scene, composition);

export const servicePhotoPrompts = {
  "physiotherapy": {
    hero: photoPrompt("A physiotherapist and older adult walking confidently together along a wide path beside a community rehabilitation garden", "Wide 16:9 outdoor scene, people small on the far right and broad calm shaded foliage and path on the left for title text"),
    supporting: photoPrompt("A physiotherapist supporting an adult client through a gentle aquatic rehabilitation exercise in a warm accessible hydrotherapy pool, with the client actively practising balance and movement", "Horizontal 3:2 pool-level documentary scene with visible water reflections, safe professional supervision and natural expressions of effort and encouragement"),
  },
  "occupational-therapy": {
    hero: photoPrompt("An occupational therapist and adult client walking slowly through an accessible sensory garden while discussing everyday independence goals", "Wide 16:9 scene, people on the right and uninterrupted darker foliage and path on the left for title text"),
    supporting: photoPrompt("An occupational therapist and client testing a jar opener, ergonomic kettle handle and non-slip mat while preparing a warm drink in a real home kitchen", "Horizontal 3:2 close environmental scene focused on hands, adaptive tools, conversation and practical problem-solving"),
  },
  "social-work": {
    hero: photoPrompt("A social worker and adult participant planning practical goals together at a dining table in a welcoming home", "Wide 16:9 home scene, people on the right and calm softly lit living space on the left for title text"),
    supporting: photoPrompt("A social worker and participant discussing community connections and next steps using a simple notebook and local service information", "Horizontal 3:2 candid scene focused on attentive conversation, participant choice and practical planning details"),
  },
  "allied-health-assistance": {
    hero: photoPrompt("An allied health assistant and adult participant practising a gentle walking exercise in an open community-hospital rehabilitation courtyard", "Wide 16:9 scene, people on the right and a clean shaded wall with garden depth on the left for title text"),
    supporting: photoPrompt("An allied health assistant guiding a seated resistance-band exercise from a printed delegated therapy plan while the participant tracks repetitions", "Horizontal 3:2 close candid scene showing safe hand placement, band tension, participant effort and practical therapy details"),
  },
  "myotherapy": {
    hero: photoPrompt("A myotherapist observing an adult client's gentle shoulder movement before treatment in a warm professional treatment room opening onto a green courtyard", "Wide 16:9 composition, people standing on the right and a broad softly shadowed ochre wall on the left for title text"),
    supporting: photoPrompt("A physiotherapist using a small professional instrument for controlled soft-tissue treatment on an adult client's shoulder while the client lies comfortably on a treatment table", "Horizontal 3:2 close documentary scene focused on safe hand placement, the non-invasive treatment tool, relaxed body positioning and a reassuring conversation"),
  },
  "early-childhood-supports": {
    hero: photoPrompt("A young child, parent and early childhood practitioner exploring bubbles together in a leafy accessible Melbourne playground", "Wide 16:9 low-angle family-centred scene, playful group on the right and broad quiet lawn with shaded foliage on the left for title text"),
    supporting: photoPrompt("A parent and early childhood practitioner helping a young child build a simple turn-taking game with blocks, picture cards and familiar toys at home", "Horizontal 3:2 candid child-height scene focused on expressive faces, hands, play details and family coaching"),
  },
  "personal-care": {
    hero: photoPrompt("An adult participant and support worker stepping through the front garden gate together, ready for the day", "Wide 16:9 discreet outdoor scene, people on the right and an uncluttered shaded hedge and path on the left for title text"),
    supporting: photoPrompt("A support worker and participant organising a morning routine together at a bedroom dresser, with the participant choosing clothing and grooming items", "Horizontal 3:2 candid scene showing hands, garments, routine tools, dignity and participant choice"),
  },
  "travel-transport": {
    hero: photoPrompt("An adult participant and support worker walking toward an accessible tram stop together with calm confidence", "Wide 16:9 outdoor scene, people small on the right and broad shaded pavement and foliage on the left for title text"),
    supporting: photoPrompt("A participant and support worker planning a journey together using a phone map, transit card and small appointment folder beside a parked car", "Horizontal 3:2 over-the-shoulder scene showing hands, route planning, keys, bag and collaborative decision-making"),
  },
  "daily-tasks-shared-living": {
    hero: photoPrompt("Two housemates and a support worker carrying fresh herbs from a sunny shared garden toward their home", "Wide 16:9 outdoor group scene, people on the right and a calm shaded wall and lawn on the left for title text"),
    supporting: photoPrompt("Two housemates preparing a colourful shared meal while a support worker offers light guidance", "Horizontal 3:2 candid kitchen scene showing separate tasks, safe food preparation, hands, ingredients and genuine teamwork"),
  },
  "supported-independent-living": {
    hero: photoPrompt("An adult participant unlocking the front door of a comfortable shared home while a support worker waits a respectful step behind", "Wide 16:9 outdoor home scene, people and doorway on the right and a broad softly shadowed exterior wall on the left for title text"),
    supporting: photoPrompt("A participant independently organising a weekly household routine at the kitchen table while a support worker remains nearby and available", "Horizontal 3:2 candid scene showing a laundry basket, picture schedule, groceries, household keys, capability and participant choice"),
  },
  "development-life-skills": {
    hero: photoPrompt("An adult participant and support worker choosing fresh herbs together in a sunny accessible community garden", "Wide 16:9 outdoor scene, people on the right and broad darker foliage and open path on the left for title text"),
    supporting: photoPrompt("A participant practising weekly meal planning and budgeting with a support worker at a dining table", "Horizontal 3:2 overhead-leaning candid scene showing hands, calculator, coins, grocery items, picture list, notebook and active decision-making"),
  },
  "household-tasks": {
    hero: photoPrompt("An adult participant and support worker hanging freshly washed linen together on an outdoor clothesline", "Wide 16:9 outdoor scene, people and clothesline on the right and broad calm hedge and lawn on the left for title text"),
    supporting: photoPrompt("A participant choosing where to organise everyday kitchen items while a support worker offers light guidance", "Horizontal 3:2 close home scene showing hands, practical baskets, jars, cleaning tools and participation rather than someone cleaning for the person"),
  },
  "innovative-community-participation": {
    hero: photoPrompt("An adult participant and support worker arriving at an open-air community ceramics workshop", "Wide 16:9 outdoor creative scene, people on the right and a broad shaded studio wall and garden on the left for title text"),
    supporting: photoPrompt("A participant shaping a clay vessel at a pottery wheel while a support worker and artist offer unobtrusive encouragement", "Horizontal 3:2 close documentary scene showing hands in clay, pottery tools, apron textures, studio shelves, confidence and genuine participation"),
  },
  "community-participation": {
    hero: photoPrompt("An adult participant and support worker walking into a relaxed neighbourhood community garden event", "Wide 16:9 outdoor community scene, people on the right and a broad shaded path and foliage on the left for title text"),
    supporting: photoPrompt("A participant choosing seedlings and chatting with a familiar community volunteer while a support worker stays naturally in the background", "Horizontal 3:2 candid scene showing hands, plants, soil textures, belonging, autonomy and local connection"),
  },
  "group-centre-activities": {
    hero: photoPrompt("A small inclusive group of adults arriving together at an accessible community centre courtyard", "Wide 16:9 outdoor group scene, people on the right and a broad calm shaded wall and path on the left for title text"),
    supporting: photoPrompt("Several participants collaborating on a colourful shared cooking activity with staff offering unobtrusive support", "Horizontal 3:2 candid scene showing separate hands-on tasks, bowls, utensils, ingredients, different levels of participation and genuine social connection"),
  },
  "support-workers": {
    hero: photoPrompt("A support worker and adult participant walking together beside a quiet creek trail while discussing the day's plan", "Wide 16:9 outdoor scene, people small on the right and broad darker foliage and curving path on the left for title text"),
    supporting: photoPrompt("A participant and support worker reviewing an everyday plan together before leaving home", "Horizontal 3:2 close home scene showing hands, keys, reusable bag, picture schedule, water bottle, clear communication and participant-led choices"),
  },
} as const;

export type ServicePhotoPromptKey = keyof typeof servicePhotoPrompts;
