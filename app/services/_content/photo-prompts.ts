const photoPrompt = (scene: string, composition: string) =>
  `${scene}. ${composition}. Photorealistic candid editorial healthcare photography in Melbourne, Australia, natural daylight, warm but clinically credible, real home or community environment, respectful person-centred interaction, diverse Australian adults and families, realistic skin texture and lived-in details, calm navy teal and soft green colour harmony. No visible logos, no text, no watermark, no exaggerated smiles, no hospital setting, no staged stock-photo poses, no disability stereotypes.`;

export const servicePhotoPrompts = {
  "physiotherapy": {
    hero: photoPrompt("A physiotherapist supporting an older woman during a gentle sit-to-stand movement assessment in a bright Melbourne living room", "Wide 16:9 environmental portrait, people positioned on the right, naturally darker uncluttered wall on the left for a white page title"),
    supporting: photoPrompt("A physiotherapist and an adult client walking together along the garden path outside the client's suburban home while discussing mobility goals", "Horizontal 3:2 candid mid-distance scene with relaxed movement and clear home context"),
  },
  "occupational-therapy": {
    hero: photoPrompt("An occupational therapist observing an adult client preparing a simple drink in their own accessible kitchen and discussing practical independence", "Wide 16:9 scene, activity on the right, quiet darker cabinetry on the left for title text"),
    supporting: photoPrompt("An occupational therapist and client reviewing a small everyday adaptive tool together at a dining table in a real home", "Horizontal 3:2 close environmental scene focused on hands, conversation and practical problem-solving"),
  },
  "allied-health-assistance": {
    hero: photoPrompt("An allied health assistant guiding an adult through a delegated seated exercise program at home with a printed clinician plan nearby", "Wide 16:9 scene, action on the right and clean negative space on the left for title text"),
    supporting: photoPrompt("An allied health assistant supporting repeated functional movement practice beside a kitchen bench while the participant remains actively involved", "Horizontal 3:2 candid scene showing safe guidance, repetition and participant choice"),
  },
  "myotherapy": {
    hero: photoPrompt("A qualified myotherapist discussing shoulder movement with an adult client in a calm professional treatment room before hands-on care", "Wide 16:9 composition, consultation on the right and a softly shadowed plain wall on the left for title text"),
    supporting: photoPrompt("A myotherapist demonstrating a gentle home movement strategy to an adult client beside a treatment table", "Horizontal 3:2 natural clinical scene with clear communication and no dramatic pain expressions"),
  },
  "early-childhood-supports": {
    hero: photoPrompt("An early childhood practitioner sitting on the floor with a young child and parent during everyday play in a bright family living room", "Wide 16:9 family-centred scene, play activity on the right and quiet negative space on the left for title text"),
    supporting: photoPrompt("A parent and practitioner encouraging a young child to participate in a simple play routine using familiar toys at home", "Horizontal 3:2 candid low-angle scene focused on connection, child choice and family coaching"),
  },
  "personal-care": {
    hero: photoPrompt("A support worker respectfully assisting an adult to choose clothing and prepare for the day in a private home, with the participant leading the interaction", "Wide 16:9 discreet scene with no intimate care shown, subjects on the right and calm negative space on the left for title text"),
    supporting: photoPrompt("A support worker and participant organising a morning routine together at a bedroom dresser, focused on dignity and choice", "Horizontal 3:2 candid scene with respectful distance and natural home details"),
  },
  "travel-transport": {
    hero: photoPrompt("A support worker and adult participant preparing to leave a suburban Melbourne home for an appointment, checking the route together beside a parked car", "Wide 16:9 outdoor scene with subjects on the right and shaded house exterior on the left for title text"),
    supporting: photoPrompt("An adult participant and support worker arriving confidently at a local community destination and walking from the car together", "Horizontal 3:2 candid street-level scene showing practical travel support without posed gestures"),
  },
  "daily-tasks-shared-living": {
    hero: photoPrompt("Two housemates and a support worker planning shared household tasks together around a kitchen table in a welcoming Australian home", "Wide 16:9 group scene, people on the right and uncluttered darker wall on the left for title text"),
    supporting: photoPrompt("A participant preparing a simple shared meal while a support worker offers light guidance in the background", "Horizontal 3:2 candid kitchen scene centred on participation, routine and independence"),
  },
  "supported-independent-living": {
    hero: photoPrompt("An adult participant and support worker reviewing the day's home routine together in a comfortable shared living room", "Wide 16:9 home scene with interaction on the right and calm shadowed space on the left for title text"),
    supporting: photoPrompt("A participant independently completing a household routine while a support worker remains nearby and available rather than taking over", "Horizontal 3:2 candid scene showing capability, safety and an ordinary lived-in home"),
  },
  "development-life-skills": {
    hero: photoPrompt("An adult participant learning to prepare a healthy meal with a support worker in a bright home kitchen", "Wide 16:9 activity scene with subjects on the right and darker cabinetry on the left for title text"),
    supporting: photoPrompt("A participant practising weekly planning and budgeting with a notebook, groceries and a support worker at a dining table", "Horizontal 3:2 overhead-leaning candid scene focused on practical tools and active decision-making"),
  },
  "household-tasks": {
    hero: photoPrompt("An adult participant and support worker organising laundry together in a clean but realistically lived-in Melbourne home", "Wide 16:9 scene with activity on the right and quiet wall space on the left for title text"),
    supporting: photoPrompt("A participant tidying and organising a kitchen shelf with light support, choosing where everyday items belong", "Horizontal 3:2 candid home scene that shows participation rather than someone cleaning for the person"),
  },
  "innovative-community-participation": {
    hero: photoPrompt("An adult participant and support worker taking part in a small hands-on community art workshop in Melbourne", "Wide 16:9 creative community scene with people on the right and a naturally darker studio area on the left for title text"),
    supporting: photoPrompt("A participant exploring a new local interest with a support worker nearby, engaged in a practical creative activity alongside other community members", "Horizontal 3:2 candid documentary scene focused on confidence and genuine participation"),
  },
  "community-participation": {
    hero: photoPrompt("An adult participant and support worker browsing a relaxed Melbourne neighbourhood market and making choices together", "Wide 16:9 community scene with subjects on the right and shaded market background on the left for title text"),
    supporting: photoPrompt("A participant greeting familiar people at a local community garden while a support worker stays naturally in the background", "Horizontal 3:2 candid scene showing belonging, autonomy and local connection"),
  },
  "group-centre-activities": {
    hero: photoPrompt("A small inclusive group of adults taking part in a purposeful cooking or creative activity at an accessible community centre", "Wide 16:9 group scene with activity on the right and a calm darker interior area on the left for title text"),
    supporting: photoPrompt("Several participants collaborating around a shared table during an accessible group program with staff offering unobtrusive support", "Horizontal 3:2 candid scene showing different levels of participation and genuine social connection"),
  },
  "support-workers": {
    hero: photoPrompt("A support worker and adult participant walking together through a leafy Melbourne neighbourhood while discussing the day's plans", "Wide 16:9 lifestyle scene with subjects on the right and shaded foliage on the left for title text"),
    supporting: photoPrompt("A participant and support worker reviewing an everyday plan together at home before beginning a chosen activity", "Horizontal 3:2 candid home scene showing clear communication, trust and participant direction"),
  },
} as const;

export type ServicePhotoPromptKey = keyof typeof servicePhotoPrompts;
